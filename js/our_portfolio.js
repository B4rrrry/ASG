portfolioTabs();
function portfolioTabs () {
    const tabs = document.querySelectorAll('.our_portfolio__tabs-btn'),
          portfolioItems = document.querySelectorAll('.our_portfolio__item');
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            let type = tab.dataset.type;
            for (let i = 0; i < portfolioItems.length; i++) {
                portfolioItems[i].style.display = 'none';
                if (portfolioItems[i].dataset.type == type) {
                    portfolioItems[i].style.display = 'block';
                }
            }
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('our_portfolio__tabs-btn-active')
                if (tabs[i].dataset.type == type) {
                    tabs[i].classList.add('our_portfolio__tabs-btn-active')
                }
            }
        })
    })
}