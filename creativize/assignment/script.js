dayNightTheme = () => {
  let date = new Date();
  let hour = date.getHours();

  if (hour >= 7 && hour < 19) {
    document.body.style.backgroundColor = "#f7f2f2";
    document.body.style.color = "#aa9e9e";
  } else {
    document.body.style.backgroundColor = "#777";
    document.body.style.color = "#f7f7f7";
  }
};
// Setting light and drak theme based on system timing

window.addEventListener("load", dayNightTheme);

// Event listner for Keydowna and when the user is going to press enter
document.querySelector("#input").addEventListener("keydown", (event) => {
  if (event.key == "Enter") apiRequest();
});

document.querySelector("#search").addEventListener("click", () => {
  apiRequest();
});

// API call for an Unsplash
apiRequest = () => {
  document.querySelector("#grid").textContent = "";

  const url =
    "https://api.unsplash.com/search/photos?query=" +
    input.value +
    "&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo";

  fetch(url)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })

    .then((data) => {
      loadImages(data);
    })

    .catch((error) => console.log(error));
};

loadImages = (data) => {
  for (let i = 0; i < data.results.length; i++) {
    let image = document.createElement("div");
    image.className = "img";
    image.style.backgroundImage =
      "url(" + data.results[i].urls.raw + "&w=1366&h=768" + ")";
    image.addEventListener("dblclick", function () {
      window.open(data.results[i].links.download, "_blank");
    });
    document.querySelector("#grid").appendChild(image);
  }
};
