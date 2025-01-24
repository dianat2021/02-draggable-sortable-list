const updateIndices = () => {
  const listItems = document.querySelectorAll(".list__item");
  listItems.forEach((item, index) => {
    const stepDescription = item.textContent.split(". ")[1];
    item.textContent = `${index + 1}. ${stepDescription}`;
    item.setAttribute("data-index", index);
  });
};

export default updateIndices;
