// $(window).on("load",() => {
//
//     //Preloader
//     setTimeout(()=>{
//         $('.loader-wrap').fadeOut();
//     },300);
//
// });
//
//
// $(document).ready(() => {
//     $('elem').click(e => {
//         const $th = $(e.delegateTarget)
//     });
//
//     //animation
//     (function ($) {
//         $.fn.animated = function (inEffect) {
//             $(this).each(function () {
//                 let ths = $(this);
//                 ths.css("opacity", "0").addClass("animated").waypoint(function (dir) {
//                     if (dir === "down") {
//                         ths.addClass(inEffect).css("opacity", "1");
//                     }
//                 }, {
//                     offset: "90%"
//                 });
//
//             });
//         };
//     })($);
//
//     //deleted animation for mobile
//     const isMobile = {
//         Android: function () {
//             return navigator.userAgent.match(/Android/i) ? true : false;
//         },
//         BlackBerry: function () {
//             return navigator.userAgent.match(/BlackBerry/i) ? true : false;
//         },
//         iOS: function () {
//             return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
//         },
//         Windows: function () {
//             return navigator.userAgent.match(/IEMobile/i) ? true : false;
//         },
//         any: function () {
//             return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
//         }
//     };
//
//     function setDelay(items, animation) {
//         items.animated(animation);
//         items.each(function (index) {
//             $(this).css({
//                 'animation-delay': 0.2 + (index * 0.1) + 's'
//             });
//         });
//     }
//
//     if (!isMobile.any()) {
//
//         $('.elem').animated('slide_top');
//
//         setDelay($('ul li'), 'slide_top');
//
//         //for ios
//         $('body').addClass('no-touch');
//     }
//
// });