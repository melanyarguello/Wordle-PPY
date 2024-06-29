let diccionario = ["APPLE", "ANGEL", "HOUSE", "MOUSE", "PLACE", "TABLE"]


let random = Math.random ()*diccionario.length
random = Math.floor (random)
console.log (random)


let oportunidades = 6;
let palabraSecreta = diccionario [random]

let button= document.getElementById("guess-button")
let input = document.getElementById("guess-input")
let grid = document.getElementById("grid")

button.addEventListener("click" ,enter)

function enter(){
    let intento = input.value.toUpperCase()
    if (intento == palabraSecreta){
        GameOver("GANASTE!!")
    }
    let row = document.createElement("div")
    row.className = "row"
    

    for (let i in palabraSecreta){
        let letra = document.createElement("span")
        letra.className = "letter"
        letra.innerHTML = intento [i]
        
        if (palabraSecreta[i] == intento[i]){
            console.log(intento[i], "verde")
            letra.style.backgroundColor = "green"
        } else if (palabraSecreta.includes(intento[i])){
            console.log(intento[i], "amarillo")
            letra.style.backgroundColor = "yelow"
        }else {
            console.log (intento[i], "gris")
            letra.style.backgroundColor = "gray"
        }
        row.appendChild(letra)
    }
grid.appendChild(row)

    oportunidades -- 
    if (oportunidades == 0)
        GameOver("Ups Perdiste!")
}

function GameOver(mensaje){
    const input = document.getElementById("guess-input");
    const button = document.getElementById("guess-button");   
button.disablet = true
input.disablet = true
let contenedor = document.getElementById("guesses");
contenedor.innerHTML = "<h1>" + mensaje + "</h1>"
}

