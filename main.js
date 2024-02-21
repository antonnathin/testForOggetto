import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import $ from 'jquery'
window.jQuery = window.$ = $
$(function() {
    $("ul.tabs").on("click", "li:not(.tabs__item_active)", function() {
        $(this)
            .addClass("tabs__item_active")
            .siblings()
            .removeClass("tabs__item_active")
            .closest("div.container")
            .find("div.content__item")
            .removeClass("content__item_active")
            .eq($(this).index())
            .addClass("content__item_active")
            .closest("div.content")
            .removeClass("content_padding7px")
        $(this).index() ==0 ?
            $(this).closest("div.container").find("div.content")
                .addClass("content_padding7px") :
            $(this).closest("div.container").find("div.content")
                .removeClass("content_padding7px")

    });
    $( ".toggle" ).click(function() {
        $(this).siblings( ".toggled-wrapper" ).slideToggle( "fast" );
        $(this).text() == "Свернуть" ?  $(this).text("Показать полностью") :  $(this).text("Свернуть");
    });
    $(".header__button-wrapper").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#footer").offset().top
        }, 2000);
    });
});
// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
//
// setupCounter(document.querySelector('#counter'))
