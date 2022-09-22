const menu = document.querySelector("#menu")
menu.addEventListener("click", myScript);




const search = document.querySelector("#site-search");
const logo = document.querySelector("#logo");
const parag1 = document.querySelector("#par1");
const parag2 = document.querySelector("#par2");
const parag3 = document.querySelector("#par3");
const parag4 = document.querySelector("#par4");
const parag5 = document.querySelector("#par5");
const avatar = document.querySelector("#avatar");
const names = document.querySelector("#name-and-lastname");
const width = document.querySelector("#container-box");
const justify = document.querySelector("#bot");


function myScript () {
    if (width.style.gridTemplateColumns == "18.3fr 81.7fr") {
        search.removeAttribute("placeholder");
        logo.style.display= "none";
        avatar.style.display= "none";
        parag1.style.display= "none";
        parag2.style.display= "none";
        parag3.style.display= "none";
        parag4.style.display= "none";
        parag5.style.display= "none";
        names.style.display= "none"; 
        width.style.gridTemplateColumns = "1fr 21fr";
        justify.style.justifyContent = "center";
    } else {
        search.setAttribute("placeholder", "Buscar");
        logo.style.display= "";
        avatar.style.display= "";
        parag1.style.display= "";
        parag2.style.display= "";
        parag3.style.display= "";
        parag4.style.display= "";
        parag5.style.display= "";
        names.style.display= ""; 

        width.style.gridTemplateColumns = "18.3fr 81.7fr";
        justify.style.justifyContent = "space-between";

    }

        
    

    
    
    
    

}


