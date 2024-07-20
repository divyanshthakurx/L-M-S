function openNav() {
    document.getElementById("sideBar").style.width = "100%";
    document.getElementById("sideNav").style.width = "60%";
  }
  
  /*Close navigation*/
  function exitNav() {
    document.getElementById("sideBar").style.width = "0";
    document.getElementById("sideNav").style.width = "0";
  }

  
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()
