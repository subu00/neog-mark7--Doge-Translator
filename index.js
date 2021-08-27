let inputTextArea = document.querySelector('#textarea-input');
let button = document.querySelector('#btn');
let outputTextArea = document.querySelector('#textarea-output')

let url="https://api.funtranslations.com/translate/doge.json"

function createUrl (text){
    return encodeURI(url + "?" + "text=" +text)
}

function errorHandler(error) {
    alert('Looks like server is down. Please try again sfter sometime')
}

let translate = () => {
    fetch(createUrl(inputTextArea.value))
    .then(response => response.json())
    .then(json =>{
       outputTextArea.innerText = json.contents.translated
    })
    .catch(errorHandler())
}

button.addEventListener('click',translate)