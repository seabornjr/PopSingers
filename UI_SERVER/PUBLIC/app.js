

var result;
var resultsDiv = document.getElementById("results")

function getSingers() {
    fetch('http://localhost:3002/singers')
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

    fetch('http://localhost:3002/singers', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newSinger)
    })
        .then(getSingers)
})

