// const handleDragAndDrop = () => {
//   // Selecting all the list items
//   const listItems = document.querySelectorAll(".list__item");
//   const list = document.querySelector(".list");

import updateIndices from "./updateIndices";

//   // Declare a variable to track the index of the dragged element
//   let draggedItemIndex = null;

//   // Adding the drag start event to all the items and saving the index of the dragged item
//   //   listItems.forEach((item) => {
//   //     item.addEventListener("dragstart", (e) => {
//   //       item.classList.add("list__item--dragged");
//   //       draggedItemIndex = +e.target.getAttribute("data-index");
//   //     });
//   //     item.addEventListener("dragend", (e) => {
//   //       item.classList.remove("list__item--dragged");
//   //     });
//   //     item.addEventListener("dragover", (e) => {
//   //       e.preventDefault();
//   //     });

//   //     item.addEventListener("drop", (e) => {
//   //       const targetIndex = +e.target.getAttribute("data-index");
//   //       swapSteps(draggedItemIndex, targetIndex);
//   //       draggedItemIndex = null;
//   //     });
//   //   });
//   list.addEventListener("dragstart", (e) => {
//     if (e.target && e.target.nodeName === "LI") {
//       e.target.classList.add("list__item--dragged");
//       draggedItemIndex = +e.target.getAttribute("data-index");
//     }
//   });

//   list.addEventListener("dragend", (e) => {
//     if (e.target && e.target.nodeName === "LI") {
//       e.target.classList.remove("list__item--dragged");
//     }
//   });

//   list.addEventListener("dragover", (e) => {
//     e.preventDefault();
//   });

//   list.addEventListener("drop", (e) => {
//     if (e.target && e.target.nodeName === "LI") {
//       const targetIndex = +e.target.getAttribute("data-index");
//       swapSteps(draggedItemIndex, targetIndex);
//       draggedItemIndex = null;
//     }
//   });
// };

// const swapSteps = (fromIndex, toIndex) => {
//   const list = document.querySelector(".list");
//   const listItems = document.querySelectorAll(".list__item");

//   if (fromIndex && toIndex) {
//     const clonedItem1 = item1.cloneNode(true);
//     const clonedItem2 = item2.cloneNode(true);

//     list.replaceChild(clonedItem1, item2);
//     list.replaceChild(clonedItem2, item1);
//   }
//   handleDragAndDrop();
// };

// export default handleDragAndDrop;

// // const swapItems = (fromIndex, toIndex) => {
// //     const list = document.querySelector(".list");
// //     const listItems = document.querySelectorAll(".list__item"); // No need to spread

// //     const item1 = listItems[fromIndex].cloneNode(true);
// //     const item2 = listItems[toIndex].cloneNode(true);

// //     list.replaceChild(item1, listItems[toIndex]);
// //     list.replaceChild(item2, listItems[fromIndex]);
// //   };

// // addDragAndDropHandlers(); // Re-add event listeners after swapping

const handleDragAndDrop = () => {
  const list = document.querySelector(".list");

  let draggedItem = null;

  list.addEventListener("dragstart", (e) => {
    if (e.target && e.target.nodeName === "LI") {
      draggedItem = e.target;
      e.target.classList.add("list__item--dragged");
    }
  });

  list.addEventListener("dragend", (e) => {
    if (draggedItem) {
      draggedItem = null;
      e.target.classList.remove("list__item--dragged");
      updateIndices();
    }
  });

  list.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  list.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.target && e.target.nodeName === "LI" && draggedItem !== e.target) {
      const items = Array.from(list.children);
      const draggedIndex = items.indexOf(draggedItem);
      const targetIndex = items.indexOf(e.target);

      if (draggedIndex < targetIndex) {
        list.insertBefore(draggedItem, e.target.nextSibling);
      } else {
        list.insertBefore(draggedItem, e.target);
      }
    }
  });
};

export default handleDragAndDrop;
