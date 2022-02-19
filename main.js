//esconder nav con javaScript

let enlace = document.querySelector("ul")
let nav = document.querySelector("nav")
let valorNumericoinput = 1
console.log(valorNumericoinput);

enlace.addEventListener("click", (event) => {
    if(event.target.matches("li")){
        enlace.style.right="100%"
    } 
})

nav.addEventListener("click", e => {
    if(e.target.matches("input") ){
        enlace.style.right="0"
        ++valorNumericoinput
        if(valorNumericoinput % 2){
            enlace.style.right="100%"
            console.log(valorNumericoinput % 1);
        }
        console.log(valorNumericoinput)
    }
  
})
