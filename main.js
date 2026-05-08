/* 
 *  dynamic toggleable dark mode
 */

var darkMode = window.matchMedia("(prefers-color-scheme: dark)");
var sunImage = document.getElementById('sunImage');
var link = document.getElementsByTagName('link');
var tooltip = document.getElementById('dmTooltip');
var pageIsDark;

if (darkMode.matches) {
    pageIsDark = true;
    sunImage.style.marginTop = '0';

    link[1].disabled = false;
    link[2].disabled = true;

    tooltip.innerHTML = 'LIGHT MODE';
} else {
    pageIsDark = false;
    sunImage.style.marginTop = '-1em';

    link[1].disabled = true;
    link[2].disabled = false;

    tooltip.innerHTML = 'DARK MODE';
}

function darkModeToggle() {
    if (pageIsDark == true) {
        document.getElementsByTagName('link')[1].disabled = true;
        document.getElementsByTagName('link')[2].disabled = false;

        pageIsDark = false;

        document.getElementById('sunImage').style.marginTop = '-1em';
        document.getElementById('dmTooltip').innerHTML = 'DARK MODE';
    } else {
        document.getElementsByTagName('link')[1].disabled = false;
        document.getElementsByTagName('link')[2].disabled = true;

        pageIsDark = true;

        document.getElementById('sunImage').style.marginTop = '0';
        document.getElementById('dmTooltip').innerHTML = 'LIGHT MODE';
    }
}


/*
 *  sidebar active page labels
 */

document.addEventListener('scroll', function () {

    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

    var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;

    var pageLabel = document.getElementsByClassName("pageLabel");

    var activeColor = pageIsDark
        ? 'rgb(255, 140, 200)'
        : 'rgb(255, 105, 180)';

    var inactiveColor = pageIsDark
        ? 'rgb(105, 105, 125)'
        : 'rgb(120, 120, 140)';

    for (let i = 0; i < pageLabel.length; i++) {
        pageLabel[i].style.color = inactiveColor;

    } else if (percent <= 30) {
        pageLabel[1].style.color = activeColor;

    } else if (percent <= 45) {
        pageLabel[2].style.color = activeColor;

    } else if (percent <= 60) {
        pageLabel[3].style.color = activeColor;

    } else if (percent <= 80) {
        pageLabel[4].style.color = activeColor;

    } else {
        pageLabel[5].style.color = activeColor;
    }
     } else if (percent <= 30) {
        pageLabel[1].style.color = activeColor;

    } else if (percent <= 45) {
        pageLabel[2].style.color = activeColor;
    }
});


/*
 *  page reveal animation
 */

document.addEventListener('scroll', function () {

    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

    var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;

    var cards = document.getElementsByClassName('subContainer');

    for (let i = 0; i < cards.length; i++) {

        if (percent > 10) {
            cards[i].style.opacity = 1;
            cards[i].style.transform = 'translateY(0)';
        } else {
            cards[i].style.opacity = 0;
            cards[i].style.transform = 'translateY(20px)';
        }
    }
});


/*
 *  mobile navbar
 */

var sidebarVisible = false;
var sidebar = document.getElementById('sidebar');
var close = document.getElementById('close');

var desktopWidth = window.matchMedia("(min-width: 601px)");

desktopWidth.addEventListener('change', function () {

    if (desktopWidth.matches) {

        sidebarVisible = false;
        sidebar.style.opacity = 1;

    } else {

        sidebar.style.opacity = 0;
    }
});

function sidebarToggle() {

    if (desktopWidth.matches == false) {

        if (sidebarVisible == false) {

            sidebarVisible = true;

            sidebar.style.opacity = 1;
            sidebar.style.zIndex = 1;

            close.style.marginTop = 0;

        } else {

            sidebarVisible = false;

            sidebar.style.opacity = 0;
            sidebar.style.zIndex = -1;

            close.style.marginTop = '-2em';
        }
    }
}


/*
 *  smooth hover glow for sub containers
 */

var subContainers = document.querySelectorAll('.subContainer');

subContainers.forEach(function(card) {

    card.addEventListener('mouseenter', function() {

        card.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', function() {

        card.style.transform = 'translateY(0)';
    });
});
