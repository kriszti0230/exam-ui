function main() {
  const section = document.getElementById("section");

  const beerComponent = (title, sub, text, index) => {
    return `
            <div>
                <p class="title">${title}</p>
                <p class="subtitle">${sub}</p>
                <p>${text}</p>

                <span class="circle">${index}</span>

                <button> 
                    <span class="details">details</span>
                    <span class="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>
        `;
  };
  let beersSection = "";
  for (let i = 0; i < beers.cards.length; i++) {
    let currentBeer = beers.cards[i];
    beersSection += beerComponent(
      currentBeer.title,
      currentBeer.sub,
      currentBeer.text,
      i + 1
    );
  }
  section.insertAdjacentHTML("beforeend", beersSection);
}

window.addEventListener("load", main);
