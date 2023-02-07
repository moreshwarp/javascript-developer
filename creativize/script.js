const form = document.getElementById("imageUploadForm");
const fileInput = document.getElementById("imageFile");
const imagePreview = document.getElementById("imagePreview");

console.log(form);
console.log(document.getElementById("test"));

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // your submit logic here
  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = new Image();
      img.src = e.target.result;
      imagePreview.innerHTML = "";
      imagePreview.appendChild(img);
    };

    reader.readAsDataURL(fileInput.files[0]);
  }
});
