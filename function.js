function handleCommand(inputValue) {
    const command = inputValue.trim().toLowerCase();
    
    const outputDiv = document.createElement("div");
    outputDiv.classList.add("command-output");

    const commandDisplay = document.createElement("p");
    commandDisplay.innerHTML = "@check-stat &gt;&nbsp;" + inputValue;
    outputDiv.appendChild(commandDisplay);

    if (commands[command]) {
        const results = commands[command].join("<br>");
        const resultDisplay = document.createElement("p");
        resultDisplay.innerHTML = results;
        outputDiv.appendChild(resultDisplay);
    } else {
        const errorDisplay = document.createElement("p");
        errorDisplay.textContent = "stat not found... try one from above.";
        errorDisplay.style.color = "#861a03";
        outputDiv.appendChild(errorDisplay);
    }

    const container = document.getElementById("output-container");
    container.appendChild(outputDiv);

    moveInputBelow();
}


function moveInputBelow() {
    const container = document.getElementById("output-container");
    const inputWrapper = document.getElementById("input-wrapper");
    const visibleInput = document.getElementById("visible-input");
    const input = document.getElementById("myInput");

    visibleInput.textContent = '';
    container.appendChild(inputWrapper);
    input.value = '';
    input.focus(); 
    window.scrollTo(0, document.body.scrollHeight);
}


function updateVisibleInput(event) {
    const visibleInput = document.getElementById("visible-input");
    visibleInput.textContent = event.target.value;
}

window.onload = function() {
    const input = document.getElementById("myInput");
    input.focus(); 
    input.addEventListener("input", updateVisibleInput);
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            handleCommand(input.value);
        }
    });
};
