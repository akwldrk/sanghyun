// 페이지 로드 시 부드럽게 나타나기
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// 서비스 카드 스크롤 애니메이션
const cards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all .7s ease";
    observer.observe(card);
});

// 버튼 클릭 효과
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.96)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});
