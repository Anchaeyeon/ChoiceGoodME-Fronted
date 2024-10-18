document.addEventListener('DOMContentLoaded', function() {
    let todayPursue = localStorage.getItem('todayPursue');
    console.log(todayPursue);

    if (todayPursue) {
        let bestMatch = JSON.parse(todayPursue); // JSON 형태가 맞는지 확인
        console.log(bestMatch);

        let template = `
            <div class="title-container">
                <p>오늘의 나의 추구미 ✨</p>
                <img src="image/VectorInversion.png" alt="" class="vector">
            </div>

            <div class="pursue-person-container">
                <div class="person-container">
                    <img src="image/${bestMatch['resultImg']}" alt="">
                    <div class="name-item">
                        ${bestMatch["name"]}
                    </div>
                </div>

                <div class="infos-container">
                    <p>${bestMatch["title"]}</p>
                    <div class="tag-container">
                        ${bestMatch['tag'].map(tag => `<div class="tag">${tag}</div>`).join('')}
                    </div>
                </div>
            </div>

            <div class="close-container">
                <div class="close-content">
                    <img src="image/${bestMatch["similarPersonImg"][0]}" alt="">
                    <p>${bestMatch["similarPerson"][0]}</p>
                </div>
                <div class="close-content">
                    <img src="image/${bestMatch["similarPersonImg"][1]}" alt="">
                    <p>${bestMatch["similarPerson"][1]}</p>
                </div>
            </div>
        `;

        document.querySelector('.today-pursue-container').innerHTML = template;  // 기존 내용을 교체
    } else {
        console.log("No saved pursue found.");
    }
});
