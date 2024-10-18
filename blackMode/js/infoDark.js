let data = localStorage.getItem('testData');
let searchInfo = localStorage.getItem('searchInfo');

const resultInformation = [
    {
        "id" : 1,
        "title" : "럭키비기",
        "sub-title": "<p>완전 럭키비키잖아? 🍀</p>",
        "resultImg" : "장원영.png",
        "name" : "장원영",
        "tag" : ["#럭키비키", "#긍정적 사고", "#원영적 사고"],
        "original" : ["완전 럭키비키잖아?🍀의 어원", "Lucky와 장원영의 영어 이름 Vicky를", "연달아 쓴 일종의 펀치라인이자 언어유희"],
        "similarPersonImg" : ["money.jpeg", "장원영.png"], 
        "similarPerson" : ["류승수", "해원"],
        "similarTitle" : ["아무도 나를 모르고..", "외모체크!!"], 
        "compareTag": [3,1,1]
    },
    {
        "id" : 2,
        "title" : "아르켜줄게",
        "sub-title": "<p>아르켜줄게</p>",
        "resultImg" : "Hanni.png",
        "name" : "하니",
        "tag" : ["#순수", "#귀여움", "#아기소"],
        "original" : ["아르켜줄게의 어원", "bubble gum 뮤비 때 혜인이 말한", "“오늘은 내가 비눗방울을 만드는 법을 아르켜줄게”에서 유래한 밈"],
        "similarPersonImg" : ["장원영.png", "Haewon.jpeg"], 
        "similarPerson" : ["장원영", "해원"],
        "similarTitle" : ["럭키비키자나~", "외모체크!!"], 
        "compareTag": [2,2,3]
    },
    {
        "id" : 3,
        "title" : "외모체크!",
        "sub-title": "<p>외모체크!!</p>",
        "resultImg" : "Haewon.jpeg",
        "name" : "오해원",
        "tag" : ["#자신감", "#완벽", "#긍정적"],
        "original" : ["외모체크!!의 어원", "엔믹스의 멤버 오해원이 자신의 외모를 체크하는 유머러스한 행동에서 시작", "스스로를 사랑하고 자신감을 표현하는 방식"],
        "similarPersonImg" : ["oil.jpeg", "Hanni.png"], 
        "similarPerson" : ["최강록", "하니"],
        "similarTitle" : ["나야, 들기름", "아르켜줄게"], 
        "compareTag": [3,1,3]
    }
    ,
    {
        "id" : 4,
        "title" : "나야, 들기름",
        "sub-title": "<p>조림의 신</p>",
        "resultImg" : "oil.jpeg",
        "name" : "최강록",
        "tag" : ["#자신감", "#완벽", "#조림의 신"],
        "original" : ["나야, 들기름의 어원", "흑백요리사 출연자 최강록의 인터뷰 내용", "아무리 어려운 문제가 주어져도 내가 짱이야!"],
        "similarPersonImg" : ["장원영.png", "oil.jpeg"], 
        "similarPerson" : ["장원영", "최강록"],
        "similarTitle" : ["럭키비키", "나야, 들기름"], 
        "compareTag": [1,3,3]
    }
    ,
    {
        "id" : 5,
        "title" : "아무도 나를 모르고 돈이 많았으면 좋겠어요",
        "sub-title": "<p>🙏</p>",
        "resultImg" : "money.jpeg",
        "name" : "류승수",
        "tag" : ["#모두의","#소원", "#제발"],
        "original" : ["아무도 나를 모르고..의 어원", "류승수가 라디오스타에 나와 한 말", "모두의 소원....🙏🙏"],
        "similarPersonImg" : ["Hanni.png", "Haewon.jpeg"], 
        "similarPerson" : ["하니", "해원"],
        "similarTitle" : ["아르켜줄게", "외모체크!!"], 
        "compareTag": [2,2,2]
    }
    ,
    {
        "id" : 6,
        "title" : "단발 최고 도달미",
        "sub-title": "<p>단발병</p>",
        "resultImg" : "short.jpeg",
        "name" : "최양락",
        "tag" : ["#자신감", "#완벽", "#긍정적"],
        "original" : ["단발 최고 도달의 어원", "내가 한 단발이 최양락의 단발과 더 비슷하다!", "그래도 귀여우니 됐어 ❤️"],
        "similarPersonImg" : ["money.jpeg", "letsgo.jpeg"], 
        "similarPerson" : ["류승수", "더보이즈"],
        "similarTitle" : ["아무도 나를 모르고..", "#ㄱㅂㅈㄱ"], 
        "compareTag": [3,2,3]
    }
    ,
    {
        "id" : 7,
        "title" : "손민수",
        "sub-title": "<p>매력쟁이</p>",
        "resultImg" : "short.jpeg",
        "name" : "치즈인터트랩",
        "tag" : ["#매력덩어리", "#귀여움", "인기만점"],
        "original" : ["손민수의 어원", "치즈인더트랩에서 주인공을 따라하는 조연", "누가 널 따라할 정도로 매력적인 걸!!"],
        "similarPersonImg" : ["money.jpeg", "Hanni.png"], 
        "similarPerson" : ["류승수", "하니"],
        "similarTitle" : ["아무도 나를 모르고..", "아르켜줄게"], 
        "compareTag": [2,3,3]
    }
    ,
    {
        "id" : 8,
        "title" : "가보자고 ",
        "sub-title": "<p>#ㄱㅂㅈㄱ</p>",
        "resultImg" : "letsgo.jpeg",
        "name" : "더보이즈",
        "tag" : ["#자신감", "#도전", "#긍정적"],
        "original" : ["가보자고의 어원", "더보이즈의 팬이 #ㄱㅂㅈㄱ로 시작", "무슨 일이든 다 해낼 수 있다!! 💪"],
        "similarPersonImg" : ["장원영.png", "letsgo.jpeg"], 
        "similarPerson" : ["장원영", "더보이즈"],
        "similarTitle" : ["럭키비키", "#ㄱㅂㅈㄱ"], 
        "compareTag": [1,1,2]
    }
    ,
    {
        "id" : 9,
        "title" : "헤어지자고?",
        "sub-title": "<p>너 누군데?</p>",
        "resultImg" : "whoareyou.jpeg",
        "name" : "이소희",
        "tag" : ["#자신감", "#완벽", "#당당"],
        "original" : ["헤어지자고?의 어원", "라이즈의 팬이 소희에게 연기를 부탁", "무슨 일이든 뭐 어때라는 마인드로 직진하는그야~!"],
        "similarPersonImg" : ["Haewon.jpeg", "Hanni.png"], 
        "similarPerson" : ["해원", "하니"],
        "similarTitle" : ["외모체크!!", "아르켜줄게"], 
        "compareTag": [1,1,3]
    }
    ,
    {
        "id" : 10,
        "title" : "폼",
        "sub-title": "<p>미쳤다!!</p>",
        "resultImg" : "crazy.jpeg",
        "name" : "피식대학",
        "tag" : ["#자신감", "#완벽", "#퍼펙트"],
        "original" : ["폼 미쳤다!의 어원", "피식대학의 김민수가 사용하면서 유행", "오늘 하루를 완벽하게 마친 당신에게 드리는 폼 미쳤다!!"],
        "similarPersonImg" : ["장원영.png", "Hanni.png"], 
        "similarPerson" : ["장원영", "하니"],
        "similarTitle" : ["럭키비키", "아르켜줄게"], 
        "compareTag": [1,1,1]
    }
];

