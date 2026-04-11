document.getElementById('startBtn').addEventListener('click', function() {
    const introContent = document.querySelector('.intro-content');
    introContent.classList.add('effect1');
    setTimeout(() => {
        window.location.href = 'main.html';
    }, 800);
});
