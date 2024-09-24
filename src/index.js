
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);
function renderCards(){
    var target = document.getElementById("cards")
    target.innerHTML = ''
    data.forEach((element) => {
        target.innerHTML += `
        <li class="card">
            <h2 class="card--title">${element.name}</h2>
            <img
                width="256"
                class="card--img"
                src="${element.sprites.other["official-artwork"].front_default}"
            />
            <ul class="card--text">
                ${getStats(element.stats)}
            </ul> 
            <ul class="card--text">
                <p>Game appearances</p>
                ${getGames(element.game_indices)}
            </ul>
        </li>`
    })
    console.log(target.innerHTML)
}
function getStats(array){
    let returnString = ''
    array.forEach((stat) => {
        returnString += `<li>${stat.stat.name}: ${stat.base_stat}</li>`
    })
    return returnString
}
function getGames(array){
    let returnString = ''
    array.forEach((stat) => {
        returnString += `<li>${stat.version.name}: Pokedex Nr ${stat.game_index}</li>`
    })
    return returnString
}

renderCards()