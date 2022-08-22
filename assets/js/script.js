document.addEventListener("submit", giveFeedback);

var giveFeedback = function() {

    document.getElementById("player-feedback").innerHTML = "This is your feedback for answering the question correctly."
    console.log("SOMETHING...");


};


document.addEventListener("click", giveFeedback);


