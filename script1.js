function myFunction(){
    var x=document.getElementsByClassName("niname");
    for(var i=0;i<x.length;i++)
    {
        x[i].style.display="none";
    }

}
function changeName(){
    let element= document.getElementById("myName");
    element.innerHTML="Iam Bachuu..!";
    element.style.color="red";

    }
function displayDate(){
    document.getElementById("date").textContent=Date();
}
function light(sw){
    var pic;
    if(sw==1)
        pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXl-pSv9Z6I8Xu29IZtqHMH3SUPZtDICW4bA&s";
    else
        pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6r3qvfBj243GbZViIVIxySMESOY4k88wmPQ&s";
    document.getElementById('bulbimg').src=pic;
}
    
