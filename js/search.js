document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.vector').addEventListener('click', function() {
        window.location.href = 'home.html';  
    });

    document.querySelector('.search-btn').addEventListener('click', function(){
        const inputBox = document.getElementById('inputbox');
        const searchInfo = inputBox.value;  // Use value instead of textContent for input elements
        localStorage.setItem('searchInfo', searchInfo);
        window.location.href = 'info.html';
    });
});
