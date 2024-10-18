const explainContainerDiv = document.getElementsByClassName('explain-container')[0];
const emojiContainerDiv = document.getElementsByClassName('emoji-container')[0];
const emojiImage = emojiContainerDiv.getElementsByTagName('img')[0];
const chooseContainer = document.getElementsByClassName('choose-feeling-container')[0];
const url = "/blackMode/test.json";

let currentIndex = 0;
let data = [];
let savedData = [];

function getData() {
    fetch(url)
    .then((res) => res.json())
    .then((jsonData) => {
        data = jsonData;  // Store data
        showData(currentIndex);  // Show first question
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function showData(index) {
    if (index >= data.length) return;  // End if no more questions

    const currentData = data[index];
    explainContainerDiv.innerHTML = currentData["question"].join("");  // Show question
    emojiImage.src = currentData["emoji"];
    chooseContainer.innerHTML = "";  // Clear previous answers

    currentData["answer"].forEach((answer, i) => {
        const div = document.createElement('div');
        div.setAttribute('class', "request");
        div.innerHTML = answer;  // Add answer to HTML
        div.addEventListener('click', () => nextQuestion(i));  // On click, move to next question
        chooseContainer.appendChild(div);
    });
}

function nextQuestion(id) {
    savedData.push(id + 1);  // Save selected answer
    currentIndex++;  // Increment index
    if (currentIndex < data.length) {
        showData(currentIndex);  // Show next question
    } else {
        explainContainerDiv.innerHTML = "테스트가 끝났습니다.";  // End message
        chooseContainer.innerHTML = "";
        console.log(savedData);
        localStorage.setItem("testData", savedData);  // Save result to localStorage
        window.location.href = '/blackMode/html/infoDark.html';  // Redirect to info.html
    }
}

getData();
