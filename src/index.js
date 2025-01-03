let nome_heroi = "Link"
let nivel = " "

let nivel_xp = 10005

if (nivel_xp <= 1000) {
    nivel = "Ferro" }
 
if (nivel_xp = 1001 && nivel_xp <= 2001); {
    nivel = "Bronze" }

if (nivel_xp = 2001 && nivel_xp <= 5000) {
    nivel = "Prata" 
}

if (nivel_xp = 5001 && nivel_xp <= 7000) {
    nivel = "Ouro" 
}

if (nivel_xp = 7001 && nivel_xp <= 8000) {
    nivel = "Platina" 
}

if (nivel_xp = 8001 && nivel_xp <= 9000) {
    nivel = "Ascendente" 
}

if (nivel_xp = 9001 && nivel_xp <= 10000) {
    nivel = "Imortal" 
}

if (nivel_xp => 10001 ) {
    nivel = "Radiante" 
}

console.log ("O Herói de nome " + nome_heroi + " está no nível de "+ nivel);