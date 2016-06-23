// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
    var price = checkPrices();

    if (isNaN(price)) {
        document.getElementById("priceInput").innerHTML = price.toString();
    } else {
        document.getElementById("priceInput").innerHTML = "$" + price.toString();
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




function checkPrices() {
    var petNum = document.getElementById("petValue").value;
    var visitNum = document.getElementById("visitValue").value;
    var visitTypeNum = document.getElementById("visitTypeValue").value;
    var totalPrice = 0;
    var basePrice = 0;
    var additionalPetPrice = 0;
    var discount = 0;

    if (visitTypeNum == 1) {
        basePrice = 20;
    } else if (visitTypeNum == 2) {
        basePrice = 14;
    } else {
        basePrice = 30;
    }

    if (petNum == 5) {
        return "Thats A Lot Of Pets! Please Contact Us!";
    } else if (visitNum == 20) {
        return "Thats A Lot Of Visits! Please Contact Us!";
    } else {
        if (petNum > 1) {
            if (visitNum > 10 && visitNum < 20) {
                // 10% OFf
                discount = (basePrice * visitNum) * 0.10;
                additionalPetPrice = (petNum - 1) * 10;
                totalPrice = ((basePrice + additionalPetPrice) * visitNum) - discount;
                return totalPrice;

            } else {
                additionalPetPrice = (petNum - 1) * 10;
                totalPrice = ((basePrice + additionalPetPrice) * visitNum);
                return totalPrice;
            }
        } else {
            if (visitNum >= 10 && visitNum < 20) {
                // 10% OFf
                discount = (basePrice * visitNum) * 0.10;
                totalPrice = (basePrice * visitNum) - discount;
                return totalPrice;

            } else {
                totalPrice = basePrice * visitNum;
                return totalPrice;
            }
        }
    }

    return false;
};


(function ($) {
    "use strict"; // Start of use strict

    $(window).load(function () {
        setTimeout(function () {
            $(".se-pre-con").fadeOut(1500);
        }, 0);
    });


    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict
