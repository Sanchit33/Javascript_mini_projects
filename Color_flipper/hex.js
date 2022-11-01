const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn = document.getElementById('btn').addEventListener("click",getchange);
const color = document.querySelector(".color");



function getchange(){
    document.body.style.backgroundColor = change();
    color.textContent = change();
}


function change(){
    let val ='#';
      for(let i=0;i<6;i++){
        random_number = Math.floor(Math.random()*hex.length)
        val = val + hex[random_number];
    }
    return val;
}
