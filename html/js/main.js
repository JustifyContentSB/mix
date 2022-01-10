"use strict";

$(document).ready(function () {
  // Your code here
  if ($(window).width() < 1024) {
    bestTracksSwiper();
    bestPlaylistSwiper();
    bestArtistSwiper();
  }
}); // Your functions here

function bestTracksSwiper() {
  var swiper = new Swiper('.best__tracks-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 12
  });
}

function bestPlaylistSwiper() {
  var swiper = new Swiper('.best__playlist-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 12
  });
}

function bestArtistSwiper() {
  var swiper = new Swiper('.best__artist-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 12
  });
}