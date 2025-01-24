import handleDragAndDrop from "./dragAndDrop.js";
import shuffleArray from "./shuffleArray.js";
import stepsForSoftwareProject from "./stepsData.js";

const createListItems = () => {
  const shuffledSteps = shuffleArray([...stepsForSoftwareProject]);
  const list = document.querySelector(".list");
  shuffledSteps.forEach((step, index) => {
    const listItem = document.createElement("li");
    list.append(listItem);
    listItem.textContent = `${index + 1}. ${step}`;
    listItem.classList.add("list__item");
    listItem.setAttribute("draggable", true);
    listItem.setAttribute("data-index", index);
  });

  handleDragAndDrop();
};

export default createListItems;
