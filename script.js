/* data aos */
AOS.init({
    duration: 400,
    easing: 'linear',
    once: true
});
let header = document.querySelector('.header');

/* swiper slide */
let coverSlide = document.querySelector('.cover-slide-container');
let coverWrapper = coverSlide.querySelector('.swiper');
let coverSwiper = new Swiper(coverWrapper, {
    slidesPerView: 'auto',
    speed: 1000,
});

/* logo slide */
const copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logo-slider").appendChild(copy);

/* loop swiper slide */
let slideSection = document.querySelector('.slide-line');
let loopSlide = slideSection.querySelector('.swiper');
if (window.innerWidth > 1000) {
    let loopSwiper = new Swiper(loopSlide, {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        breakpoints: {
            1500: {
                spaceBetween: 50
            }
        }
    })
}
if (window.innerWidth < 1000) {
    let loopSwiper = new Swiper(loopSlide, {
        slidesPerView: 'max',
    })

    let swiperContainer = slideSection.querySelector('.swiper-container');
    let leftRightInner = document.querySelector('.left-right-inner');

    leftRightInner.append(swiperContainer);

}

/* slide circle */
let circleCont = document.querySelector('.line-container');
let inner = slideSection.querySelectorAll('.swiper-slide');
let lineContainer = document.querySelector('.line-container');
let backgroundStyle = document.querySelector('.site-style-btn');
let wrapper = document.querySelector('.wrapper');
let divStyle = document.querySelector('.el-div');
let fourDivs = document.querySelectorAll('.four-el-div');
let logoWhite = document.querySelector('.logo');
let logoblack = document.querySelector('.logo-black');
let slideBg = document.querySelectorAll('.slide-bg-1');
let slideBg2 = document.querySelectorAll('.slide-bg-2');
let circleInner = document.querySelectorAll('.circle');

for (let i = 0; i < slideBg2.length; i++) {
    slideBg2[i].onmouseover = () => {
        slideBg2[i].style.border = '1.5px solid #FF5F79';
        circleInner[i].setAttribute('style', 'border: 1.5px solid #FF5F79; background: #0B0A0A; box-shadow: 0px 0px 100px rgba(255, 54, 93, 0.70)');
    }
    slideBg2[i].onmouseout = () => {
        slideBg2[i].style.border = '1.5px solid transparent';
        circleInner[i].setAttribute('style', 'border: none; background: none; box-shadow: none');
    }
    circleInner[i].onmouseover = () => {
        slideBg2[i].style.border = '1.5px solid #FF5F79';
        circleInner[i].setAttribute('style', 'border: 1.5px solid #FF5F79; background: #0B0A0A; box-shadow: 0px 0px 100px rgba(255, 54, 93, 0.70)');
    }
    circleInner[i].onmouseout = () => {
        slideBg2[i].style.border = '1.5px solid transparent';
        circleInner[i].setAttribute('style', 'border: none; background: none; box-shadow: none');
    }
}

