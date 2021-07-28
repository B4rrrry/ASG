chooseService();
function chooseService() {
  const btn = document.querySelector('.package__btn-mob'),
    modalClose = document.querySelector('.package__modal-close'),
    packageForm = document.querySelector('.package__modal-form'),
    modalWrapper = document.querySelector('.package__modal-wrapper'),
    packageModal = document.querySelector('.package__modal'),
    packageBuy = document.querySelectorAll('.package__buy'),
    tabsItems = document.querySelectorAll('.package__tabs-item'),
    serviceType = document.querySelectorAll('.package__modal-type'),
    tabsBtns = document.querySelectorAll('.package__tabs-btn');
    tablesMob = document.querySelectorAll('.package__table-mob');
  tabsItems.forEach((tab, i) => {
    tab.addEventListener('click', function () {
      updateTablesMob(i)
    })
  })
  function updateTablesMob(i) {
    for (let i = 0; i < tablesMob.length; i++) {
      tablesMob[i].style.display = 'none';
    }
    for (let i = 0; i < tabsItems.length; i++) {
      tabsBtns[i].classList.remove('package__tabs-btn-active');
    }
    tabsBtns[i].classList.add('package__tabs-btn-active');
    tablesMob[i].style.display = 'block';
  }
  packageForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const success = document.querySelector('.offer__form__success-package'),
      btnThx = document.querySelector('.btn__package-thx');
    btnThx.addEventListener('click', function () {
      success.classList.remove('offer__form__success-active')
      modalWrapper.classList.remove('package__modal-wrapper-active');
      setTimeout(() => {
        packageModal.classList.remove('package__modal-active');
      }, 100);
    })
    console.log(success)
    success.classList.add('offer__form__success-active')
  })
  function modalOpen(type) {
    modalWrapper.classList.toggle('package__modal-wrapper-active');

    setTimeout(() => {
      packageModal.classList.toggle('package__modal-active');
      for (let i = 0; i < serviceType.length; i++) {
        serviceType[i].textContent = serviceNameMob[0].innerText
      }
    }, 100);
  }
  btn.addEventListener('click', function () {
    serviceNameMob = document.querySelectorAll('.package__tabs-btn-active'),
    modalOpen()
    for (let i = 0; i < serviceType.length; i++) {
      serviceType[i].textContent = serviceNameMob[0].innerText;
      console.log(serviceNameMob[0].innerText)
    }
  })
  packageBuy.forEach((item, i) => {
    console.log(i)
    item.addEventListener('click', function () {
      modalOpen(i)
    })
  })
  modalClose.addEventListener('click', function () {
    modalWrapper.classList.remove('package__modal-wrapper-active');
    setTimeout(() => {
      packageModal.classList.remove('package__modal-active');
    }, 100);
  })
}