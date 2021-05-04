// // // console.log("Hello script is working from Diff file")

// // //input
// // var username= prompt("Give me your username")

// // //processing
// // var welcomeMessage="this script works!! " + username

// // //output
// // alert(welcomeMessage)

// var btnTranslate= document.querySelector("#btn-translate")
// // console.log(btnTranslate)

// btnTranslate.addEventListener("click", function clickEventHander(){
//     console.log("clicked!")
// })

var btnTranslate= document.querySelector("#btn-translate")  
var textInput= document.querySelector("#text-input")
console.log(textInput)

function clickHandler(){
    console.log("clicked!")
    console.log("input", textInput.value)
}
btnTranslate.addEventListener("click", clickHandler)