function generatePoem(event) {
    event.preventDefault();
    
    new Typewriter('#poem', {
        strings: 'POEM',
        autoStart: true,
        cursor:"",
        });
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generatePoem);