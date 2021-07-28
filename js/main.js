headerBurgerInit();
footerMobileInit();
stickyNav();
headerNavInit();
hoversInit();
sendHelp();
portfolioInit();
changeServicesList();
updateQuestions();
nichesInit();
function nichesInit() {
    const nichesItems = document.querySelectorAll('.niches__list-img_bg'),
          nichesActive = document.querySelectorAll('.niches__img');
    nichesItems.forEach( (item,i) => {
        item.addEventListener('mouseover', function () {
            updateImg(i);
        })
    } )
    function updateImg(i) {
        for(let i = 0; i < nichesActive.length; i++) {
            nichesActive[i].classList.remove('niches__img-active');
        }
        nichesActive[i].classList.add('niches__img-active');
    }
}
function stickyNav () {
    const btnUp = document.querySelector('.up__btn');
    btnUp.addEventListener('click', function () {
        window.scrollTo(0,0);
    })
    window.addEventListener('scroll', function () {
        checkBtn ();
    });
    function checkBtn () {
        if (window.pageYOffset >= 200) {
            btnUp.style.display = 'flex';
        }
        else {
            btnUp.style.display = 'none';
        }
    };
}
function footerMobileInit () {
    const btnsMenu = document.querySelectorAll('.footer__nav-close'),
          navs = document.querySelectorAll('.footer__nav-wrap');
    btnsMenu.forEach((btn,i) => {
        btn.addEventListener('click', function () {
            btn.classList.toggle('footer__nav-close-active');
            navs[i].classList.toggle('footer__nav-wrap-active')
        })
    })

}
function headerBurgerInit () {
    if (window.matchMedia("(max-width:991px)").matches) {
        burgerInit()
    }
    function burgerInit () {
        const burgerBtn = document.querySelector('.header__burger-btn'),
              burgerWrapper = document.querySelector('.header__burger-wrapper'),
              header = document.querySelector('.header'),
              burgerBg = document.querySelector('.header__burger_bg');
        burgerBtn.addEventListener('click', function () {
            burgerWrapper.classList.toggle('header__burger-wrapper-active');
            header.classList.toggle('header__burger-active');
            burgerBg.classList.toggle('header__burger_bg-active');
        })
    } 
}
function updateQuestions () {
    let qstnBtnsWrap = document.querySelectorAll('.questions__list-btn_wrap'),
        qstnTabs = document.querySelectorAll('.questions__list-item '),
        qstnDesc = document.querySelectorAll('.questions__list-desc_wrap'),
        qstnBtns = document.querySelectorAll('.questions__list-btn');
    qstnBtnsWrap.forEach( (tab,i) => {
        tab.addEventListener('click',function () {
            updateTab(i);
        })
    })
        
    function updateTab (i) {
        qstnTabs[i].classList.toggle('questions__list-item-active');
        qstnDesc[i].classList.toggle('questions__list-desc_wrap-active');
        qstnBtns[i].classList.toggle('questions__list-btn-active');
    }
}
function changeServicesList () {
    const srvcTabs = document.querySelectorAll('.services_tabs__btn'),
        srvcLists = document.querySelectorAll('.services__list');
    srvcTabs.forEach((tab,i) => {
        tab.addEventListener('click', function () {
            let type = tab.dataset.service;
            updateList(type);
            updateBtn(i);
        })
    })
    function updateBtn (i) {
        for (let i = 0; i < srvcTabs.length; i++) {
            srvcTabs[i].classList.remove('services_tabs__btn-active');
        }
        srvcTabs[i].classList.add('services_tabs__btn-active');
    }
    function updateList (type) {
        for (let i = 0; i < srvcLists.length; i++) {
            srvcLists[i].style.display = 'none';
            if (srvcLists[i].dataset.type == type) {
                srvcLists[i].style.display = 'flex';
           
            }
        }

    }
}
function sendHelp () {
    const form = document.querySelector('.offer__info-form'),
        successWrap = document.querySelector('.offer__form__success'),
        successBtn = document.querySelector('.offer__form__success-btn'),
        offerBtn = document.querySelector('.offer__sub');
    form.addEventListener('submit', function (e) {
        sendHelpMail(e);
    })
    function sendHelpMail(e) {
        e.preventDefault();
        successWrap.classList.toggle('offer__form__success-active')
        offerBtn.style.display = 'none';
        successBtn.addEventListener('click', () => {
            successWrap.classList.toggle('offer__form__success-active')
            offerBtn.style.display = 'block';
        })
    }
}
function hoversInit () {
    // hover phone 
    const phone = document.querySelector('.tasks_strat__img'),
        phoneWrap = document.querySelector('.tasks_strat__number'),
        phoneNumber = document.querySelector('.tasks_strat__phone');
    phoneWrap.addEventListener('mouseover', () => {
        phone.src = "img/tasks/phone-active.svg";
        phoneNumber.style.color = '#EB6A48';
    })
    phoneWrap.addEventListener('mouseout', () => {
        phone.src = "img/tasks/phone.svg";
        phoneNumber.style.color = '';
    })
    // hover phone end 

    // hover portfolio 
    const portfolioLink = document.querySelector('.portfolio__link');
    portfolioLink.addEventListener('mouseover',() => {
        let linkText = document.querySelector(`.portfolio__link span`),
            arrow = document.querySelector('.portfolio__link-arrow');
        arrow.src = 'img/portfolio/arrow-active.svg';
        linkText.style.color = '#EB6A48';
    })
    portfolioLink.addEventListener('mouseout',() => {
        let linkText = document.querySelector(`.portfolio__link span`),
            arrow = document.querySelector('.portfolio__link-arrow');
            console.log(linkText)
        arrow.src = 'img/portfolio/arrow.svg';
        linkText.style.color = '';
    })
    // hover portfolio end 
}
function headerNavInit () {
    const navItem = document.querySelectorAll('.header__nav-item-sub'),
        wraps = document.querySelectorAll('.header-sub__content'),
        wrapSub = document.querySelector('.header-sub__wrap'),
        links = document.querySelectorAll('.header__nav-link');
    let link;
    wraps.forEach((wrap, i) => {
        wrap.addEventListener('mouseover', function (e) {
            wrapSub.addEventListener('mouseleave', function (e) {
                showSubMenu1(link, wrap);
            })
            wrap.addEventListener('mousemove', function (e) {
                wrapTarget = e.target;
                showSubMenu(e, i, wrapTarget)

            })
        })
    })
    navItem.forEach((item, i) => {
        item.addEventListener('mouseover', function (e) {
            links[i].style.paddingBottom = '40px';
            link = links[i];
            itemTarget = e.target;
            item.addEventListener('mouseout', function (e) {
                if (e.relatedTarget != wrapSub) {
                    showSubMenu1();
                }
            })
            showSubMenu1()
            showSubMenu(e, i);
        });

    })
    function showSubMenu1(i, wrap) {
        for (let i = 0; i < wraps.length; i++) {
            wraps[i].style.display = 'none';

        }
        wrapSub.style.display = 'none';
    }
    function showSubMenu(e, i, wp) {

        if (e.target != wp) {
            wrapSub.style.display = 'block';
            wraps[i].style.display = 'flex';
        }
    }
}
function portfolioInit () {
    const btns = document.querySelectorAll('.portfolio__btn'),
        portfolioItem = document.querySelectorAll('.portfolio__work'),
        portfolioImg = document.querySelectorAll('.portfolio__img'),
        portfolioDesc = document.querySelectorAll('.portfolio__desc');
    btns.forEach((btn, i) => {
        btn.addEventListener('click', function (e) {
            portfolioOpen(i);
        })
    })
    function portfolioOpen(i) {
        if (i != 3) {
            btns[i].classList.toggle('portfolio__btn-active');
            portfolioItem[i].classList.toggle('portfolio__work-active');
        }
        else {
            btns[i].classList.toggle('portfolio__btn-active');
            portfolioItem[i].classList.toggle('portfolio__work-active');
            let cntmkngList = document.querySelector('.portfolio_cm__list');
            if (cntmkngList.classList.contains('portfolio_cm__list-none')) {
                cntmkngList.classList.remove('portfolio_cm__list-none');
            } else {
                setTimeout(() => {
                    cntmkngList.classList.add('portfolio_cm__list-none');
                }, 800)
            }
        }

    }
}
