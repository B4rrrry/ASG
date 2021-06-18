function portfolioInit () {
    const btns = document.querySelectorAll('.portfolio__btn'),
    portfolioItem = document.querySelectorAll('.portfolio__work'),
    portfolioImg = document.querySelectorAll('.portfolio__img'),
    portfolioDesc = document.querySelectorAll('.portfolio__desc');
    btns.forEach((btn,i) => {
        btn.addEventListener('click',function (e){
            a = portfolioDesc[i];
            console.log(a)
            portfolioOpen(i);
            console.log(portfolioItem[i].clientHeight)
        })
    })
    function portfolioOpen(i) {
        btns[i].classList.toggle('portfolio__btn-active');
        portfolioItem[i].classList.toggle('portfolio__work-active')
    }
}
portfolioInit();