function showMessage(){

    alert("Thank you for visiting my portfolio website!");

}

const buttons = document.querySelectorAll(".read-more-btn");

buttons.forEach(button => {

    button.addEventListener("click", function(event){

        event.preventDefault();

        alert("Project details page coming soon!");

    });

});
