function sendMessage() {
    var input = document.getElementById("user-input");
    var message = input.value.toLowerCase();
    var chatBox = document.getElementById("chat-box");

    chatBox.innerHTML += "<div class='user'>You: " + message + "</div>";

    var response = "";

    if (message.includes("program")) {
        response = "We offer B.Tech (CSE, ECE, EEE), MBA, and BBA programs.";
    } 
    else if (message.includes("eligibility")) {
        response = "For B.Tech: Minimum 60% in 12th with PCM.";
    } 
    else if (message.includes("deadline")) {
        response = "Application deadline is 30th June 2025.";
    }
    else if (message.includes("cse")) {
        response = "CSE focuses on AI, ML, Web Development, and Data Science.";
    }
    else {
        response = "Please ask about programs, eligibility, or deadlines.";
    }

    chatBox.innerHTML += "<div class='bot'>Bot: " + response + "</div>";
    input.value = "";
}