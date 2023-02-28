

const countriessec = document.querySelector('.countries')
const search = document.querySelector(".search");
async function apidatagenerator() {
    try {
        var country = search.value;
        if (country == '') {
          var api = "https://restcountries.com/v3.1/all";
        }
        else{
          var api = `https://restcountries.com/v3.1/name/${country}`;
        }
       
        const fetchapi = await fetch(api);
        const dataapi = await fetchapi.json();
    
   
      countriessec.innerHTML = '';
      for (let i = 0; i < dataapi.length; i++) {
       
          const countrycreate = document.createElement("div");
          countrycreate.classList.add("country");
          countrycreate.innerHTML = `
          <img src="${dataapi[i].flags.png}" alt="" class="countryflag" />
          <div class="nameexp">
          <h2 class="countryname">${dataapi[i].name.common}</h2>
          <i class="fa-solid fa-circle-info"></i>
           </div>
         
          <h3 class="officialname">${dataapi[i].name.official}</h3>
          <p class="capital">capital: ${dataapi[i].capital}</p>
          <p class="population">population: ${dataapi[i].population}</p>
          <p class="area">area: ${dataapi[i].area}</p>
          <p class="region">region: ${dataapi[i].region}</p>
          <p class="id">${i}</p>
          `
          countriessec.appendChild(countrycreate);


        
      }
      return dataapi;
    } catch (error) {
      console.log("lütfen geçerli bir ülke giriniz");
    }
  }
  export {apidatagenerator};