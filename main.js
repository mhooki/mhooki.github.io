/* 
 *  dynamic toggleable dark mode by jay carlos
 */


var darkMode = window.matchMedia("(prefers-color-scheme: dark)");
var sunImage = document.getElementById('sunImage');
var link = document.getElementsByTagName('link');
var tooltip = document.getElementById('dmTooltip');
var pageIsDark;

if (darkMode.matches) {
    // if system is dark, turn pageIsDark to true and move the sun image down
    pageIsDark = true;
    sunImage.style.marginTop = '0';
    // enable dark.css and disable light.css
    link[1].disabled = false;
    link[2].disabled = true;
    tooltip.innerHTML = 'LIGHT MODE';
} else {
    // if system is light, turn pageIsDark to false and move the sun image up
    pageIsDark = false;
    sunImage.style.marginTop = '-1em';
    // disable dark.css and enable light.css
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
 *  scroll percentage detection thanks in part to the lovely folks at
 *  stackoverflow ;)
 */
    
    
document.addEventListener('scroll', function () {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

    var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    var adjPercent = percent * 5 - 200;

    getComputedStyle(document.documentElement);

    var pageLabel = document.getElementsByClassName("pageLabel");

    // checks the percentage scrolled and modifies the sidebar text accordingly
    // if (darkMode.matches) checks the css media query and adjusts the colors
    if (percent <= 25) {
        if (pageIsDark == true) {
            pageLabel[0].style.color = 'rgb(135, 135, 190)';
            pageLabel[1].style.color = 'rgb(105, 105, 125)';
            pageLabel[2].style.color = 'rgb(105, 105, 125)';
            pageLabel[3].style.color = 'rgb(105, 105, 125)';
        } else {
            pageLabel[0].style.color = 'rgb(100, 100, 180)';
            pageLabel[1].style.color = 'rgb(120, 120, 140)';
            pageLabel[2].style.color = 'rgb(120, 120, 140)';
            pageLabel[3].style.color = 'rgb(120, 120, 140';
        }

        pageLabel[0].innerHTML = '· // WELCOME';
        pageLabel[1].innerHTML = '// BIONOTE';
        pageLabel[2].innerHTML = '// MGA DOKUMENTO';
        pageLabel[3].innerHTML = '// REPLEKSYON';
    } else if (percent >= 25 && percent <= 45) {
        if (pageIsDark == true) {
            pageLabel[0].style.color = 'rgb(105, 105, 125)';
            pageLabel[1].style.color = 'rgb(135, 135, 190)';
            pageLabel[2].style.color = 'rgb(105, 105, 125)';
            pageLabel[3].style.color = 'rgb(105, 105, 125)';
        } else {
            pageLabel[0].style.color = 'rgb(120, 120, 140)';
            pageLabel[1].style.color = 'rgb(100, 100, 180)';
            pageLabel[2].style.color = 'rgb(120, 120, 140)';
            pageLabel[3].style.color = 'rgb(120, 120, 140)';   
        }

        pageLabel[0].innerHTML = '// WELCOME';
        pageLabel[1].innerHTML = '· // BIONOTE';
        pageLabel[2].innerHTML = '// MGA DOKUMENTO';
        pageLabel[3].innerHTML = '// REPLEKSYON';
    } else if (percent >= 45 && percent <= 75) {
        if (pageIsDark == true) {
            pageLabel[0].style.color = 'rgb(105, 105, 125)';
            pageLabel[1].style.color = 'rgb(105, 105, 125)';
            pageLabel[2].style.color = 'rgb(135, 135, 190)';
            pageLabel[3].style.color = 'rgb(105, 105, 125)';
        } else {
            pageLabel[0].style.color = 'rgb(120, 120, 140)';
            pageLabel[1].style.color = 'rgb(120, 120, 140)';
            pageLabel[2].style.color = 'rgb(100, 100, 180)';
            pageLabel[3].style.color = 'rgb(120, 120, 140)';   
        }

        pageLabel[0].innerHTML = '// WELCOME';
        pageLabel[1].innerHTML = '// BIONOTE';
        pageLabel[2].innerHTML = '· // MGA DOKUMENTO';
        pageLabel[3].innerHTML = '// REPLEKSYON';
    } else {
        if (pageIsDark == true) {
            pageLabel[0].style.color = 'rgb(105, 105, 125)';
            pageLabel[1].style.color = 'rgb(105, 105, 125)';
            pageLabel[2].style.color = 'rgb(105, 105, 125)';
            pageLabel[3].style.color = 'rgb(135, 135, 190)';
        } else {
            pageLabel[0].style.color = 'rgb(120, 120, 140)';
            pageLabel[1].style.color = 'rgb(120, 120, 140)';
            pageLabel[2].style.color = 'rgb(120, 120, 140)';
            pageLabel[3].style.color = 'rgb(100, 100, 180)';
        }
        
        pageLabel[0].innerHTML = '// WELCOME';
        pageLabel[1].innerHTML = '// BIONOTE';
        pageLabel[2].innerHTML = '// MGA DOKUMENTO';
        pageLabel[3].innerHTML = '· // REPLEKSYON';
    }

    document.getElementById('sidebarContainer').style.marginBottom = adjPercent + 'px';
});

document.addEventListener('scroll', function () {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

    var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    var image1 = document.getElementById('image1');

    if (percent >= 25 && percent <= 45) {
        image1.style.opacity = 1;
        image1.style.bottom = 0;        
    } else if (percent < 25) {
        image1.style.opacity = 0;
        image1.style.bottom = '-5vh';
    } else {
        image1.style.opacity = 0;
        image1.style.bottom = '5vh';
    }

    console.log('scroll percent: ' + percent);
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
