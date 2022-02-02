const file = "actors.json";

fetch(file)
  .then((response) => response.json())
  .then((data) => data.forEach(showAllData));

function showAllData(item) {
  console.log(item);
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector(".name").textContent = item.fullname;
  clone.querySelector(".movie").textContent = item.movie;
  document.querySelector("section").appendChild(clone);
}

