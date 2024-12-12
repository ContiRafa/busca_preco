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
  const query = searchBar.value.trim(); // Obtém o valor do campo de busca e remove espaços extras

  if (query === "") {
    alert("Por favor, insira um termo de pesquisa."); // Valida se o campo está vazio
    return;
  }
  
  // Lista de valores aceitos
  const validTerms = ["Pichau", "Kabum", "Terabyte", "Placa Mãe ASUS Prime"];

/* Validação para pesquisa */
if (!validTerms.some(term => term.toLowerCase() === query.toLowerCase())) {
  console.log("não"); // Não encontrou o termo na lista
  event.preventDefault(); 
  alert("Dados não encontrados");
  return;
} else {
  console.log("sim"); // O termo está na lista
}

  
  // Mostra o indicador de carregamento
  loadingIndicator.style.display = "block";

  // Simula uma pesquisa com um atraso de 2 segundos
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

  const resultsContainer = document.getElementById("results-container");
  if (!resultsContainer) {
    console.error("Elemento 'results-container' não encontrado!");
    return;
  }

  results.forEach((result) => {
    
    // Cria um elemento HTML padrão para o cartão
    const resultCard = document.createElement("div");

    // Adiciona a classe CSS ao cartão
    resultCard.className = "results-container";

    // Define o conteúdo do cartão usando os dados do resultado
    resultCard.innerHTML = `
        <h3>${result.site}</h3>
        <p><strong>Produto:</strong> ${result.product}</p>
        <p><strong>Avaliação:</strong> ${result.rating} ⭐</p>
        <p><strong>Preço:</strong> ${result.price}</p>
    `;

    // Adiciona o cartão criado ao contêiner de resultados
    resultsContainer.appendChild(resultCard);
  });
}, 2000);

/* ----------------------- */
/* Variáveis */
document.addEventListener("DOMContentLoaded", function () {
  const button01 = document.getElementById("check01"); // Botão para abrir o slide
  const slide1 = document.querySelector(".slide"); // Div do slide
  const toggle01 = document.querySelector(".toggle"); // Elemento .toggle
  const closeButton = document.getElementById("control-Close"); // Botão verde para fechar o slide

  let isSlideOpen = false; // Controle do estado do slide

  // Verifica se os elementos existem antes de adicionar eventos
  if (!button01 || !slide1 || !toggle01) {
    console.error("Algum elemento necessário não foi encontrado!");
    return;
  }

  // Evento para abrir o slide
  button01.addEventListener("click", function () {
    if (!isSlideOpen) {
      slide1.style.transform = "translateX(0)"; // Mostra o slide
      toggle01.style.display = "none"; // Esconde o .toggle
      button01.style.display = "none"; // Esconde o botão
      isSlideOpen = true; // Atualiza o estado do slide
      console.log("Slide aberto!");
    }
  });

  // Função para fechar o slide
  function fecharDiv() {
    if (isSlideOpen) {
      slide1.style.transform = "translateX(-112%)"; // Fecha o slide
      console.log("Slide fechado!");

      // Volta a exibir a .toggle e o botão inicial
      toggle01.style.position = "absolute";
      toggle01.style.zIndex = "1";
      toggle01.style.top = "20px";
      toggle01.style.left = "20px";
      toggle01.style.display = "block"; // Mostra a .toggle novamente
      button01.style.display = "block"; // Mostra o botão novamente
      isSlideOpen = false; // Atualiza o estado do slide
    } else {
      console.warn("O slide já está fechado.");
    }
  }

  // Evento para o botão verde (fechar slide)
  if (closeButton) {
    closeButton.addEventListener("click", fecharDiv);
  } else {
    console.error("Botão de fechar não encontrado!");
  }
})});