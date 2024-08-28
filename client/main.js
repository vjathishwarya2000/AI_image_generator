const generateBtn = document.querySelector(".generate-btn");
const promptInput = document.querySelector(".prompt-input");
const generatedImage = document.querySelector(".generated-image");

const generateImage = async () => {
    const response = await fetch("http://localhost:4000/generateImage", {
        method: "POST"
    });

    const data = await response.json();
    console.log("data");
};

generateImage();