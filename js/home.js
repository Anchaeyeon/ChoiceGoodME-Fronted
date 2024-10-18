const goToSearch = document.querySelector('button');
goToSearch.addEventListener('click', function(){
    window.location.href="search.html"
})


document.querySelector('.mypage-icons').addEventListener('click', function() {
    window.location.href = 'search.html';  
});
document.querySelector('.logo-image').addEventListener('click', function() {
    window.location.href = 'login.html';  
});

document.querySelector('.search-btn').addEventListener('click', function(){
    const inputBox = document.getElementById('inputbox');
    const searchInfo = inputBox.value;  // Use value instead of textContent for input elements
    localStorage.setItem('searchInfo', searchInfo);
    window.location.href = 'info.html';
});


