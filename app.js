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
