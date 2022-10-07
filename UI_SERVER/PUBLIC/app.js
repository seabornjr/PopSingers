
//var ENV = 'dev';
var ENV = 'production';
var result;
var resultsDiv = document.getElementById("results")
let APIURL = ENV === 'dev' ? "http://localhost:3002" : 'https://singer-backend-server.onrender.com/'



function getSingers() {
    fetch(`${APIURL}/singers`)
        .then(res => res.json())
        .then(data => {
            data.map(singers => {
                var singerDiv = document.createElement('div')
                singerDiv.textContent = singers.singer_name
                resultsDiv.append(singerDiv)
            })
        })
}


var button = document.getElementById('btn_submit');
button.addEventListener('click', getSingers);
var submit = document.getElementById('add');


submit.addEventListener('click', () => {
    resultsDiv.innerHTML = '';
    var input = document.getElementById('search')
    let newSinger = { "singer_name": input.value }
    console.log(newSinger);

    fetch(`${APIURL}/singers`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newSinger)
    })
        .then(getSingers)
})

