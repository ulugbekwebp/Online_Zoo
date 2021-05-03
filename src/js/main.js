var panda = document.querySelector(".hero__video-btn");
var panda_video = document.querySelector(".hero__panda-video");
var panda_img = document.querySelector(".hero__img");


panda.addEventListener("click", function(){
  panda_video.classList.toggle('hero__panda-video-active');
  panda_img.classList.toggle("hero__img-active");
})