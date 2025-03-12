function removeActiveClass() {
  const activeButtons = document.getElementsByClassName("active");
  for (let activeButton of activeButtons) {
    activeButton.classList.remove("active");
  }
}
