# Image Generation App
This project is a web application that allows users to generate images based on a text prompt using a machine learning model hosted on Hugging Face's API. The frontend is built with vanilla JavaScript, HTML, and CSS, while the backend is built using Node.js with Express.

## Features
- Users can input a text prompt to generate images.
- The app uses Hugging Face's Stable Diffusion model to generate images.
- Four images are generated based on the user's prompt.
- Users can download the generated images.


## Getting Started
### Prerequisites
- Node.js: Ensure you have Node.js installed (version 12 or higher).

- npm: Node Package Manager, usually comes with Node.js.

- Hugging Face API Key: You'll need an API key from Hugging Face to use their models.

### Usage
1. Open index.html in a web browser.
2. Enter a text prompt in the input field.
3. Click the "Generate" button to generate images.
4. Download the generated images using the provided download buttons.

### Dependencies

- Frontend:
    No external libraries are required; it is built with vanilla JavaScript, HTML, and CSS.

- Backend:

    express: Web framework for Node.js.

    cors: Middleware for enabling Cross-Origin Resource Sharing.

    dotenv: For managing environment variables.
    
    axios: For making HTTP requests to the Hugging Face API.
