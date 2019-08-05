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
    console.log("data ", data)

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

let excommentbutton = document.querySelectorAll(".excommentbutton");
let excommenttext = document.querySelectorAll(".inputexcomment");

for (let i=0; i<excommentbutton.length; i++) {
    excommentbutton[i].addEventListener("click", function() {
        var excommentinput = excommenttext[i].value;
        var user_id = userId;
        var ex_id = excommentbutton[i].id;
        commentPost(excommentinput, user_id, ex_id);
    })
}

var commentPost = function(excommentinput, user_id, ex_id){
    var data = {"comment": excommentinput, "user_id": user_id, "exercises_id": ex_id}
    console.log("data ", data)

    var xmlhttp = new XMLHttpRequest();
    var url = 'excomment/'+ex_id;

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


let revealcomments = document.querySelectorAll(".revealcomments");

for (let i=0; i<revealcomments.length; i++) {
    revealcomments[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";
        }else{
            panel.style.display = "block"
        }
        var meals_id = revealcomments[i].id;
        revealComments(meals_id);
    })
}

var revealComments = function(meals_id){
    var xmlhttp = new XMLHttpRequest();
    var url = '/showmealcomments/'+meals_id;
    var idurl = '#'+meals_id;

    xmlhttp.addEventListener("load", function() {
        if(this.status === 200){
            console.log("view comments");
        }else{
            console.log("error");
        }
        console.log("done");
        let response = JSON.parse(this.responseText);
        console.log(response.data.length);

        let bucket = document.querySelector(`[list="${meals_id}"]`);

        while (bucket.firstChild) {
          bucket.removeChild(bucket.firstChild);
        }

        for(let i=0; i<response.data.length; i++){
            let content = response.data[i].comment;
            let time = response.data[i].creationinfo;
            let user = response.data[i].username;

            let tempdiv = document.createElement("div");

            let tempcontent = document.createElement('h4');
            tempcontent.innerHTML = content;
            tempdiv.appendChild(tempcontent);

            let tempuser = document.createElement("p");
            tempuser.innerHTML = "Posted by: " + user;
            tempdiv.appendChild(tempuser);

            let temptime = document.createElement('p');
            temptime.innerHTML = "Posted at: " + time;
            tempdiv.appendChild(temptime);

            tempdiv.setAttribute("class", "comment-container");
            bucket.appendChild(tempdiv);
        }
    });

    xmlhttp.open("GET", url);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(meals_id));
}




let revealexcomments = document.querySelectorAll(".revealexcomments");

for (let i=0; i<revealexcomments.length; i++) {
    revealexcomments[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";
        }else{
            panel.style.display = "block"
        }
        var exercises_id = revealexcomments[i].id;
        revealExComments(exercises_id);
    })
}

var revealExComments = function(exercises_id){
    console.log("inside reveal ex comments function");
    var xmlhttp = new XMLHttpRequest();
    var url = '/showexercisecomments/'+exercises_id;
    var idurl = '#'+exercises_id;

    xmlhttp.addEventListener("load", function() {
        if(this.status === 200){
            console.log("view comments");
        }else{
            console.log("error");
        }
        console.log("done");
        let response = JSON.parse(this.responseText);

        let exbucket = document.querySelector(`[list="extag${exercises_id}"]`);

        while (exbucket.firstChild) {
          exbucket.removeChild(exbucket.firstChild);
        };

        for(let i=0; i<response.data.length; i++){
            let content = response.data[i].comment;
            let time = response.data[i].creationinfo;
            let user = response.data[i].username;

            let tempdiv = document.createElement("div");

            let tempcontent = document.createElement('h4');
            tempcontent.innerHTML = content;
            tempdiv.appendChild(tempcontent);

            let tempuser = document.createElement("p");
            tempuser.innerHTML = "Posted by: " + user;
            tempdiv.appendChild(tempuser);

            let temptime = document.createElement('p');
            temptime.innerHTML = "Posted at: " + time;
            tempdiv.appendChild(temptime);

            tempdiv.setAttribute("class", "comment-container");
            exbucket.appendChild(tempdiv);
        }
    });

    xmlhttp.open("GET", url);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify(exercises_id));
}

document.addEventListener('DOMContentLoaded', function( event ){
  exbutton.addEventListener('click', closeMeals);
});