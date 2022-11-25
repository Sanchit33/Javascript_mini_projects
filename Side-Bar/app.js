const toggle_btn = document.querySelector(".sidebar-toggle")
const close_btn = document.querySelector(".close-btn")
const  show_sidebar = document.querySelector(".sidebar") 


toggle_btn.addEventListener("click", function(){
    show_sidebar.classList.toggle("show-sidebar")
})

close_btn.addEventListener("click", function(){
    show_sidebar.classList.remove("show-sidebar")
})