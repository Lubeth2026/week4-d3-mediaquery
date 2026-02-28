"use strict";

console.log("hello");

//Form Layout and Info//
const form = document.querySelector("#form")
const nameInput = document.querySelector("#nameInput")
const messageInput = document.querySelector("#messageInput")
const textOut = document.querySelector("#textOut")
const success = document.getElementById("success")

//Prevent Default only matters in JS when you have a SUBMIT EVENT//
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    console.log(nameInput.value)
    console.log(messageInput.value)

    const name = nameInput.value
    const message = messageInput.value

    textOut.textContent += `${name} says: ${message}`
    clearForm()
    success.textContent = "Success!"
    success.classList.add(...["text-2xl", "text-center", "bg-green-400", "rounded", "w-[50%"])
})
function clearForm(){
    nameInput.value = ""
    messageInput.value = ""
}