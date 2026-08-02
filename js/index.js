import data from "../assets/data.js";

const loadHtmlFile = async (filePath) => {
  const response = await fetch(filePath);
  const htmlText = await response.text();

  return htmlText;
};

const selectElement = document.getElementById("innovators");
const cardListElement = document.getElementById("card-list");
// const cardElement = document.getElementsByClassName("card")[0];
const cardHtml = await loadHtmlFile("./html/card.html");

// Set select options based on supplied data
const setOptions = (dataArray, selectElement) => {
  dataArray.forEach((item) => {
    const option = document.createElement("option");

    option.value = item.id;
    option.textContent = item.name;
    selectElement.appendChild(option);
  });
};

// Populate card content
const setCardData = (id, dataArray, cardElement) => {
  const cardData = dataArray.find(
    (item) => item.id.toString() === id.toString(),
  );

  const imagePath = "/assets/images/";

  const image = cardElement.getElementsByClassName("card__image")[0];
  const headline = cardElement.getElementsByClassName("card__headline")[0];
  const bodyCopy = cardElement.getElementsByClassName("card__body")[0];
  const link = cardElement.getElementsByClassName("card__link")[0];

  image.src = cardData.image ? imagePath + cardData.image : "";
  image.alt = cardData.altText ? cardData.altText : "";
  headline.innerHTML = cardData.name ? cardData.name : "";
  bodyCopy.innerHTML = cardData.description ? cardData.description : "";
  link.href = cardData.url ? cardData.url : "";
};

//
const buildSingleCard = (id, dataArray, cardListElement) => {
  cardListElement.innerHTML = cardHtml;
  const cardElement = cardListElement.getElementsByClassName("card")[0];

  setCardData(id, dataArray, cardElement);
};

// Event handler for Select element
const selectInnovator = (dataArray, selectElement) => {
  selectElement.addEventListener("change", (event) => {
    const id = event.target.value;

    if (id) {
      buildSingleCard(id, dataArray, cardListElement);
    } else {
      console.error("Innovator data not found.");
    }
  });
};

if (!!data) {
  setOptions(data, selectElement);
  buildSingleCard(1, data, cardListElement);
  selectInnovator(data, selectElement);
}
