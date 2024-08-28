const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.listen(4000, () => console.log("Server running on port 4000"));

const HUGGING_FACE_API_URL = "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5";

const generateImage = async (prompt) => {
    try {
      const response = await axios({
        method: 'post',
        url: 'https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5',
        headers: {
          'Authorization': `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({ 
          inputs: prompt,
          options: { wait_for_model: true }
        }),
        responseType: 'arraybuffer'
      });
  
      const base64Image = Buffer.from(response.data, 'binary').toString('base64');
      return `data:image/jpeg;base64,${base64Image}`;
    } catch (error) {
      console.error("Error generating image:", error.response ? error.response.data.toString() : error.message);
      throw error;
    }
  };

app.post("/generateImages", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const imagePromises = Array(4).fill().map(() => generateImage(prompt));
    const images = await Promise.all(imagePromises);
    res.send({ images });
  } catch (error) {
    res.status(500).send({ error: "Failed to generate images" });
  }
});