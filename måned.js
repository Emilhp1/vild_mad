const urlParams = new URLSearchParams(window.location.search);
const url = "https://ebwnpfllzucpiixhtnhu.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVid25wZmxsenVjcGlpeGh0bmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MTIzMDEsImV4cCI6MjAwOTQ4ODMwMX0.CyZqh6CsJ8T2r-1KUO0oillkNqf7941nqLFY3jCnbSA";

const monthNameMapping = {
  1: "Forår",
  2: "Sommer",
  3: "Efterår",
  4: "Vinter",
};

const season = urlParams.get("season");
console.log(season);

const id = urlParams.get("id");
fetch("https://ebwnpfllzucpiixhtnhu.supabase.co/rest/v1/vildmad3?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVid25wZmxsenVjcGlpeGh0bmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MTIzMDEsImV4cCI6MjAwOTQ4ODMwMX0.CyZqh6CsJ8T2r-1KUO0oillkNqf7941nqLFY3jCnbSA&" + season)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  //console.log(product);
  const template = document.querySelector("#smallproducttemplate").content;

  const copy = template.cloneNode(true);
  copy.querySelector("h3").textContent = product.title;
  copy.querySelector("p.season").textContent = product.month;

  copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);

  document.querySelector(".produktgrid").appendChild(copy);
}
