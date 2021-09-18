let inputTextArea = document.querySelector('#textarea-input');
let button = document.querySelector('#btn');
let outputTextArea = document.querySelector('#textarea-output')

let url="https://api.funtranslations.com/translate/doge.json"

function translateUrl(input) {
    return url + `?text=` +input;
}

function handleError(error) {
    console.log("Error has occured", error)
    alert("Please try agian. It seems the server is down 😭😭😭")
}

function handleTranslateClick() {
    let input  = inputTextArea.value;

    fetch(translateUrl(input))
        .then(response => response.json())
        .then(json => {
            let translatedOutput = json.contents.translated;
            outputTextArea.innerText = translatedOutput;
        }).catch(handleError)

}
 button.addEventListener('click',handleTranslateClick)
