function tellJoke() {
    document.getElementById("joke").innerHTML = "Olive.";
    document.getElementById("choices").style.display = "block";
}

function answer(choice) {
    if (choice === 'correct') {
        document.getElementById("result").innerHTML = "Congratulations! You got it right!";
        document.getElementById("result").style.display = "block";
    } else {
        document.getElementById("result").innerHTML = "You Found The Secret Button. . . ";
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerHTML = " now we don't have to make you disapear!"
        document.getElementById("result").style.display = ".secret-text";
        

    }
}


