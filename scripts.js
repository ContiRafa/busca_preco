// Seleciona elementos importantes
const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("search-btn");
const loadingIndicator = document.getElementById("loading");
const resultsContainer = document.getElementById("results-container");
const themeToggle = document.getElementById("theme-toggle");

// Variável para controlar o estado do tema
// Variável para armazenar o estado inicial do tema
let darkMode = true;

// Função para atualizar o tema
function atualizarTema() {
  if (darkMode) {
    document.body.style.background =
      "linear-gradient(to bottom, #1f1f1f, #282828)";
    document.body.style.color = "#f5f5f5";
    themeToggle.textContent = "🌙"; // Modo escuro

    // Atualiza o texto para "Modo Escuro"
    const h5Element = document.querySelector("h5");
    if (h5Element) {
      h5Element.textContent = "Modo Escuro";
    }
  } else {
    document.body.style.background =
      "linear-gradient(to bottom, #f5f5f5, #e0e0e0)";
    document.body.style.color = "#f5f5f5";
    themeToggle.textContent = "☀️"; // Modo claro

    // Atualiza o texto para "Modo Claro"
    const h5Element = document.querySelector("h5");
    if (h5Element) {
      h5Element.textContent = "Modo Claro";
    }
  }

  // Atualiza outros elementos com base no tema
  document.querySelectorAll(".card").forEach((card) => {
    card.style.background = darkMode ? "#444" : "#fff";
    card.style.color = darkMode ? "#f5f5f5" : "#1f1f1f";
  });

  document.querySelectorAll(".highlights").forEach((card) => {
    card.style.background = darkMode ? "#444" : "#fff";
    card.style.color = darkMode ? "#f5f5f5" : "#fff";
  });

  document.querySelectorAll("header").forEach((card) => {
    card.style.background = darkMode ? "#444" : "#fff";
    card.style.color = darkMode ? "#f5f5f5" : "#fff";
  });

  /* COR DO FOOTER */
  document.querySelector("footer").style.background = darkMode
    ? "#222"
    : "#ddd";
  document.querySelector("footer").style.color = darkMode ? "#bbb" : "#333";

  /*COR DO TEMA */
  document.querySelector(".mode").style.color = darkMode ? "#222" : "#ddd";
  document.querySelector(".mode").style.color = darkMode ? "#fff" : "#222";

  /*COR "PRODUTOS DESEJADOS" */
  document.querySelector(".prod-title").style.color = darkMode
    ? "#222"
    : "#ddd";
  document.querySelector(".prod-title").style.color = darkMode
    ? "#fff"
    : "#222";
}

// Define o tema inicial ao carregar a página

window.addEventListener("load", () => {
  atualizarTema();
});

// Função para alternar entre temas ao clicar no botão
themeToggle.addEventListener("click", () => {
  darkMode = !darkMode;
  atualizarTema();
});

//Função para carregar o nome do tema quando entra

// Função de pesquisa
searchBtn.addEventListener("click", () => {
  const query = searchBar.value.trim();
  if (query === "") {
    alert("Por favor, insira um termo de pesquisa.");
    return;
  }

  // Mostra o indicador de carregamento
  loadingIndicator.style.display = "block";
  resultsContainer.innerHTML = "";

  // Simula uma pesquisa com um atraso de 2 segundos
  setTimeout(() => {
    loadingIndicator.style.display = "none";

    // Simula resultados da pesquisa
    const results = [
      {
        site: "Pichau",
        rating: 4.9,
        product: "Placa Mãe ASUS Prime",
        price: "R$ 450,00",
      },
      {
        site: "Kabum",
        rating: 4.4,
        product: "Placa Mãe ASUS Prime",
        price: "R$ 490,00",
      },
      {
        site: "Terabyte",
        rating: 4.7,
        product: "Placa Mãe ASUS Prime",
        price: "R$ 470,00",
      },
    ];

    // Mostra os resultados na tela
    results.forEach((result) => {
      const resultCard = document.createElement("div");
      resultCard.className = "card";
      resultCard.innerHTML = `
                <h3>${result.site}</h3>
                <p><strong>Produto:</strong> ${result.product}</p>
                <p><strong>Avaliação:</strong> ${result.rating} ⭐</p>
                <p><strong>Preço:</strong> ${result.price}</p>
            `;
      resultsContainer.appendChild(resultCard);
    });
  }, 2000);
});

/*-----------------------*/
/*variaveis */

const checkBox1 = document.getElementById("check01");
const slide1 = document.querySelector(".slide");
const toggle01 = document.querySelector(".toggle");

// Controle para o primeiro checkbox
// Evento para o primeiro checkbox
checkBox1.addEventListener("change", function () {
  if (this.checked) {
    slide1.style.transform = "translateX(0)";
  } else {
    slide1.style.transform = "translateX(-112%)";
  }
});

checkBox1.addEventListener("change", function () {
  if (this.checked) {
    toggle01.style.display = "none"; // Esconde o slide
    checkBox1.style.display = "none"; // esconde o input
  } else {
    toggle01.style.display = "block"; // Esconde o slide
  }
});

slide1.addEventListener('click', function(event) {
  event.preventDefault(); // Bloqueia o comportamento padrão
});

document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.getElementById('control-Close');
  const closeDiv = document.getElementById('slide001');
  const toggleDiv = document.querySelector('.toggle'); // Seleciona a div .toggle

  function fecharDiv() {
      if (closeDiv) {
          // Fecha a div
          closeDiv.style.transform = "translateX(-112%)";
          console.log("Div fechada!");

          // Condição para fixar a posição da .toggle
          if (closeDiv = true) {
              toggleDiv.style.position = "absolute"; // Define posição original
              toggleDiv.style.top = "20px"; // Ajusta a posição no topo (exemplo)
              toggleDiv.style.left = "20px"; // Ajusta a posição na lateral (exemplo)
              console.log("Toggle fixada na posição original!");
          } else {
              console.error("Elemento .toggle não encontrado!");
          }
      } else {
          console.error("Elemento closeDiv não encontrado!");
      }
  }

  if (closeButton) {
      closeButton.addEventListener('click', fecharDiv);
  } else {
      console.error("Botão de fechar não encontrado!");
  }
});

