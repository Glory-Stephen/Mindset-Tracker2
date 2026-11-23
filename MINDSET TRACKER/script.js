const habitInput = document.getElementById("habit input");
const addButton = document.querySelector(".form-bar button");
const habitContainer = document.getElementById("habit-container");

addButton.addEventListener("click", function () {
  const habitName = habitInput.value.trim();

  if (habitName === "") {
    return;
  }

  const habitCard = document.createElement("div");
  habitCard.className = "habit-card";

  const name = document.createElement("span");
  name.className = "habit-name";
  name.textContent = habitName;

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function () {
    habitCard.remove();
  });

  habitCard.appendChild(name);
  habitCard.appendChild(deleteButton);
  habitContainer.appendChild(habitCard);

  habitInput.value = "";
});

document.querySelectorAll(".habit-card .delete").forEach(function (button) {
  button.addEventListener("click", function () {
    button.parentElement.remove();
  });
});

      





