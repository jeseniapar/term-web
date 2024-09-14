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
    visibleInput.textContent = '';
    
    container.appendChild(inputWrapper);

    const input = document.getElementById("myInput");
    input.value = '';
    
    window.scrollTo(0, document.body.scrollHeight);
}

function updateVisibleInput(event) {
    const visibleInput = document.getElementById("visible-input");
    visibleInput.textContent = event.target.value;
}
