const response = document.getElementById("response");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const noModal = document.getElementById("noModal");
const closeModal = document.getElementById("closeModal");

const openModal = () => {
  noModal.classList.add("active");
  noModal.setAttribute("aria-hidden", "false");
};

const closeModalHandler = () => {
  noModal.classList.remove("active");
  noModal.setAttribute("aria-hidden", "true");
};

yesButton.addEventListener("click", () => {
  window.location.href = "yes.html";
});

noButton.addEventListener("click", () => {
  response.textContent = "Not applicable ❤️";
  openModal();
});

closeModal.addEventListener("click", closeModalHandler);
noModal.addEventListener("click", (event) => {
  if (event.target === noModal) {
    closeModalHandler();
  }
});
