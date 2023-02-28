const button = document.querySelectorAll('.button');
const search = document.querySelector('.search');
function buttondesign(a) {
    button.forEach(function(b) {
        b.style.transform = 'scale(1)'
        
      });
    a.style.transform = 'scale(0.9)';
}
async function searchs() {
    const api = "https://restcountries.com/v3.1/all";
    const fetchapi = await fetch(api);
    const dataapi = await fetchapi.json();
    var sayi = Math.floor(Math.random() * 250);
    search.placeholder = dataapi[sayi].name.common;
}
export { searchs };
export { buttondesign };