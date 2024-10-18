const explainContainerDiv = document.getElementsByClassName('explain-container')[0];
const emojiContainerDiv = document.getElementsByClassName('emoji-container')[0];
const emojiImage = emojiContainerDiv.getElementsByTagName('img')[0];
const chooseContainer = document.getElementsByClassName('choose-feeling-container')[0];
const url = "test.json";

let currentIndex = 0;
let data = [];
let savedData = []

function getData() {
    fetch(url)
    .then((res) => res.json())
    .then((jsonData) => {
        data = jsonData;  // 데이터 저장
        showData(currentIndex);  // 첫 번째 질문 표시
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function showData(index) {
    if (index >= data.length) return;  // 질문이 없으면 종료

    const currentData = data[index];
    explainContainerDiv.innerHTML = currentData["question"].join(""); // 질문 표시
    emojiImage.src = currentData["emoji"];
    chooseContainer.innerHTML = "";  // 이전 답변 초기화

    currentData["answer"].forEach((answer, i) => {
        const div = document.createElement('div');
        div.setAttribute('class', "request");
        div.innerHTML = answer;  // 답변 HTML 추가
        div.addEventListener('click', () => nextQuestion(i));  // 클릭 시 다음 질문
        chooseContainer.appendChild(div);
    });
}

function nextQuestion(id) {
    savedData.push(id+1)
    currentIndex++;  // 인덱스 증가
    if (currentIndex < data.length) {
        showData(currentIndex);  // 다음 질문 표시
    } else {
        explainContainerDiv.innerHTML = "테스트가 끝났습니다.";  // 모든 질문 완료 시 메시지
        chooseContainer.innerHTML = "";
        console.log(savedData)
        localStorage.setItem("testData", savedData)
    }
}

getData();
