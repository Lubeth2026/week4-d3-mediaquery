"use strict";

console.log("Hello");

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const label = document.getElementById("label");
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const slide4 = document.getElementById("slide4");
let slideNumber = 1;

function showSlide1() {
  slide1.classList.remove("hidden");
  slide2.classList.add("hidden");
  slide3.classList.add("hidden");
  slide4.classList.add("hidden");
  label.textContent = "Clouds";
}
function showSlide2() {
  slide2.classList.remove("hidden");
  slide1.classList.add("hidden");
  slide3.classList.add("hidden");
  slide4.classList.add("hidden");
  label.textContent = "Nature";
}
function showSlide3() {
  slide3.classList.remove("hidden");
  slide2.classList.add("hidden");
  slide1.classList.add("hidden");
  slide4.classList.add("hidden");
  label.textContent = "Rose";
}
function showSlide4() {
  slide4.classList.remove("hidden");
  slide2.classList.add("hidden");
  slide3.classList.add("hidden");
  slide1.classList.add("hidden");
  label.textContent = "Tree Path";
}

function render(){
    if(slideNumber === 1){
        showSlide1()
    }else if(slideNumber === 2){
        showSlide2()
    }else if(slideNumber === 3){
        showSlide3()
    }else{
        showSlide4()
    }
}

prevButton.addEventListener("click", (event)=>{
    slideNumber = slideNumber -1
    if(slideNumber < 1){
        slideNumber = 4;
    }
    render()
});
nextButton.addEventListener("click", (event) => {
  slideNumber = slideNumber + 1;
  if (slideNumber > 4) {
    slideNumber = 1;
  }
  render()
});
render()
