// ================================
// KSH Mobility & Wellness
// Premium Animation v2
// ================================

// 페이지 로드 애니메이션
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// 섹션 등장 애니메이션
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// 메뉴 스크롤 이동
document.querySelectorAll('.navbar a').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});

// 버튼 클릭 효과
document.querySelectorAll(".buttons a").forEach(btn=>{

    btn.addEventListener("mousedown",()=>{

        btn.style.transform="scale(.96)";

    });

    btn.addEventListener("mouseup",()=>{

        btn.style.transform="scale(1)";

    });

});

// Navbar 색상 변경
window.addEventListener("scroll",()=>{

    const nav=document.querySelector(".navbar");

    if(window.scrollY>80){

        nav.style.background="rgba(255,255,255,.97)";
        nav.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";

    }else{

        nav.style.background="rgba(255,255,255,.88)";
        nav.style.boxShadow="0 3px 20px rgba(0,0,0,.05)";

    }

});
