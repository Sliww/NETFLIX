/*codice per l'animazione iniziale*/
/*Ascolta il caricamento della pagina e dopo 3 sEcondi fa partire i comandi di aggiunta e rimozione DEL D-NONE*/

const overlayGeneral = document.getElementById("overlayGeneral");
const contentGeneral = document.getElementById("contentGeneral");

document.addEventListener("DOMContentLoaded", ()=> {
  
  setTimeout(function() {
      
      overlayGeneral.classList.add("d-none");
      
      contentGeneral.classList.remove("d-none");
  }, 3000);
});


/* SWIPER */

const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: "auto",
      spaceBetween: 17,
})

/*SCELTA DEL GENERE DI FILM*/

const genres = document.getElementById("genres");
const rows = document.querySelectorAll("main .row");


genres.addEventListener("change", ()=>{
  rows.forEach(row=>{
    const className = row.getAttribute("class")
    const word = genres.value;

    if (word === "all") {
      row.classList.remove("d-none");
    } else if (!className.includes(word) && !className.includes("d-none")){
      row.classList.add("d-none");
    } else if (className.includes(word) && className.includes("d-none")) {
      row.classList.remove("d-none");
    }
  })
})

/*DA MD IN SU*/
/*TOGGLE SULLA LENTE, COMPARSA INPUT E SCOMPARSA DEL MENU SOLO IN MD*/

const inputContainer = document.getElementById("inputContainer");
const anchorInput = document.querySelector("#inputContainer a");
const menuScomparsaAlToggle = document.getElementById("menuScomparsaAlToggle");

let inputCreated = false;

const toggleInput = () => {
  if (inputCreated) {
    const existingInput = inputContainer.querySelector("input[type='text']");
    if (existingInput) {
      inputContainer.removeChild(existingInput);
      menuScomparsaAlToggle.classList.remove("d-md-none");
      menuScomparsaAlToggle.classList.add("d-md-flex");
    }
    inputCreated = false;
  } else {
    const divInput = document.createElement("input");
    divInput.setAttribute("type", "text");
    inputContainer.insertBefore(divInput, anchorInput);
    menuScomparsaAlToggle.classList.remove("d-md-flex");
    menuScomparsaAlToggle.classList.add("d-md-none");
    inputCreated = true;
  }
}

anchorInput.addEventListener("click", toggleInput);

/*LENTE DA MOBILE*/

const inputContainerMobile = document.getElementById("inputContainerMobile");
const anchorInputMobile = document.querySelector("#inputContainerMobile a");

const toggleInputMobile = () => {
  if (inputCreated) {
    const existingInput = inputContainerMobile.querySelector("input[type='text']");
    if (existingInput) {
      inputContainerMobile.removeChild(existingInput);
    }
    inputCreated = false;
  } else {
    const divInput = document.createElement("input");
    divInput.setAttribute("type", "text");
    inputContainerMobile.insertBefore(divInput, anchorInputMobile);
    inputCreated = true;
  }
}

anchorInputMobile.addEventListener("click", toggleInputMobile);

/*Comparsa e scomparsa delle ROW allo scroll*/

const visibleOnScroll = document.querySelectorAll(".visibleOnScroll");

const options = {
  rootMargin: "0px",
  threshold: 0.05,
}

const callBack = (entries, observer)=>{
  entries.forEach(entry =>{
    if (entry.isIntersecting){
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  })
}

const observer = new IntersectionObserver(callBack, options);

visibleOnScroll.forEach(element =>{
  observer.observe(element);
})



