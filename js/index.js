import data from "./data.js";

const selectElement = document.getElementById("innovators");
const cardElement = document.getElementsByClassName("card")[0];

// Set select options based on supplied data
const setOptions = (dataArray, selectElement) => {
  dataArray.forEach((item) => {
    const option = document.createElement("option");

    option.value = item.id;
    option.textContent = item.name;
    selectElement.appendChild(option);
  });
};

// Populate card data based on selection
const setCardData = (cardData, cardElement) => {
  const imagePath = "/assets/images/";

  const image = cardElement.getElementsByClassName("card__image")[0];
  const headline = cardElement.getElementsByClassName("card__headline")[0];
  const bodyCopy = cardElement.getElementsByClassName("card__body")[0];
  const link = cardElement.getElementsByClassName("card__link")[0];

  image.src = imagePath + cardData.image;
  image.alt = cardData.altText;
  headline.innerHTML = cardData.name;
  bodyCopy.innerHTML = cardData.description;
  link.href = cardData.url;
};

// Event handler for Select element
const selectInnovator = (dataArray, selectElement, card) => {
  selectElement.addEventListener("change", (event) => {
    const id = event.target.value;
    const cardData = dataArray.find(
      (item) => item.id.toString() === id.toString(),
    );

    setCardData(cardData, cardElement);
  });
};

setOptions(data, selectElement);
selectInnovator(data, selectElement, cardElement);
