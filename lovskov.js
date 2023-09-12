/* const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then((data) => showCategories(data));

function showCategories(categories) {
  categories.forEach(showCategory);
}

function showCategory(category) {
  console.log(category);
  //console.log(product);
  const template = document.querySelector("template").content;

  const copy = template.cloneNode(true);
  copy.querySelector("a").textContent = category.category;
  copy.querySelector("a").setAttribute("href", `produktliste.html?liv=${category.category}`);

  document.querySelector(".grid_kat").appendChild(copy);
}
 */

const url = "https://ebwnpfllzucpiixhtnhu.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVid25wZmxsenVjcGlpeGh0bmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MTIzMDEsImV4cCI6MjAwOTQ4ODMwMX0.CyZqh6CsJ8T2r-1KUO0oillkNqf7941nqLFY3jCnbSA";

fetch(url + "/rest/v1/vildmad3", {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(month) {
  console.log(month);

  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("a").textContent = month.month;
  copy.querySelector("a").setAttribute("href", `måned.html?liv=${month.month}`);

  document.querySelector(".grid_kat").appendChild(copy);
}

hej;
