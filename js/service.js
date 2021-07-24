chooseService();
function chooseService() {
  const btn = document.querySelector('.package__btn-mob'),
    modalClose = document.querySelector('.package__modal-close'),
    packageForm = document.querySelector('.package__modal-form'),
    modalWrapper = document.querySelector('.package__modal-wrapper'),
    packageModal = document.querySelector('.package__modal'),
    packageBuy = document.querySelectorAll('.package__buy');
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
  function modalOpen() {
    modalWrapper.classList.toggle('package__modal-wrapper-active');
    setTimeout(() => {
      packageModal.classList.toggle('package__modal-active');
    }, 100);
  }
  btn.addEventListener('click', function () {
    modalOpen()
  })  
  packageBuy.forEach(item => {
    item.addEventListener('click', function () {
      modalOpen()
    })
  })
  modalClose.addEventListener('click', function () {
    modalWrapper.classList.remove('package__modal-wrapper-active');
    setTimeout(() => {
      packageModal.classList.remove('package__modal-active');
    }, 100);
  })
}