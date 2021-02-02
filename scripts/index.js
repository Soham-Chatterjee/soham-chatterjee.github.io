$(document).ready(function () {
    $(this).scrollTop(0);
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }
        else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    $(".menu-btn").click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["a student", "a programmer", "an ethical hacker", "a learning web developer"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["a student", "a programmer", "an ethical hacker", "a learning web developer"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});


let userAgentString = navigator.userAgent;
const loaderContainer = document.querySelector('.loader-container');
var refresh = 0;



window.addEventListener('load', () => {
    loaderContainer.classList.add('hide');
});

console.log(refresh, "initial")

function zoom(id) {
    var modal = document.getElementById("modal");

    var img = document.getElementById(id);
    var modalImg = document.getElementById("img");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    };
};


let chromeAgent = userAgentString.indexOf("Chrome") > -1;
let IExplorerAgent = userAgentString.indexOf("MSIE") > -1 ||  
                     userAgentString.indexOf("rv:") > -1; 
let firefoxAgent = userAgentString.indexOf("Firefox") > -1;
if ((firefoxAgent) && (IExplorerAgent)){IExplorerAgent = false;}
let safariAgent = userAgentString.indexOf("Safari") > -1;
if ((chromeAgent) && (safariAgent)){safariAgent = false;}
let operaAgent = userAgentString.indexOf("OP") > -1;
if ((chromeAgent) && (operaAgent)) {chromeAgent = false;}




document.getElementById('iframe_submit').onload = function () {
    if (firefoxAgent){
        refresh ++;
        if (refresh > 1) {
            window.open('./side/thankyou.html', '_self');
        }
    } 
    else{
        refresh++;
        if (refresh == 1) {
            window.open('./side/thankyou.html', '_self');
        }
    }
}
