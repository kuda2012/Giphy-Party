const input = document.getElementById("inputSearch");
const form = document.querySelector("#searchForm");
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (input.value === "") return;
  searchGiphy(input.value);
  input.value = "";
});

async function searchGiphy(gif) {
  try {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=83mf4xgLYea2dbG699P73yj9wccp7LVP&tag=${gif}&rating=G`;
    const res = await axios.get(url);
    console.log(res);
    const img = document.createElement("img");
    img.setAttribute("class", "gifImg");
    img.src = res.data.data.images.fixed_height.url;
    img.sty;
    const imgContainer = document.getElementById("imgContainer");
    imgContainer.append(img);
    removeImgs();
  } catch (e) {
    console.log(e);
    alert("Gif not found :/");
  }
}

function removeImgs() {
  const removeButton = document.querySelector("#removeImgs");
  removeButton.addEventListener("click", function () {
    const allImgs = Array.from(document.querySelectorAll(".gifImg"));
    for (let img of allImgs) {
      img.remove();
    }
  });
}
