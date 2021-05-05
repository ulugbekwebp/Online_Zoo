var panda = document.querySelector(".hero__video-btn");
var panda_video = document.querySelector(".hero__panda-video");
var panda_img = document.querySelector(".hero__img");
var header__item_btn_contact_us = document.querySelector(".header__item-btn-contact-us");
var modal__contact_us = document.querySelector(".modal__contact-us");
var modal__body_label = document.querySelector(".modal__body-label");
var modal__body_label_second = document.querySelector(".modal__body-label-second");
var modal__body_item = document.querySelector(".modal__body-item-first");
var modal__body_item_second = document.querySelector(".modal__body-item-second");
var header__authorization_item_btn = document.querySelector(".header__authorization-item-btn");
var modal__login = document.querySelector(".modal__login");

panda.addEventListener("click", function(){
  panda_video.classList.toggle('hero__panda-video-active');
  panda_img.classList.toggle("hero__img-active");
})

header__item_btn_contact_us.addEventListener("click", function(){
  modal__contact_us.classList.toggle("modal__contact-us-active");
  modal__login.classList.remove("modal__login-active");
})

modal__body_label.addEventListener("click", function(){
  modal__body_item.classList.add("modal__body-item-active");
  modal__body_item_second.classList.remove("modal__body-item-active");
  
})
modal__body_label_second.addEventListener("click", function(){
  modal__body_item.classList.remove("modal__body-item-active");
  modal__body_item_second.classList.add("modal__body-item-active");
})

header__authorization_item_btn.addEventListener("click", function(){
  modal__login.classList.toggle("modal__login-active");
  modal__contact_us.classList.remove("modal__contact-us-active");
})

