/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 71)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Floating label headings for the contact form
  $(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

  //-- carousel 

  $(".carousel").carousel({
    pause: "null"
  })

  // affiche date
  function getToday() {
    var maintenant = new Date();
    var day = maintenant.getDay();
    var daylist = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    var jour = maintenant.getDate();
    var mois = maintenant.getMonth() + 1;
    var an = maintenant.getFullYear();
    var date = `${daylist[day]} ${jour}/${mois}/${an}`;
    console.log(date);
    return date;
  }
  $("#today").html(getToday());


  //Jeu nombre magique

  const rand = Math.floor(Math.random() * 100);
  let nb2 = $("#nb1");
  let nbSub = $(".nbButton");
  let imgOk = $("#imgOk");
  let imgNok = $("#imgNok");
  let essai = 10;
  let bravo = $("#bravo");

  nbSub.on("click", () => {
    let nbr = nb2.val();
    essai--;
    if (nbr == rand) {
      bravo.html("bravo");
      imgOk.fadeIn(3000);
      nbSub.off("click");
    } else if (essai > 0) {
      if (essai == 1) {
        alert("Le nombre recherch?? est inf??rieur ?? " + nbr + " veuillez ressayer, il vous reste un seul essai.");
      } else {
        if (nbr > rand) {
          alert("Le nombre recherch?? est inf??rieur ?? " + nbr + " veuillez ressayer, il vous reste " + essai +" essais.");
        } else {
          alert("Le nombre recherch?? est sup??rieur ?? " + nbr + " veuillez ressayer, il vous reste " + essai +" essais.");
        }
      }
    } else {
      bravo.html("t'es nul!");
      imgNok.fadeIn(3000);
      nbSub.off("click");
    }
  })



})(jQuery); // End of use strict
