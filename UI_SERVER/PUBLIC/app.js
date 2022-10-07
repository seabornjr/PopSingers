

var result;
var resultsDiv = document.getElementById("results")

function getSingers() {
    fetch('https://popsingers-list-ui.onrender.com')
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

    fetch('https://popsingers-list-ui.onrender.com', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newSinger)
    })
        .then(getSingers)
})

