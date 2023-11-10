// alert("hello")
let systumi=Math.floor(Math.random()*3);
let systum=['r','p','s'][systumi];
document.querySelectorAll("button")[0].addEventListener("click",onclickr);
document.querySelectorAll("button")[1].addEventListener("click",onclickp);
document.querySelectorAll("button")[2].addEventListener("click",onclicks);
function onclickr(){
    var user1="r";
    document.querySelector(".usersecoutput").innerHTML="USER ENTERD: ROCK";
    // alert(user1);
    // alert(systumi);
    if(systum=="p"){
        // alert("system won");
        document.querySelector(".systemsecoutput").innerHTML="SYSTEM ENTERD: PAPER";
        document.querySelector(".winsecoutput").innerHTML="WHO WON: SYSTEM";
    }
    else if(systum=="s"){
        // alert("user won");
        document.querySelector(".systemsecoutput").innerHTML="SYSTEM ENTERD: SCISSOR";
        document.querySelector(".winsecoutput").innerHTML="WHO WON: USER";
    }
    else{
        // alert("tied");
        document.querySelector(".systemsecoutput").innerHTML="SYSTEM ENTERED: ROCK";
        document.querySelector(".winsecoutput").innerHTML="WHO WON: MATCH TIED";
    }
}
function onclickp(){
    var user2='p';
    document.querySelector(".usersecoutput").innerHTML="USER ENTERD: PAPER";
    // alert(user2);
    // alert("p");
    // alert(systumi);
    if(systum=="s"){
        // alert("system won");
        document.querySelector(".systemsecoutput").innerHTML="SYSTEM ENTERD: SCISSOR";
        document.querySelector(".winsecoutput").innerHTML="WHO WON: SYSTEM";
    }
    else if(systum=="r"){
        // alert("user won");
        document.querySelector(".systemsecoutput").innerHTML="SYSTEM ENTERD: ROCK";
        document.querySelector(".winsecoutput").innerHTML="WHO WON: USER";
    }
    else{
        // alert("tied");
        document.querySelector(".systemsecoutput").innerHTML="SYSTEM ENTERED: PAPER";
        document.querySelector(".winsecoutput").innerHTML="WHO WON: MATCH TIED";
    }
}
function onclicks(){
    var user3='s';
    document.querySelector(".usersecoutput").innerHTML="USER ENTERD: SCISSOR";
    // alert(user3);
    // alert("s");
    // alert(systumi);
    if(systum=="p"){
        // alert("user won");
        document.querySelector(".systemsecoutput").innerHTML="SYSTEM ENTERD: PAPER";
        document.querySelector(".winsecoutput").innerHTML="WHO WON: USER";
    }
    else if(systum=="r"){
        // alert("system won");
        document.querySelector(".systemsecoutput").innerHTML="SYSTEM ENTERD: ROCK";
        document.querySelector(".winsecoutput").innerHTML="WHO WON: SYSTEM";
    }
    else{
        // alert("tied");
        document.querySelector(".systemsecoutput").innerHTML="SYSTEM ENTERED: SCISSOR";
        document.querySelector(".winsecoutput").innerHTML="WHO WON: MATCH TIED";
    }
}