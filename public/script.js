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

let commentbutton = document.querySelectorAll(".commentbutton");
let commenttext = document.querySelectorAll(".inputcomment");

for (let i=0; i<commentbutton.length; i++) {
    commentbutton[i].addEventListener("click", function() {
        var commentinput = commenttext[i].value;
        var user_id = userId;
        var meals_id = commentbutton[i].id;
        commentPost(commentinput, user_id, meals_id);
    })
}

var commentPost = function(commentinput, user_id, meals_id){
    var data = {"comment": commentinput, "user_id": user_id, "meals_id": meals_id}

    var xmlhttp = new XMLHttpRequest();
    var url = 'mealcomment/'+meals_id;

    xmlhttp.addEventListener("load", function() {
        if(this.status === 200){
            console.log("add comment");
        }else{
            console.log("error");
        }
        console.log("done");
        console.log(this.responseText);
    });
    xmlhttp.open("POST", url);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(data));


}


// create a function to do a post request



document.addEventListener('DOMContentLoaded', function( event ){
  exbutton.addEventListener('click', closeMeals);
});