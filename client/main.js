const generateBtn = document.querySelector(".generate-btn");
const promptInput = document.querySelector(".prompt-input");
const generatedImages = document.querySelectorAll(".generated-image");
const downloadBtns = document.querySelectorAll(".download-btn");

const showNotification = (message) => {
  alert(message);
};

const generateImages = async () => {
  const prompt = promptInput.value;

  if (prompt) {
    try {
      generatedImages.forEach((img) => {
        img.src = "images/generating.png";
      });

      const response = await fetch("http://localhost:4000/generateImages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: prompt }),
      });

      const data = await response.json();
      
      generatedImages.forEach((img, index) => {
        img.src = data.images[index];
        downloadBtns[index].href = data.images[index];
      });
    } catch (error) {
      console.log(error);
      showNotification("The images could not be generated.");
      generatedImages.forEach((img) => {
        img.src = "images/image-placeholder.png";
      });
    }
  } else {
    showNotification("Please enter the prompt");
  }
};

generateBtn.addEventListener("click", generateImages);