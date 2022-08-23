
var giveFeedback = function() {

    document.getElementById("player-feedback").innerHTML = "This is your feedback for answering the question correctly."
    console.log("SOMETHING...");


};


//document.addEventListener("click", giveFeedback);
document.querySelector("#answer-btn").addEventListener("click", giveFeedback);


