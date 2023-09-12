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

// Create a mapping between numeric month values and month names
const monthNameMapping = {
  1: "Forår",
  2: "Sommer",
  3: "Efterår",
  4: "Vinter",
};

fetch(url + "/rest/v1/vildmad3", {
  method: "GET",
  headers: {
    apikey: key, // Use lowercase "apikey" here
  },
})
  .then((res) => res.json())
  .then((data) => {
    // Call the showMonths function with the data
    showMonths(data);
  });

function showMonths(monthsData) {
  const gridKat = document.querySelector(".grid_kat");

  // Create an array to keep track of displayed months
  const displayedMonths = [];

  monthsData.forEach((monthItem) => {
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);

    // Assuming your Supabase data has a "month" field with numeric values
    const numericMonth = monthItem.month; // Replace "month" with the actual field name

    // Get the corresponding month name from the mapping
    const monthName = monthNameMapping[numericMonth];

    // Check if this month has already been displayed
    if (!displayedMonths.includes(monthName)) {
      copy.querySelector("a").textContent = monthName;
      copy.querySelector("a").setAttribute("href", `måned.html?season=${monthName}`); // Update the URL as needed

      gridKat.appendChild(copy);
      displayedMonths.push(monthName); // Mark this month as displayed
    }
  });
}
