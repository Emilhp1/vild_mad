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

fetch(url + "/rest/v1/seasons", {
  method: "GET",
  headers: {
    apikey: key, // Use lowercase "apikey" here
  },
})
  .then((res) => res.json())
  .then((data) => {
    // Call the showData function with the data
    showData(data);
  });

function showData(data) {
  console.log(data);
  const gridKat = document.querySelector(".grid_kat");

  data.forEach((item) => {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector("div").textContent = item.navn;
    copy.querySelector("a").setAttribute("href", `måned.html?season=${item.id}&navn=${item.navn}`); // Update the URL as needed
    gridKat.appendChild(copy);
  });
}
