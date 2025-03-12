function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => {
      removeActiveClass();
      document.getElementById("btn-all").classList.add("active");
      displayVideos(data.videos);
    });
}
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");

  videoContainer.innerHTML = ``;

  if (videos.length == 0) {
    videoContainer.innerHTML = `
    <div
        class="py-20 col-span-full text-center flex flex-col justify-center items-center">
        <img class="" src="logo/Icon.png" alt="" />
        <h2 class="font-bold text-2xl">
          Oops!! Sorry, There is no content here
        </h2>
      </div>
    `;
    return;
  }

  videos.forEach((video) => {
    // creat element
    // console.log(video);

    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
     <div class="card bg-base-100">
        <figure class="relative">
          <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" alt="thumbnail" />
          <span
            class="absolute bottom-2 right-2 text-white bg-black px-2 rounded"
            >3hrs 56 min ago</span
          >
        </figure>
        <div class="flex gap-3 px-0 py-5">
          <div class="profile">
            <div class="avatar">
              <div
                class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                <img
                src="${video.authors[0].profile_picture}" />
              </div>
            </div>
          </div>
          <div class="intro">
            <h2 class="text-sm font-semibold">Midnight Serenade</h2>
            <p class="text-sm text-gray-500 flex gap-1">
            ${video.authors[0].profile_name}
              <img
                class="w-5 h-5"
                src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png"
                alt="" />
            </p>
            <p class="text-sm text-gray-500">${video.others.views} views</p>
          </div>
        </div>
      </div>
    `;
    // append
    videoContainer.append(videoCard);
  });
};
