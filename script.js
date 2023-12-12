function generatePrompt() {
    var role = document.getElementById("role").value;
    var action = document.getElementById("action").value;
    var instruction = document.getElementById("instruction").value;
    var algorithm = document.getElementById("algorithm").value;
    var style = document.getElementById("style").value;
    var documentType = document.getElementById("documentType").value;
    var context = document.getElementById("context").value;

    var requirements = [];
    if (document.getElementById("terminology").checked) requirements.push("Professional Terminology");
    if (document.getElementById("citation").checked) requirements.push("Citations");
    if (document.getElementById("examples").checked) requirements.push("Examples");
    // Add logic for other checkboxes

    var prompt = "Act as " + role + "\n" + action + "\nInstruction: " + instruction + "\nAlgorithm: " + algorithm + "\nStyle/Tone: " + style + "\nRequirements: " + requirements.join(", ") + "\nDocument Type: " + documentType + "\nContext: " + context;

    document.getElementById("result").value = prompt;
}

function saveInputs() {
    var inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(function(input) {
        if (input.type === 'checkbox') {
            localStorage.setItem(input.id, input.checked);
        } else {
            localStorage.setItem(input.id, input.value);
        }
    });
}

function loadSavedInputs() {
    var inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(function(input) {
        if (input.type === 'checkbox') {
            input.checked = localStorage.getItem(input.id) === 'true';
        } else {
            input.value = localStorage.getItem(input.id) || '';
        }
    });
    generatePrompt(); // Update the prompt based on saved values
}


document.addEventListener("DOMContentLoaded", function() {
    var inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(function(input) {
        input.addEventListener('change', generatePrompt);
    });
  loadSavedInputs();

    var inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(function(input) {
        input.addEventListener('change', function() {
            generatePrompt();
            saveInputs();
        });
    });
});
