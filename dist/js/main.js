var panda = document.querySelector(".hero__video-btn");
var panda_video = document.querySelector(".hero__panda-video");
var panda_img = document.querySelector(".hero__img");
var header__item_btn_contact_us = document.querySelector(".header__item-btn-contact-us");
var modal__contact_us = document.querySelector(".modal__contact-us");


panda.addEventListener("click", function(){
  panda_video.classList.toggle('hero__panda-video-active');
  panda_img.classList.toggle("hero__img-active");
})

header__item_btn_contact_us.addEventListener("click", function(){
  modal__contact_us.classList.toggle("modal__contact-us-active");
})