// category section
function loadCategories() {
  //   1-fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    // 2-convert promise to json
    .then((res) => res.json())
    // sent data to display
    .then((data) => displayCategories(data.categories));
}

function displayCategories(categories) {
  //   get the conteiner
  const categoryConteiner = document.getElementById("category-container");

  // Loop on Array of ob jects
  for (let cat of categories) {
    // create an Element
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
   <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
   `;

    // Append the Element
    categoryConteiner.append(categoryDiv);
  }
}
loadCategories();
