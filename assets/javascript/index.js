/* Javascript */
// document load event
document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  // Utilities Functions
  var selector = function (selector, areAll) {
    var all = document.querySelectorAll(selector);
    var single = document.querySelector(selector);
    return areAll ? all : single;
  };

  // Header
  !(function () {
    var toggleButton = selector('.fas.fa-bars');
    if(!toggleButton) return;
    var nav = selector('header nav');
    var links = nav.querySelectorAll('li');
    toggleButton.addEventListener('click',function() {
      nav.classList.toggle('open');
    });
    links.forEach(function(li){
      if(li.lastElementChild.nodeName === 'UL') {
        li.firstElementChild.addEventListener('click',function(e){
          e.preventDefault();
          this.nextElementSibling.classList.toggle('d-none');
        });
      }
    })



  })();

});




(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
  });
  // Open external links in a popup modal notice
  $(window).on("load", function () {
    $.expr[":"].external = function (a) {
      //var linkHref = a.hostname;
      //var domainHref = location.hostname;

      var linkhn = a.hostname.split(".").reverse();
      var linkHref = linkhn[1] + "." + linkhn[0];

      var domainhn = window.location.hostname.split(".").reverse();
      var domainHref = domainhn[1] + "." + domainhn[0];

      return (
        !a.href.match(/^mailto\:/) &&
        !a.href.match(/^tel\:/) &&
        linkHref !== domainHref
      );
    };

    $("a:external").addClass("ext_link");
    // open a modal
    $("a:external").attr("data-bs-toggle", "modal");
    $("a:external").attr("data-bs-target", "#speedbump");

    $(function () {
      $("a.ext_link").click(function () {
        //go to link on modal close
        var url = $(this).attr("href");
        $("#speedbump .continue-btn").click(function () {
          window.open(url);
          $("#speedbump .continue-btn").off();
        });
        $("#speedbump .close-btn").click(function () {
          $("#speedbump").modal("hide");
          $("#speedbump .continue-btn").off();
        });
        $("#speedbump .close").click(function () {
          $("#speedbump .continue-btn").off();
        });
      });
    });
    $(function () {
      $("a.no-link").click(function () {
        // open a modal
        var url = $(this).attr("href");
        $("a:external").attr("data-toggle", "");
        $("a:external").attr("data-target", "");
        $("a:external").attr("href", url);
      });
    });
  });

if($('.owl-carousel').length) {  
    $('.owl-carousel').owlCarousel({
      items: 1,
      nav: true,
      loop: true,
      autoplay: true
    });
}

})(jQuery);
