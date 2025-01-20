function displayPoem(response) {
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        cursor:"",
        });
}

function generatePoem(event) {
    event.preventDefault();

    let userInput=document.querySelector("#user-input");
    let prompt=`Please generate a short and simple poem about ${userInput.value}`;
    let context=`You are very knowledgable about poem metrics. Please provide a beautiful and short poem about ${userInput.value}. Please Write the 5-lines poem in <p></p>, without any introduction and separate each verse by making use of a <br />. Do not forget to sign the poem inside a <strong></strong> element.`;
    let apiKey="bb44bab20a1to1942fe0345a55b0085e";
    let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `Generating your poem about <em>${userInput.value}</em> <div class="hourglass">⏳</div>`;


    console.log("Generating your poem...")

    axios.get(apiUrl).then(displayPoem);
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generatePoem);