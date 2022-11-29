const buttton = document.querySelectorAll(".question-btn");

buttton.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const questionn = e.currentTarget.parentElement.parentElement
        questionn.classList.toggle("show-text");
    })
})

// addEventListener()