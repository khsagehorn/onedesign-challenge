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

  selectElement.value = "1";
};

// Populate card content based on selection
const setCardData = (cardData, cardElement) => {
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

// Event handler for Select element
const selectInnovator = (dataArray, selectElement, card) => {
  selectElement.addEventListener("change", (event) => {
    const id = event.target.value;
    const cardData = dataArray.find(
      (item) => item.id.toString() === id.toString(),
    );

    if (cardData) {
      setCardData(cardData, cardElement);
    } else {
      console.log("Innovator data not found.");
    }
  });
};

// const setDefaultCard = () => {
//   selectElement.value = "1";
// };

if (!!data) {
  setOptions(data, selectElement);
  selectInnovator(data, selectElement, cardElement);
}
