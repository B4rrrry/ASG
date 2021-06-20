portfolioInit();
headerNavInit();
function headerNavInit() {
    const navItem = document.querySelectorAll('.header__nav-item-sub'),
    wraps = document.querySelectorAll('.header-sub__content'),
    wrapSub = document.querySelector('.header-sub__wrap'),
    links = document.querySelectorAll('.header__nav-link');
    let link,wrap1;
    wraps.forEach( (wrap,i) => {
        wrap.addEventListener('mouseover',function (e) {
            wrapSub.addEventListener('mouseleave',function (e) {
                showSubMenu1(link,wrap);
            })
            wrap.addEventListener('mousemove',function (e) {
                wrapTarget = e.target;
                showSubMenu(e,i,wrapTarget)
               
            })
        })
    } )
    navItem.forEach( (item,i) => {
        item.addEventListener('mouseover',function(e) {
            links[i].style.paddingBottom = '40px';
            link = links[i];
            wrap1 = wraps[i];
            itemTarget = e.target;
            item.addEventListener('mouseout',function(e) {
                if(e.relatedTarget != wrapSub) {
                    showSubMenu1();
                }
            })
            showSubMenu1()
            showSubMenu(e,i);
        });

    } )
    function showSubMenu1 (i,wrap) {
        for (let i = 0; i < wraps.length; i++) {
            wraps[i].style.display = 'none';
            
        }
        wrapSub.style.display = 'none';
    }
    function showSubMenu(e,i,wp) {
       
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
    btns.forEach((btn,i) => {
        btn.addEventListener('click',function (e){
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
                setTimeout(()=>{
                    cntmkngList.classList.add('portfolio_cm__list-none');
                },800)
            }
        }
        
    }
}
