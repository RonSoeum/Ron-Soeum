"use strict";

$(document).ready(() => {

    // const classToggle = () =>
    //     $('.nav-items').classList.toggle('nav-toggle-show');

    $('.nav-link-toggle').click(() => {
        $('.nav-items').toggleClass('nav-toggle-show');
        console.log($('.nav-items'));
    });

    // $(window).on('scroll', () => {
    //     if($(window).scrollTop()){
    //         $('navbar').addClass('black');
    //     }
    //     else{
    //         $('navbar').removeClass('black');
    //     }
    // })



});// Ready