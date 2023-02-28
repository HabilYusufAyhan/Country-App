
import { apidatagenerator } from "./search.js";
import { as_descending } from "./filter.js";
import { area } from "./filter.js";
import { regions } from "./filter.js";
import { explanation } from "./explanation.js";
import { buttondesign } from "./design.js";
import { searchs } from "./design.js";
import './css/style.css';
const search = document.querySelector(".search");
const ascending = document.querySelector('#ascending');
const descending = document.querySelector('#descending');
const areadown = document.querySelector('#areadown')
const areaup = document.querySelector('#areaup')
const pop = document.querySelector('.pop')
const radio = document.querySelectorAll('.pop form div div');
const coun = document.querySelector('.countries');
const body = document.querySelector('body');
setInterval(searchs , 3000);
apidatagenerator();

body.onclick = function(){
  if (search.style.background == 'white') {
    search.style.background = 'rgb(255, 255, 255,0.5)'
  }

}
search.onclick = function(){
  search.style.background = 'white'
}


search.onkeyup = function(){
     apidatagenerator();
}
var a;
pop.onclick = function(){
  radio.forEach(function(c) {
    c.onclick = function(){
      c.firstElementChild.checked = true;
    }
  });
if (ascending.checked == true) {
  a = 0;
  as_descending(a);
}
else if(descending.checked == true){
  a = 1;
  as_descending(a);
}
else if(areadown.checked == true){
  a = 0;
  area(a);
}
else if(areaup.checked == true){
  a = 1;
  area(a);
}



}

const button = document.querySelectorAll('.button');
    button.forEach(function(a) {
        a.onclick = function(){
          ascending.checked = false
          descending.checked = false
          areaup.checked = false
          areadown.checked = false
          buttondesign(a);
          regions(a);
        }
      });



      coun.addEventListener("click", exp);
      function exp(e){
        var targeting = e.target;
        explanation(targeting);
      }
