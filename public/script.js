console.log("script is running");

let exbutton = document.getElementById("showex");
let mealbutton = document.getElementById("showmeal");
let mealslist = document.getElementById("mealslist");
let exlist = document.getElementById("exerciselist");

var closeMeals = function(event){
    mealslist.setAttribute("class", "collapse");
    showmeal.addEventListener('click', closeEx);
}

var closeEx = function(event){
    exerciselist.setAttribute("class", "collapse");
}

document.addEventListener('DOMContentLoaded', function( event ){
  exbutton.addEventListener('click', closeMeals);
});