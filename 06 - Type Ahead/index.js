// our data in json
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
// empty array to store our data
const cities = [];

// fetch our data to store in the cities variable
fetch(endpoint)
    .then(resp => resp.json())
    .then(data => cities.push(...data))

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // here we need to figure out if the city or state matches what was searched
        // regex = regular expression - patterns used to match character combinations in strings 
        // calling the constructor function of the RegExp object
        // parameters: regExp(pattern, flags) - pattern: the text, flags: specifics (g, i, m, u, y)
        const regex = new RegExp(wordToMatch, 'gi'); //g = perform a global match (find all matches rather than stopping after the first match), i = will match lowercase/uppercase (case-insensitive matching)
        return place.city.match(regex) || place.state.match(regex);
    })
}

// create our display function
// called when someone changes the value for wordToMatch
function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
            `
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}