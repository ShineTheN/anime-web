document.getElementById('startBtn').addEventListener('click', function() {
    const introContent = document.querySelector('.intro-content');
    introContent.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'main.html';
    }, 800);
});
