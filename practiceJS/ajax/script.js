/*
document.getElementById('get-data').addEventListener('click', loadData);

function loadData() {
    // create XHR object  (Xml Http Request)
    let xhr = new XMLHttpRequest();

    // open
    xhr.open('GET', 'data.txt', true);

    xhr.onload = function () {
        // HTTP statused
        // 200: "ok"
        // 403: "Forbidden"
        // 404: "Not Found"
        if (this.status === 200) {
            document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4>`;
        }
    }
    xhr.send();
}
*/




// API
// http://www.icndb.com/api
document.getElementById('get-data').addEventListener('click', loadjokes);
let number = document.getElementById('numberJokes').value;

function loadjokes(e) {
    let number = document.getElementById('numberJokes').value;
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onprogress = function () {
        document.getElementById('output').innerHTML = `<h3>loading.....</h3>`;
    }

    xhr.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            let joke = data.value;
            let result = '<ol>';
            
            joke.forEach( (item) => {
                result += `<li>${item.joke}</li>`;
            });
            
            result += '</ol>';
            document.getElementById('output').innerHTML = result;
        }
    }

    xhr.send();
}