// Calculate similarity function
function calculateSimilarity(arr1, arr2) {
    let similarity = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            similarity++;
        }
    }
    return similarity;
}

// Find the best match based on test data
function findBestMatch(savedData) {
    let bestMatch = null;
    let maxSimilarity = -1;

    resultInformation.forEach((item) => {
        let similarity = calculateSimilarity(savedData, item.compareTag);
        if (similarity > maxSimilarity) {
            maxSimilarity = similarity;
            bestMatch = item;
        }
    });

    return bestMatch;
}

// Display the result on the info page
function displayResult(bestMatch) {
    if (!bestMatch) {
        console.log("No matching result found.");
        return;
    }

    let template = `
    <img src="/image/Mini-black.png" alt="" id="top">

        <header>
            <img src="/image/Vector.png" alt="" class="nextButton">
            <div class="search-container">
                ${bestMatch['title']}
            </div>
        </header>

        <div class="today-pursue-container">
            ${bestMatch['sub-title']}
            <img src="/image/${bestMatch['resultImg']}" alt="">
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
                        <img src="/image/${img}" alt="">
                        <div class="info-container">
                            <p>${bestMatch['similarPerson'][index]}</p>
                            <p>${bestMatch['similarTitle'][index]}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    document.querySelector('main').insertAdjacentHTML('beforeend', template);
}

// Check if searchInfo exists, otherwise use test data
if (searchInfo) {
    let bestMatch = resultInformation.find(item => item.title.includes(searchInfo) || item.tag.includes(`#${searchInfo}`));
    displayResult(bestMatch);
    localStorage.setItem("searchInfo", "")
} else if (data) {
    let savedData = data.split(",").map(val => Number.parseInt(val));
    let bestMatch = findBestMatch(savedData);
    console.log(bestMatch)
    localStorage.setItem('todayPursue', JSON.stringify(bestMatch));  // Store the result
    displayResult(bestMatch);
}

// Add navigation event
document.querySelector('.nextButton').addEventListener('click', function() {
    window.location.href = '/blackMode/html/homeDark.html';  
});
