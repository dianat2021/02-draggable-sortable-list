import createListItems from "./createListItems";
import shuffleArray from "./shuffleArray";
import stepsForSoftwareProject from "./stepsData";

const compareOrder = () => {
  const listItems = document.querySelectorAll(".list__item");
  const currentOrder = [...listItems].map(
    (item) => item.textContent.split(". ")[1]
  );
  console.log(currentOrder);

  const isCorrect = currentOrder.every(
    (step, index) => step === stepsForSoftwareProject[index]
  );
  currentOrder.forEach((step, index) => {
    // const originalStep = stepsForSoftwareProject[index];
    // console.log(`Comparing: ${step} with ${originalStep}`);
    if (step === stepsForSoftwareProject[index]) {
      listItems[index].classList.add("correct");
      listItems[index].classList.remove("incorrect");
    } else {
      listItems[index].classList.add("incorrect");
      listItems[index].classList.remove("correct");
    }
  });

  const compareResultMessage = document.createElement("p");
  document.querySelector(".main-container").append(compareResultMessage);

  const tryAgainButton = document.createElement("button");
  document.querySelector(".main-container").append(tryAgainButton);
  tryAgainButton.textContent = "Try again";
  tryAgainButton.addEventListener("click", () => {
    window.location.reload();
  });

  if (isCorrect) {
    compareResultMessage.textContent = "The order is correct!";
  } else {
    compareResultMessage.textContent = "The order is incorrect! Try again!";
  }
};
export default compareOrder;
