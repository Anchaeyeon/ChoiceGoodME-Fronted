let data = localStorage.getItem('testData');
let savedData = data.split(",").map((val) => Number.parseInt(val));
console.log(savedData);

var resultInformation = [
    {
        "id" : 1,
        "title" : "완전 럭키비기",
        "sub-title": "<p>완전 럭키비키잖아? 🍀</p>",
        "resultImg" : "장원영.png",
        "name" : "장원영",
        "tag" : ["#럭키비키", "#긍정적 사고", "#원영적 사고"],
        "original" : ["완전 럭키비키잖아?🍀의 어원", "Lucky와 장원영의 영어 이름 Vicky를", "연달아 쓴 일종의 펀치라인이자 언어유희"],
        "similarPersonImg" : ["장원영.png", "장원영.png"], 
        "similarPerson" : ["하니", "해원"],
        "similarTitle" : ["아르켜줄게", "외모체크!!"], 
        "compareTag": [3,3,3]
    },
    {
        "id" : 2,
        "title" : "하니밈-아르켜줄게",
        "sub-title": "<p>아르켜줄게</p>",
        "resultImg" : "장원영.png",
        "name" : "하니",
        "tag" : ["#럭키비키", "#긍정적 사고", "#원영적 사고"],
        "original" : ["아르켜줄게의 어원", "bubble gum 뮤비 때 혜인이 말한", "“오늘은 내가 비눗방울을 만드는 법을 아르켜줄게”에서 유래한 밈"],
        "similarPersonImg" : ["장원영.png", "장원영.png"], 
        "similarPerson" : ["장원영", "해원"],
        "similarTitle" : ["럭키비키자나~", "외모체크!!"], 
        "compareTag": [1,2,3]
    },
    {
        "id" : 3,
        "title" : "외모췤",
        "sub-title": "<p>외모체크!!</p>",
        "resultImg" : "장원영.png",
        "name" : "오해원",
        "tag" : ["#외모체크", "#자신감", "#긍정적인 영향"],
        "original" : ["외모체크!!의 어원", "Lucky와 장원영의 영어 이름 Vicky를", "연달아 쓴 일종의 펀치라인이자 언어유희"],
        "similarPersonImg" : ["장원영.png", "장원영.png"], 
        "similarPerson" : ["하니", "장원영"],
        "similarTitle" : ["아르켜줄게", "럭키비키자나~"], 
        "compareTag": [2,2,3]
    }
];

// savedData와 compareTag 배열을 비교하여 가장 일치하는 결과 찾기
function calculateSimilarity(arr1, arr2) {
    let similarity = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            similarity++;
        }
    }
    return similarity;
}

let bestMatch = null;
let maxSimilarity = -1;

resultInformation.forEach((item) => {
    let similarity = calculateSimilarity(savedData, item.compareTag);
    if (similarity > maxSimilarity) {
        maxSimilarity = similarity;
        bestMatch = item;
    }
});

if (bestMatch) {
    // bestMatch에 해당하는 결과 템플릿을 HTML로 삽입
    let template = `
        <img src="image/Status Bar (iPhone).png" alt="" id="top">
        <header>
            <img src="image/Vector.png" alt="" class="vector">
            <div class="search-container">
                ${bestMatch['title']}
            </div>
        </header>

        <div class="today-pursue-container">
            ${bestMatch['sub-title']}
            <img src="image/${bestMatch['resultImg']}" alt="">
            <div class="name-item">${bestMatch['name']}</div>
        </div>

        <div class="tag-container">
            ${bestMatch['tag'].map(tag => `<div class="tag">${tag}</div>`).join('')}
        </div>

        <div class="meme-mother">
            ${bestMatch['original'].map(text => `<p>${text}</p>`).join('')}
        </div>

        <div class="close-container">
            <p>비슷한 추구미</p>
            <div class="close-content">
                ${bestMatch['similarPersonImg'].map((img, index) => `
                    <div class="close">
                        <img src="image/${img}" alt="">
                        <div class="info-container">
                            <p>${bestMatch['similarPerson'][index]}</p>
                            <p>${bestMatch['similarTitle'][index]}</p>
                        </div>
                    </div>
                `).join('')}
                <div class="close">
                    <div class="btn-background">
                        <img src="image/tabler_plus.png" alt="">
                    </div>
                    <div class="my-pursue-container">
                        <p>나만의 추천 추구미</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.querySelector('main').insertAdjacentHTML('beforeend', template);
    document.querySelector('.vector').addEventListener('click', function() {
        window.location.href = 'home.html';  
    });
