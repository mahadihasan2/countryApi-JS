const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displaycountry(data))
}
const displaycountry = (countries) => {
    console.log(countries)
    const allcountryHtml = countries.map(country => singlecountry(country))
    // console.log(allcountryHtml[0])
    const containerCountry = document.getElementById('country')
    containerCountry.innerHTML = allcountryHtml.join(' ')
}

const singlecountry = (country) => {

    return `
        <div>
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}"
        </div>
    `
}
loadCountry()