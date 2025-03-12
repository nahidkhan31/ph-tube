const categoryVideos = (id) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      removeActiveClass();
      const clickedButton = document.getElementById(`btn-${id}`);
      clickedButton.classList.add("active");
      console.log(clickedButton);
      displayVideos(data.category);
    });
};

function displayCategories(categories) {
  //   get the conteiner
  const categoryConteiner = document.getElementById("category-container");

  // Loop on Array of ob jects
  for (let cat of categories) {
    // create an Element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
     <button id="btn-${cat.category_id}" onclick="categoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
     `;

    // Append the Element
    categoryConteiner.append(categoryDiv);
  }
}
