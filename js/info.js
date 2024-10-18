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

item = resultInformation[0]
// 템플릿 리터럴을 사용하여 HTML로 변환
    let template = `
        <img src="image/Status Bar (iPhone).png" alt="" id="top">
        <header>
            <img src="image/Vector.png" alt="">
            <div class="search-container">
                ${item['title']}
            </div>
        </header>

        <div class="today-pursue-container">
            ${item['sub-title']}
            <img src="image/${item['resultImg']}" alt="">
            <div class="name-item">${item['name']}</div>
        </div>

        <div class="tag-container">
            ${item['tag'].map(tag => `<div class="tag">${tag}</div>`).join('')}
        </div>

        <div class="meme-mother">
            ${item['original'].map(text => `<p>${text}</p>`).join('')}
        </div>

        <div class="close-container">
            <p>비슷한 추구미</p>
            <div class="close-content">
                ${item['similarPersonImg'].map((img, index) => `
                    <div class="close">
                        <img src="image/${img}" alt="">
                        <div class="info-container">
                            <p>${item['similarPerson'][index]}</p>
                            <p>${item['similarTitle'][index]}</p>
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

