"use strict";

$(document).ready(() => {

    $(window).on('scroll', () => {
        if($(window).scrollTop()){
            $('nav').addClass('black');
        }
        else{
            $('nav').removeClass('black');
        }
    })



});// Ready