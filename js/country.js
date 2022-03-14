const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displaycountry(data))
}
const displaycountry = (countries) => {
    console.log(countries)
    const allcountryHtml = countries.map(country => singlecountry(country))
    // console.log(allcountryHtml[0])
    const containerCountry = document.getElementById('countryies')
    containerCountry.innerHTML = allcountryHtml.join(' ')
}

const singlecountry = ({ name, flags, population, region }) => {

    //option:02
    return `
    <div class="country">
        <h2>${name.common}</h2>
        <h4>Region:${region}</h4>
        <h3>Population:${population}</h3>
        
        <img src="${flags.png}">
        </div>
    `



    // const { name, flags, population } = country

    // Option - 01
    // return `
    // <div class="country">
    //     <h2>${name.common}</h2>
    //     <h3>${'Population:' + population}</h3>
    //     <img src="${flags.png}">
    // </div>
    // `


    // Original-Work
    // return `
    //     <div class="country">
    //         <h2>${country.name.common}</h2>
    //         <h3>${'Population:' + country.population}</h3>
    //         <img src="${country.flags.png}">
    //     </div>
    // `
}
loadCountry()