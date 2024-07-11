const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: "auto",
      spaceBetween: 25,
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
/*TOGGLE SULLA LENTE COMPARSA INPUT E SCOMPARSA DEL MENU SOLO IN MD*/
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
