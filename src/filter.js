async function as_descending(a) {
  const countriessec = document.querySelector(".countries");
  const api = "https://restcountries.com/v3.1/all";
  console.log(a);
  if (a == 0) {
    const fetchapi = await fetch(api);
    const dataapi = await fetchapi.json();

    const sorteddataapi = Object.entries(dataapi);
    sorteddataapi[9][1].area = 377; //api error fix
    for (let i = 0; i < sorteddataapi.length; i++) {
      for (let j = 0; j < sorteddataapi.length - i - 1; j++) {
        if (
          sorteddataapi[j][1].population > sorteddataapi[j + 1][1].population
        ) {
          var sort = sorteddataapi[j];
          sorteddataapi[j] = sorteddataapi[j + 1];
          sorteddataapi[j + 1] = sort;
        }
      }
    }
    countriessec.innerHTML = "";
    for (let x = 0; x < sorteddataapi.length; x++) {
      console.log(sorteddataapi[x][0]);
      const countrycreate = document.createElement("div");
      countrycreate.classList.add("country");
      countrycreate.innerHTML = `
        <img src="${
          dataapi[sorteddataapi[x][0]].flags.png
        }" alt="" class="countryflag" />
        <div class="nameexp">
    <h2 class="countryname">${dataapi[sorteddataapi[x][0]].name.common}</h2>
    <i class="fa-solid fa-circle-info"></i>
     </div>
        <h3 class="officialname">${
          dataapi[sorteddataapi[x][0]].name.official
        }</h3>
        <p class="capital">capital: ${dataapi[sorteddataapi[x][0]].capital}</p>
        <p class="population">population: ${
          dataapi[sorteddataapi[x][0]].population
        }</p>
        <p class="area">area: ${dataapi[sorteddataapi[x][0]].area}</p>
        <p class="region">region: ${dataapi[sorteddataapi[x][0]].region}</p>
        <p class="id">${sorteddataapi[x][0]}</p>
        `;
      countriessec.appendChild(countrycreate);
    }
  } else if (a == 1) {
    const fetchapi = await fetch(api);
    const dataapi = await fetchapi.json();

    const sorteddataapi = Object.entries(dataapi);
    sorteddataapi[9][1].area = 377; //api error fix
    for (let i = 0; i < sorteddataapi.length; i++) {
      for (let j = 0; j < sorteddataapi.length - i - 1; j++) {
        if (
          sorteddataapi[j][1].population < sorteddataapi[j + 1][1].population
        ) {
          var sort = sorteddataapi[j];
          sorteddataapi[j] = sorteddataapi[j + 1];
          sorteddataapi[j + 1] = sort;
        }
      }
    }
    countriessec.innerHTML = "";
    for (let x = 0; x < sorteddataapi.length; x++) {
      console.log(sorteddataapi[x][0]);
      const countrycreate = document.createElement("div");
      countrycreate.classList.add("country");
      countrycreate.innerHTML = `
        <img src="${
          dataapi[sorteddataapi[x][0]].flags.png
        }" alt="" class="countryflag" />
        <div class="nameexp">
        <h2 class="countryname">${dataapi[sorteddataapi[x][0]].name.common}</h2>
        <i class="fa-solid fa-circle-info"></i>
         </div>
        <h3 class="officialname">${
          dataapi[sorteddataapi[x][0]].name.official
        }</h3>
        <p class="capital">capital: ${dataapi[sorteddataapi[x][0]].capital}</p>
        <p class="population">population: ${
          dataapi[sorteddataapi[x][0]].population
        }</p>
        <p class="area">area: ${dataapi[sorteddataapi[x][0]].area}</p>
        <p class="region">region: ${dataapi[sorteddataapi[x][0]].region}</p>
        <p class="id">${sorteddataapi[x][0]}</p>
        `;
      countriessec.appendChild(countrycreate);
    }
  }
}

