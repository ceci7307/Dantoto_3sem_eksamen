function OBS() {
  alert("Dette er kun en prototype, og du kan derfor ikke gennemføre dit køb");
}

function onLoad() {
  function toggleMenu() {
    document.querySelector(".burger").classList.toggle("change");
    document.querySelector(".mobil_nav").classList.toggle("show");
  }
  document.querySelector(".burger").addEventListener("click", toggleMenu);
  document.querySelector("ul").addEventListener("click", toggleMenu);
}
//Vil først starte når DOM-indholdet er loaded
document.addEventListener("DOMContentLoaded", function(event) {
  onLoad();
});
