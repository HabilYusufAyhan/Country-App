async function explanation(a){

if (a.classList.contains("fa-circle-info")) {
   var id = a.parentElement.parentElement.lastElementChild.textContent;
   console.log(id);
  }
}
export { explanation };