async function area(a) {
  const countriessec = document.querySelector(".countries");
  const api = "https://restcountries.com/v3.1/all";
  if (a == 0) {
    const fetchapi = await fetch(api);
    const dataapi = await fetchapi.json();

    const sorteddataapi = Object.entries(dataapi);
    sorteddataapi[9][1].area = 377; //api error fix
    for (let i = 0; i < sorteddataapi.length; i++) {
      for (let j = 0; j < sorteddataapi.length - i - 1; j++) {
        if (sorteddataapi[j][1].area > sorteddataapi[j + 1][1].area) {
          var sort = sorteddataapi[j];
          sorteddataapi[j] = sorteddataapi[j + 1];
          sorteddataapi[j + 1] = sort;
        }
      }
    }

    countriessec.innerHTML = "";
    for (let x = 0; x < sorteddataapi.length; x++) {
      console.log(sorteddataapi[x][0]);
      const countrycreate = document.createElement("div");
      countrycreate.classList.add("country");
      countrycreate.innerHTML = `
    <img src="${
      dataapi[sorteddataapi[x][0]].flags.png
    }" alt="" class="countryflag" />
    <div class="nameexp">
    <h2 class="countryname">${dataapi[sorteddataapi[x][0]].name.common}</h2>
    <i class="fa-solid fa-circle-info"></i>
     </div>
   
    <h3 class="officialname">${dataapi[sorteddataapi[x][0]].name.official}</h3>
    <p class="capital">capital: ${dataapi[sorteddataapi[x][0]].capital}</p>
    <p class="population">population: ${
      dataapi[sorteddataapi[x][0]].population
    }</p>
    <p class="area">area: ${dataapi[sorteddataapi[x][0]].area}</p>
    <p class="region">region: ${dataapi[sorteddataapi[x][0]].region}</p>
    <p class="id">${sorteddataapi[x][0]}</p>
    `;
      countriessec.appendChild(countrycreate);
    }
  } else if (a == 1) {
    const fetchapi = await fetch(api);
    const dataapi = await fetchapi.json();

    const sorteddataapi = Object.entries(dataapi);
    sorteddataapi[9][1].area = 377; //api error fix

    for (let i = 0; i < sorteddataapi.length; i++) {
      for (let j = 0; j < sorteddataapi.length - i - 1; j++) {
        if (sorteddataapi[j][1].area < sorteddataapi[j + 1][1].area) {
          var sort = sorteddataapi[j];
          sorteddataapi[j] = sorteddataapi[j + 1];
          sorteddataapi[j + 1] = sort;
        }
      }
    }
    countriessec.innerHTML = "";
    for (let x = 0; x < sorteddataapi.length; x++) {
      console.log(sorteddataapi[x][0]);
      const countrycreate = document.createElement("div");
      countrycreate.classList.add("country");
      countrycreate.innerHTML = `
    <img src="${
      dataapi[sorteddataapi[x][0]].flags.png
    }" alt="" class="countryflag" />
    <div class="nameexp">
    <h2 class="countryname">${dataapi[sorteddataapi[x][0]].name.common}</h2>
    <i class="fa-solid fa-circle-info"></i>
     </div>

    <h3 class="officialname">${dataapi[sorteddataapi[x][0]].name.official}</h3>
    <p class="capital">capital: ${dataapi[sorteddataapi[x][0]].capital}</p>
    <p class="population">population: ${
      dataapi[sorteddataapi[x][0]].population
    }</p>
    <p class="area">area: ${dataapi[sorteddataapi[x][0]].area}</p>
    <p class="region">region: ${dataapi[sorteddataapi[x][0]].region}</p>
    <p class="id">${sorteddataapi[x][0]}</p>
    `;
      countriessec.appendChild(countrycreate);
    }
  }
}

async function regions(a) {
  const countriessec = document.querySelector(".countries");
  countriessec.innerHTML = "";
  const api = "https://restcountries.com/v3.1/all";
  const fetchapi = await fetch(api);
  const dataapi = await fetchapi.json();
  dataapi[9].area = 377; //api error fix
  var regiontext = a.textContent;
  console.log(regiontext);
  for (let index = 0; index < dataapi.length; index++) {
    if (regiontext == "All") {
      const countrycreate = document.createElement("div");
      countrycreate.classList.add("country");
      countrycreate.innerHTML = `
        <img src="${dataapi[index].flags.png}" alt="" class="countryflag" />
        <div class="nameexp">
      <h2 class="countryname">${dataapi[index].name.common}</h2>
      <i class="fa-solid fa-circle-info"></i>
       </div>
        <h3 class="officialname">${dataapi[index].name.official}</h3>
        <p class="capital">capital: ${dataapi[index].capital}</p>
        <p class="population">population: ${dataapi[index].population}</p>
        <p class="area">area: ${dataapi[index].area}</p>
        <p class="region">region: ${dataapi[index].region}</p>
        <p class="id">${index}</p>
        `;
      countriessec.appendChild(countrycreate);
    }
    if (dataapi[index].region == regiontext) {
      const countrycreate = document.createElement("div");
      countrycreate.classList.add("country");
      countrycreate.innerHTML = `
            <img src="${dataapi[index].flags.png}" alt="" class="countryflag" />
            <div class="nameexp">
          <h2 class="countryname">${dataapi[index].name.common}</h2>
          <i class="fa-solid fa-circle-info"></i>
           </div>
            <h3 class="officialname">${dataapi[index].name.official}</h3>
            <p class="capital">capital: ${dataapi[index].capital}</p>
            <p class="population">population: ${dataapi[index].population}</p>
            <p class="area">area: ${dataapi[index].area}</p>
            <p class="region">region: ${dataapi[index].region}</p>
            <p class="id">${index}</p>
            `;
      countriessec.appendChild(countrycreate);
    }
  }
}

export { as_descending };
export { area };
export { regions };