/* header mobile */
if (window.innerWidth < 1000) {
    let headerContainer = document.querySelector('.header-container');
    let openMenu = document.createElement('button');
    openMenu.setAttribute('class', 'open-menu invert');
    let openMenuLine = document.createElement('div');
    openMenuLine.setAttribute('class', 'open-menu-line');
    let openMenuLine2 = document.createElement('div');
    openMenuLine2.setAttribute('class', 'open-menu-line-2');
    let openMenuLine3 = document.createElement('div');
    openMenuLine3.setAttribute('class', 'open-menu-line-3');
    openMenu.append(openMenuLine, openMenuLine2, openMenuLine3);
    let headerDiv = document.createElement('div');
    headerDiv.setAttribute('class', 'header-div');
    header.append(headerDiv);
    let navigation = document.querySelector('.navigation-elements-intro');
    headerDiv.append(navigation);
    let siteStyle = document.querySelector('.site-style-cont');
    headerDiv.append(siteStyle);
    let siteStyleP = document.createElement('p');
    siteStyleP.setAttribute('class', 'change-mode invert');
    let text = document.createTextNode('Change Mode');
    siteStyleP.append(text);
    siteStyle.append(siteStyleP);
    headerContainer.append(openMenu);
    let openMenu2 = document.querySelector('.open-menu');
    let openMenuLine1 = document.querySelector('.open-menu-line');
    let openMenuLine22 = document.querySelector('.open-menu-line-2');
    let openMenuLine33 = document.querySelector('.open-menu-line-3');
    let headerDiv2 = document.querySelector('.header-div');
    let invert = document.querySelectorAll('.invert');
    let body = document.querySelector('body');
    openMenu2.onclick = () => {
        header.classList.add('background');
        if (openMenuLine22.style.display != 'none') {
            openMenuLine22.style.display = 'none';
            openMenuLine1.setAttribute('style', 'transform: translate3d(0px, 6px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)');
            openMenuLine33.setAttribute('style', 'width: 100%; transform: translate3d(0px, -6px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg)');
            headerDiv2.style.height = 'min(100vh - 48px)';
            body.classList.add('hidden');
        }
        else {
            header.classList.remove('background');
            openMenuLine22.style.display = 'block';
            openMenuLine1.setAttribute('style', 'transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)');
            openMenuLine33.setAttribute('style', 'width: 50%; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)');
            headerDiv2.style.height = 0;
            body.classList.remove('hidden');
        }
    }
    backgroundStyle.onclick = () => {
        if (backgroundStyle.style.justifyContent != 'start') {
            backgroundStyle.style.justifyContent = 'start';
            wrapper.style.background = '#fff';
            for (ind of invert) {
                ind.style.filter = 'invert(1)';
            }
            logoWhite.style.display = 'none';
            logoblack.style.display = 'block';
            for (let j = 0; j < slideBg.length; j++) {
                slideBg[j].classList.add('bg');
            }
            divStyle.style.background = 'linear-gradient(180deg, #ECECEC 0%, rgba(243, 243, 243, 0.42) 100%)';
            for (let i = 0; i < fourDivs.length; i++) {
                fourDivs[i].style.background = 'linear-gradient(180deg, #ECECEC 0%, rgba(243, 243, 243, 0.42) 100%)';
            }
            for (let j = 0; j < slideBg2.length; j++) {
                slideBg2[j].classList.add('fill');
            }
            for (let i = 0; i < circleInner.length; i++) {
                slideBg2[i].onmouseover = () => {
                    slideBg2[i].style.border = '1.5px solid #FF5F79';
                    circleInner[i].setAttribute('style', 'border: 1.5px solid #FF5F79; background: #fff; box-shadow: 0px 0px 100px rgba(255, 54, 93, 0.70)')
                }
                slideBg2[i].onmouseout = () => {
                    slideBg2[i].style.border = '1.5px solid transparent';
                    circleInner[i].setAttribute('style', 'border: none; background: none; box-shadow: none')
                }
                circleInner[i].onmouseover = () => {
                    slideBg2[i].style.border = '1.5px solid #FF5F79';
                    circleInner[i].setAttribute('style', 'border: 1.5px solid #FF5F79; background: #fff; box-shadow: 0px 0px 100px rgba(255, 54, 93, 0.70)')
                }
                circleInner[i].onmouseout = () => {
                    slideBg2[i].style.border = '1.5px solid transparent';
                    circleInner[i].setAttribute('style', 'border: none; background: none; box-shadow: none')
                }
            }
        }
        else {
            backgroundStyle.style.justifyContent = 'end';
            wrapper.style.background = '#0B0A0A';
            for (ind of invert) {
                ind.style.filter = 'none';
            }
            logoWhite.style.display = 'block';
            logoblack.style.display = 'none';
            for (let j = 0; j < slideBg.length; j++) {
                slideBg[j].classList.remove('bg');
            }
            divStyle.style.background = 'linear-gradient(180deg, #242121 0%, rgba(30, 27, 27, 0.42) 100%)';
            for (let i = 0; i < fourDivs.length; i++) {
                fourDivs[i].style.background = 'linear-gradient(180deg, #242121 0%, rgba(30, 27, 27, 0.42) 100%)';
            }
            for (let i = 0; i < circleInner.length; i++) {
                slideBg2[i].onmouseover = () => {
                    slideBg2[i].style.border = '1.5px solid #FF5F79';
                    circleInner[i].setAttribute('style', 'border: 1.5px solid #FF5F79; background: #0B0A0A; box-shadow: 0px 0px 100px rgba(255, 54, 93, 0.70)')
                }
                slideBg2[i].onmouseout = () => {
                    slideBg2[i].style.border = '1.5px solid transparent';
                    circleInner[i].setAttribute('style', 'border: none; background: none; box-shadow: none')
                }
                circleInner[i].onmouseover = () => {
                    slideBg2[i].style.border = '1.5px solid #FF5F79';
                    circleInner[i].setAttribute('style', 'border: 1.5px solid #FF5F79; background: #0B0A0A; box-shadow: 0px 0px 100px rgba(255, 54, 93, 0.70)')
                }
                circleInner[i].onmouseout = () => {
                    slideBg2[i].style.border = '1.5px solid transparent';
                    circleInner[i].setAttribute('style', 'border: none; background: none; box-shadow: none')
                }
            }
            for (let j = 0; j < slideBg2.length; j++) {
                slideBg2[j].classList.remove('fill');
            }
        }
    }
    window.onscroll = () => {
        if (scrollY < 50) {
            header.classList.remove('background');
            openMenu2.onclick = () => {
                header.classList.add('background');
                if (openMenuLine22.style.display != 'none') {
                    openMenuLine22.style.display = 'none';
                    openMenuLine1.setAttribute('style', 'transform: translate3d(0px, 6px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)');
                    openMenuLine33.setAttribute('style', 'width: 100%; transform: translate3d(0px, -6px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg)');
                    headerDiv2.style.height = 'min(100vh - 48px)';
                    body.classList.add('hidden');
                }
                else {
                    header.classList.remove('background');
                    openMenuLine22.style.display = 'block';
                    openMenuLine1.setAttribute('style', 'transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)');
                    openMenuLine33.setAttribute('style', 'width: 50%; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)');
                    headerDiv2.style.height = 0;
                    body.classList.remove('hidden');
                }
            }
        }
        if (scrollY > 50) {
            header.classList.add('background');
            openMenu2.onclick = () => {
                if (openMenuLine22.style.display != 'none') {
                    openMenuLine22.style.display = 'none';
                    openMenuLine1.setAttribute('style', 'transform: translate3d(0px, 6px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)');
                    openMenuLine33.setAttribute('style', 'width: 100%; transform: translate3d(0px, -6px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg)');
                    headerDiv2.style.height = 'min(100vh - 48px)';
                    body.classList.add('hidden');
                }
                else {
                    openMenuLine22.style.display = 'block';
                    openMenuLine1.setAttribute('style', 'transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)');
                    openMenuLine33.setAttribute('style', 'width: 50%; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)');
                    headerDiv2.style.height = 0;
                    body.classList.remove('hidden');
                }
            }
        }
    }
}

