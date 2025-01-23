let containerEl = document.getElementById("speedTypingTest");
let timerEl = document.getElementById("timer");
let quoteEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let textareaEl = document.getElementById("quoteInput");
let submitEl = document.getElementById("submitBtn");
let resetEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");
let uniqueId = null;
let counter = 0

function seconds() {
    uniqueId = setInterval(function() {
        timerEl.textContent = counter + " seconds"

        counter = counter + 1
    }, 1000);
}

function reCall() {



    let url = "https://apis.ccbp.in/random-quote"

    fetch(url)
        .then(function(response) {
            return response.json()

        })
        .then(function(jsonData) {
            quoteEl.textContent = jsonData.content
            seconds()

        });
}
reCall();

function submitButton() {
    if ((quoteEl.textContent) === (textareaEl.value)) {
        clearInterval(uniqueId);
        resultEl.textContent = "You typed in " + counter + " seconds"


    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }






}

function calling() {

    reCall();
}

resetEl.addEventListener("click", function() {

    counter = 0
    clearInterval(uniqueId)

    containerEl.classList.add("d-none");

    spinnerEl.classList.remove("d-none");
    calling();





});
submitEl.addEventListener("click", function() {
    submitButton();
});


