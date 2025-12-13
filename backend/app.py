# Import Flask framework
from flask import Flask, request, jsonify

# Import CORS to allow requests from different ports (Node → Flask)
from flask_cors import CORS

# Create Flask app instance
app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Define POST route to receive data
@app.route('/submit', methods=['POST'])
def submit():
    # Read JSON data sent from Node.js frontend
    data = request.get_json()

    # Print data in terminal (backend visibility)
    print("Received from frontend:", data)

    # Prepare response to send back
    response = {
        "status": "success",
        "message": "Data received successfully from Flask backend",
        "data_received": data
    }

    # Send JSON response back to frontend
    return jsonify(response)

# Run Flask server
if __name__ == "__main__":
    app.run(debug=True, port=5001)
