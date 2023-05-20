let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
const charactersOnlyLetters = characters.slice(0, 52)
const charactersLettersAndNumbers = characters.slice(0, 62)
const charactersOnlySymbols = characters.slice(62, characters.length)
const charachtersLettersAndSymbols = charactersOnlyLetters.concat(charactersOnlySymbols)

const buttonOne = document.getElementById("button-one")
const buttonTwo = document.getElementById("button-two")
let passLength = document.getElementById("pass-length")
const deactivateNumbers = document.getElementById("deactive-numbers")
const deactivateSymbols = document.getElementById("deactive-symbols")

function updateArray() {
    if(deactivateNumbers.checked && deactivateSymbols.checked){
            characters = charactersOnlyLetters
        } else if (deactivateNumbers.checked && !deactivateSymbols.checked) { // calisiyor
            characters = charachtersLettersAndSymbols
        } else if(!deactivateNumbers.checked && deactivateSymbols.checked) { //calismiyor
            characters = charactersLettersAndNumbers
        } else {
            characters = characters
        }
}

   deactivateNumbers.addEventListener("click", updateArray)
   deactivateSymbols.addEventListener("click", updateArray)
        
document.getElementById("btn").addEventListener("click", function(){
    buttonOne.textContent = ""
    buttonTwo.textContent = ""
    buttonOne.textContent = getPass(passLength.valueAsNumber)
    buttonTwo.textContent = getPass(passLength.valueAsNumber)
})

function getPass (num){
    let generatedPass = ""
    for ( let i = 0; i < num; i++) {
    generatedPass += characters[Math.floor(Math.random()*characters.length)]
 }
    return generatedPass
 }
 
