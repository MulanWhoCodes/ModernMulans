// Array of life stages with images

const lifeStages = [
    { stage: "Entering and navigating the workforce", image: "assets/Workforce.jpg" },
    { stage: "Adulting", image: "assets/adulting.jpg" },
    { stage: "Choosing to be independent", image: "assets/independent.jpg" },
    { stage: "Finding Love", image: "assets/findingLove.jpg" },
    { stage: "Matrimony", image: "assets/Matrimony.gif" },
    { stage: "Growing a baby", image:"assets/Pregnancy.jpg" },
    { stage: "Birth and the first few years", image: "assets/Birth.jpg" },
    { stage: "Mummy life", image: "assets/Motherhood.jpg" },
    { stage: "Choosing to be a DINK", image: "assets/DINK.jpg" },
];

// Function to create a list of life stages with images and append it to the HTML
function displayLifeStages() {
    const lifeStagesList = document.getElementById("lifeStagesList");

    lifeStages.forEach((stage, index) => {
        const listItem = document.createElement("li");

        // Create a paragraph element for the life stage text
        const stageParagraph = document.createElement("p");
        stageParagraph.innerHTML = `<strong>${stage.stage}:</strong> is a wonderful time of life. Click on the image to find out more!`;

        // Create an image element
        const imgElement = document.createElement("img");
        imgElement.src = stage.image;
        imgElement.alt = `${stage.stage} Image`;

        // Append the life stage text, image and hyperlink to the list item
        listItem.appendChild(stageParagraph);
        listItem.appendChild(imgElement);

        lifeStagesList.appendChild(listItem);
    });
}

// Call the function to display life stages when the page loads
window.onload = displayLifeStages;
