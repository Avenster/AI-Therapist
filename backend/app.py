from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from transformers import pipeline
import os
from langchain_community.llms import Ollama
import time
from requests.exceptions import ConnectionError

app = Flask(__name__)
CORS(app)

# Initialize components
os.environ["TOKENIZERS_PARALLELISM"] = "false"

def initialize_ollama(retries=3, delay=2):
    """Initialize Ollama with retry logic"""
    for attempt in range(retries):
        try:
            return Ollama(model="mistral")
        except ConnectionError:
            if attempt < retries - 1:
                print(f"Ollama server not accessible. Retrying in {delay} seconds...")
                time.sleep(delay)
            else:
                raise ConnectionError(
                    "Could not connect to Ollama server. Please ensure Ollama is running."
                )

# Initialize sentiment analyzer
sentiment_analyzer = pipeline(
    "sentiment-analysis",
    model="siebert/sentiment-roberta-large-english",
    device=0 if torch.cuda.is_available() else -1
)

# Initialize Ollama
try:
    llm = initialize_ollama()
except ConnectionError as e:
    print(f"Error initializing Ollama: {e}")
    llm = None

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_input = data.get('message', '')

        if not user_input.strip():
            return jsonify({
                'response': "I notice you're quiet. Would you like to share what's on your mind?"
            })

        # Analyze sentiment
        sentiment = sentiment_analyzer(user_input)[0]
        
        # Generate therapeutic response
        prompt = f"""You are a compassionate and professional therapist.
        The client says: {user_input}
        Their message sentiment is: {sentiment['label']} ({sentiment['score']:.2f})
        Provide a brief, empathetic response that acknowledges their emotions and encourages further discussion."""
        
        response = llm.invoke(prompt) if llm else "I apologize, but I'm having trouble connecting to my language model."
        
        return jsonify({'response': response})

    except Exception as e:
        print(f"Error processing request: {e}")
        return jsonify({
            'response': "I apologize, but I'm experiencing some technical difficulties. Let's try again in a moment."
        }), 500

if __name__ == '__main__':
    app.run(debug=True)