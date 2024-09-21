
let url = "https://pokeapi.co/api/v2/pokemon"

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    crearCard(data.results)
  });

let container = document.getElementById("container")

function crearCard(data) {

  let cardsHTML = ""

  for (let i = 0; i < data.length; i++) {
    cardsHTML += `
    <div class="card">
      <p class="nombre_card"> ${data[i].name}</p>
      <p class="url_card">${data[i].url}</p>
    </div>
    `
  }
  container.innerHTML = cardsHTML
}


