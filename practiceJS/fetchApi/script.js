// Fetch API
// Fetch API uses JavaScript Promise

document.getElementById('get-data').addEventListener('click', getData);

function getData() {
    fetch('http://api.icndb.com/jokes/random/3')
    .then( res => res.json())
    .then( data => { console.log(data) })
    .catch( err => { console.log(err) });
}
