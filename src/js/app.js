const stepsForSoftwareProject = [
  "Define project requirements",
  "Design system architecture",
  "Develop the frontend",
  "Develop the backend",
  "Test the application",
  "Deploy to production",
  "Maintain and update the project",
];

const createListItems = () => {
  const clonedSteps = [...stepsForSoftwareProject];
  const list = document.querySelector(".list");
  console.log(list);

  clonedSteps.forEach((step, index) => {
    const listItem = document.createElement("li");
    list.append(listItem);
    listItem.textContent = `${index + 1}. ${step}`;
    listItem.classList.add("list__item");
    listItem.setAttribute("draggable", true);
    listItem.setAttribute("data-index", index);
  });
};
document.addEventListener("DOMContentLoaded", createListItems);
