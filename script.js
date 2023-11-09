function tellJoke() {
    document.getElementById("joke").innerHTML = "Olive.";
    document.getElementById("choices").style.display = "block";
}

function answer(choice) {
    if (choice === 'correct') {
        document.getElementById("result").innerHTML = "Congratulations! You got it right!";
    } else {
        document.getElementById("result").innerHTML = "You Found The Secret Passcode . . . " +
        "<span class='secret-text'>now we don't have to make you disappear</span>";        

    }
    document.getElementById("result").style.display = "block";

}


