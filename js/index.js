import data from "../assets/data.js";

// Fetch an HTML partial
const loadHtmlFile = async (filePath) => {
  const response = await fetch(filePath);
  const htmlText = await response.text();

  return htmlText;
};

const selectElement = document.getElementById("innovators");
const cardListElement = document.getElementById("card-list");
const scrollTrigger = document.getElementById("scroll-trigger");
const cardSection = document.getElementById("card-display-section");
const errorHtml = await loadHtmlFile("./html/error.html");
const cardHtml = await loadHtmlFile("./html/card.html");

// Set select options based on supplied data
const setOptions = (dataArray, selectElement) => {
  const optionAll = document.createElement("option");
  optionAll.value = "all";
  optionAll.textContent = "All Innovators";

  dataArray.forEach((item) => {
    const option = document.createElement("option");

    option.value = item.id;
    option.textContent = item.name;
    selectElement.appendChild(option);
  });

  selectElement.append(optionAll);
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

// Build single card HTML and content
const buildSingleCard = (id, dataArray, cardListElement) => {
  cardListElement.innerHTML = cardHtml;
  const cardElement = cardListElement.getElementsByClassName("card")[0];

  setCardData(id, dataArray, cardElement);
};

// Build all cards
const buildAllCards = (dataArray, cardListElement) => {
  cardListElement.innerHTML = "";
  dataArray.forEach((innovator, index) => {
    cardListElement.insertAdjacentHTML("beforeend", cardHtml);
    const cardElement = cardListElement.getElementsByClassName("card")[index];
    const cardId = dataArray[index].id.toString();

    setCardData(cardId, dataArray, cardElement);
  });
};

// Event handler for Select element
const selectInnovator = (dataArray, selectElement, cardSection) => {
  selectElement.addEventListener("change", (event) => {
    const id = event.target.value;

    if (id && id === "all") {
      buildAllCards(dataArray, cardListElement);
    } else if (id && id !== "all") {
      buildSingleCard(id, dataArray, cardListElement);
    } else {
      console.error("Innovator data not found.");
      cardSection.innerHTML = errorHtml;
    }
  });
};

// Helper function for scroll button
const handleClick = (pageSection) => {
  pageSection.scrollIntoView({ behavior: "smooth" });
};

// Event handler for scroll button
const heroButtonClick = (scrollTrigger, pageSection) => {
  scrollTrigger.addEventListener("click", (event) => {
    event.preventDefault();
    handleClick(pageSection);
  });
};

heroButtonClick(scrollTrigger, cardSection);

if (data && data.length) {
  setOptions(data, selectElement);
  buildSingleCard(1, data, cardListElement);
  selectInnovator(data, selectElement);
} else {
  console.error("Innovator Data Not Found");
  cardSection.innerHTML = errorHtml;
}