if (window.innerWidth < 671) {
    let footerBottomCenter = document.querySelector('.footer-bottom-center');
    let privacyTermsCookie = document.querySelector('.privacy-terms-cookie');
    let linksDiv = document.querySelector('.links-div');
    let siteInfo = document.querySelector('.site-info');
    footerBottomCenter.append(privacyTermsCookie);
    linksDiv.append(siteInfo);
}

/* background */
let invert = document.querySelectorAll('.invert')
if (window.innerWidth > 1000) {
    window.onscroll = () => {
        if (scrollY < 50) {
            header.classList.remove('background');
        }
        if (scrollY > 50) {
            header.classList.add('background');
        }
    }
    function backgroundBtn() {
        if (backgroundStyle.style.justifyContent != 'start') {
            backgroundStyle.style.justifyContent = 'start';
            wrapper.style.background = '#fff';
            logoWhite.style.display = 'none';
            logoblack.style.display = 'block';
            divStyle.style.background = 'linear-gradient(180deg, #ECECEC 0%, rgba(243, 243, 243, 0.42) 100%)';
            for (let i = 0; i < fourDivs.length; i++) {
                fourDivs[i].style.background = 'linear-gradient(180deg, #ECECEC 0%, rgba(243, 243, 243, 0.42) 100%)';
            }
            for (ind of invert) {
                ind.style.filter = 'invert(1)';
            }
            for (let j = 0; j < slideBg.length; j++) {
                slideBg[j].classList.add('bg');
            }
            for (let j = 0; j < slideBg2.length; j++) {
                slideBg2[j].classList.add('fill');
            }
            for (let i = 0; i < circleInner.length; i++) {
                slideBg2[i].onmouseover = () => {
                    slideBg2[i].style.border = '1.5px solid #FF5F79';
                    circleInner[i].setAttribute('style', 'border: 1.5px solid #FF5F79; background: #fff; box-shadow: 0px 0px 100px rgba(255, 54, 93, 0.70)')
                }
                slideBg2[i].onmouseout = () => {
                    slideBg2[i].style.border = '1.5px solid transparent';
                    circleInner[i].setAttribute('style', 'border: none; background: none; box-shadow: none')
                }
                circleInner[i].onmouseover = () => {
                    slideBg2[i].style.border = '1.5px solid #FF5F79';
                    circleInner[i].setAttribute('style', 'border: 1.5px solid #FF5F79; background: #fff; box-shadow: 0px 0px 100px rgba(255, 54, 93, 0.70)')
                }
                circleInner[i].onmouseout = () => {
                    slideBg2[i].style.border = '1.5px solid transparent';
                    circleInner[i].setAttribute('style', 'border: none; background: none; box-shadow: none')
                }
            }
        }
        else {
            backgroundStyle.style.justifyContent = 'end';
            wrapper.style.background = '#0B0A0A';
            for (let i = 0; i < circleInner.length; i++) {
                slideBg2[i].onmouseover = () => {
                    slideBg2[i].style.border = '1.5px solid #FF5F79';
                    circleInner[i].setAttribute('style', 'border: 1.5px solid #FF5F79; background: #0B0A0A; box-shadow: 0px 0px 100px rgba(255, 54, 93, 0.70)')
                }
                slideBg2[i].onmouseout = () => {
                    slideBg2[i].style.border = '1.5px solid transparent';
                    circleInner[i].setAttribute('style', 'border: none; background: none; box-shadow: none')
                }
                circleInner[i].onmouseover = () => {
                    slideBg2[i].style.border = '1.5px solid #FF5F79';
                    circleInner[i].setAttribute('style', 'border: 1.5px solid #FF5F79; background: #0B0A0A; box-shadow: 0px 0px 100px rgba(255, 54, 93, 0.70)')
                }
                circleInner[i].onmouseout = () => {
                    slideBg2[i].style.border = '1.5px solid transparent';
                    circleInner[i].setAttribute('style', 'border: none; background: none; box-shadow: none')
                }
            }
            for (let j = 0; j < slideBg.length; j++) {
                slideBg[j].classList.remove('bg');
            }
            for (let j = 0; j < slideBg2.length; j++) {

                slideBg2[j].classList.remove('fill');
            }
            logoblack.style.display = 'none';
            logoWhite.style.display = 'block';
            divStyle.style.background = 'linear-gradient(180deg, #242121 0%, rgba(30, 27, 27, 0.42) 100%)';
            for (let i = 0; i < fourDivs.length; i++) {
                fourDivs[i].style.background = 'linear-gradient(180deg, #242121 0%, rgba(30, 27, 27, 0.42) 100%)';
            }
            for (ind of invert) {
                ind.style.filter = 'none';
            }
        }
    }
}