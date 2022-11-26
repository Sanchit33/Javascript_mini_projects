const show_btn  = document.querySelector(".modal-btn");
const close_btn = document.querySelector(".close-btn");
const show_modal = document.querySelector(".modal-overlay");

show_btn.addEventListener("click", function (){
    // console.log(show_btn.classList[1])
    show_modal.classList.add("open-modal");
});

close_btn.addEventListener("click", function(){
    show_modal.classList.remove("open-modal")
})



