
const countriessec = document.querySelector('.countries')
const search = document.querySelector(".search");


async function apidatagenerator(api) {
    try {
        var country = search.value;
        var api = `https://restcountries.com/v3.1/name/${country}`;
        const fetchapi = await fetch(api);
        const dataapi = await fetchapi.json();
      console.log(dataapi);
   
      countriessec.innerHTML = '';
      for (let i = 0; i < dataapi.length; i++) {
       
          const countrycreate = document.createElement("div");
          countrycreate.classList.add("country");
          countrycreate.innerHTML = `
          <img src="${dataapi[i].flags.png}" alt="" class="countryflag" />
          <h2 class="countryname">${dataapi[i].name.common}</h2>
          <h3 class="officialname">${dataapi[i].name.official}</h3>
          <p class="capital">capital: ${dataapi[i].capital}</p>
          <p class="population">population: ${dataapi[i].population}</p>
          <p class="region">region: ${dataapi[i].region}</p>
          `
          countriessec.appendChild(countrycreate);
      }
      
    } catch (error) {
      console.log("lütfen geçerli bir ülke giriniz");
    }
  }