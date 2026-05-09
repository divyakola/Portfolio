function showMessage(){

    alert("Thank you for visiting my portfolio website!");

}

/* DARK MODE */

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeToggle.innerHTML = "☀️";

    }else{

        themeToggle.innerHTML = "🌙";

    }

});

/* READ MORE */

const readButtons = document.querySelectorAll(".read-more-btn");

readButtons.forEach(button => {

    button.addEventListener("click", () => {

        const details =
        button.nextElementSibling;

        if(details.style.display === "block"){

            details.style.display = "none";

            button.innerHTML = "Read More";

        }else{

            details.style.display = "block";

            button.innerHTML = "Show Less";

        }

    });

});
