const colors = ["red","green","blue","yellow","orange","cyan"];
const btn = document.getElementById("btn").addEventListener("click", getchange);
const color = document.querySelector(".color");

function getchange(){
    const random_number = random();

    document.body.style.backgroundColor = colors[random_number];

    color.textContent = colors[random_number];
}


function random(){
   return Math.floor(Math.random() * colors.length);
}
