const clearButton = document.getElementById('clear-button');
const noteArea = document.getElementById('textarea');
const translateButton = document.getElementById('translate-button');

function clearNotes() {
    noteArea.value = '';
}

clearButton.addEventListener('click', clearNotes);

// Translate API

function getWord () {
    const input = document.getElementById('text');
    const textValue = document.getElementById('text').value;

    let endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20181225T190701Z.cbfad8e15b6aba1d.eb8f6b20ca7c3468edab6753caca3a5b3f6167b2&lang=es&text=${textValue}`;

    fetch(endpoint)
        .then(blob => blob.json())
        .then(data => {
            if(textValue === '') {
                document.getElementById('results').innerHTML = `<div class="notification active is-danger"><p class="title">Please enter a word to translate.</div>`;
                return;
            }

            document.getElementById('results').innerHTML = `<div class="notification active is-success"><p class="subtitle"><span>${textValue}</span> translated to Spanish is...</p><p class="title">${data.text}</p></div>`;
        })
        .catch((err) => console.log(err));
    
    input.value = '';
}

translateButton.addEventListener('click', getWord);