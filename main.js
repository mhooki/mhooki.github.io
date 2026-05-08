/* 
 *  dynamic toggleable dark mode by jay carlos
 *  pink theme adaptation
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
    // pink active color:   rgb(255, 105, 180)  — hot pink
    // pink inactive dark:  rgb(180, 100, 130)  — muted rose (dark mode)
    // pink inactive light: rgb(200, 130, 155)  — muted pink (light mode)

    // Scroll breakpoints divided evenly across 7 sections (each ~14.28%)
    // Sections: WELCOME, ARTICLE, ABOUT ME, REFLECTION, PRELIM, MIDTERM, FINALS

    if (percent <= 14) {
        if (pageIsDark == true) {
            pageLabel[0].style.color = 'rgb(255, 105, 180)';
            pageLabel[1].style.color = 'rgb(180, 100, 130)';
            pageLabel[2].style.color = 'rgb(180, 100, 130)';
            pageLabel[3].style.color = 'rgb(180, 100, 130)';
            pageLabel[4].style.color = 'rgb(180, 100, 130)';
            pageLabel[5].style.color = 'rgb(180, 100, 130)';
            pageLabel[6].style.color = 'rgb(180, 100, 130)';
        } else {
            pageLabel[0].style.color = 'rgb(220, 60, 120)';
            pageLabel[1].style.color = 'rgb(200, 130, 155)';
            pageLabel[2].style.color = 'rgb(200, 130, 155)';
            pageLabel[3].style.color = 'rgb(200, 130, 155)';
            pageLabel[4].style.color = 'rgb(200, 130, 155)';
            pageLabel[5].style.color = 'rgb(200, 130, 155)';
            pageLabel[6].style.color = 'rgb(200, 130, 155)';
        }
        pageLabel[0].innerHTML = '· // WELCOME';
        pageLabel[1].innerHTML = '// ARTICLE';
        pageLabel[2].innerHTML = '// ABOUT ME';
        pageLabel[3].innerHTML = '// REFLECTION';
        pageLabel[4].innerHTML = '// PRELIM';
        pageLabel[5].innerHTML = '// MIDTERM';
        pageLabel[6].innerHTML = '// FINALS';

    } else if (percent > 14 && percent <= 28) {
        if (pageIsDark == true) {
            pageLabel[0].style.color = 'rgb(180, 100, 130)';
            pageLabel[1].style.color = 'rgb(255, 105, 180)';
            pageLabel[2].style.color = 'rgb(180, 100, 130)';
            pageLabel[3].style.color = 'rgb(180, 100, 130)';
            pageLabel[4].style.color = 'rgb(180, 100, 130)';
            pageLabel[5].style.color = 'rgb(180, 100, 130)';
            pageLabel[6].style.color = 'rgb(180, 100, 130)';
        } else {
            pageLabel[0].style.color = 'rgb(200, 130, 155)';
            pageLabel[1].style.color = 'rgb(220, 60, 120)';
            pageLabel[2].style.color = 'rgb(200, 130, 155)';
            pageLabel[3].style.color = 'rgb(200, 130, 155)';
            pageLabel[4].style.color = 'rgb(200, 130, 155)';
            pageLabel[5].style.color = 'rgb(200, 130, 155)';
            pageLabel[6].style.color = 'rgb(200, 130, 155)';
        }
        pageLabel[0].innerHTML = '// WELCOME';
        pageLabel[1].innerHTML = '· // ARTICLE';
        pageLabel[2].innerHTML = '// ABOUT ME';
        pageLabel[3].innerHTML = '// REFLECTION';
        pageLabel[4].innerHTML = '// PRELIM';
        pageLabel[5].innerHTML = '// MIDTERM';
        pageLabel[6].innerHTML = '// FINALS';

    } else if (percent > 28 && percent <= 42) {
        if (pageIsDark == true) {
            pageLabel[0].style.color = 'rgb(180, 100, 130)';
            pageLabel[1].style.color = 'rgb(180, 100, 130)';
            pageLabel[2].style.color = 'rgb(255, 105, 180)';
            pageLabel[3].style.color = 'rgb(180, 100, 130)';
            pageLabel[4].style.color = 'rgb(180, 100, 130)';
            pageLabel[5].style.color = 'rgb(180, 100, 130)';
            pageLabel[6].style.color = 'rgb(180, 100, 130)';
        } else {
            pageLabel[0].style.color = 'rgb(200, 130, 155)';
            pageLabel[1].style.color = 'rgb(200, 130, 155)';
            pageLabel[2].style.color = 'rgb(220, 60, 120)';
            pageLabel[3].style.color = 'rgb(200, 130, 155)';
            pageLabel[4].style.color = 'rgb(200, 130, 155)';
            pageLabel[5].style.color = 'rgb(200, 130, 155)';
            pageLabel[6].style.color = 'rgb(200, 130, 155)';
        }
        pageLabel[0].innerHTML = '// WELCOME';
        pageLabel[1].innerHTML = '// ARTICLE';
        pageLabel[2].innerHTML = '· // ABOUT ME';
        pageLabel[3].innerHTML = '// REFLECTION';
        pageLabel[4].innerHTML = '// PRELIM';
        pageLabel[5].innerHTML = '// MIDTERM';
        pageLabel[6].innerHTML = '// FINALS';

    } else if (percent > 42 && percent <= 57) {
        if (pageIsDark == true) {
            pageLabel[0].style.color = 'rgb(180, 100, 130)';
            pageLabel[1].style.color = 'rgb(180, 100, 130)';
            pageLabel[2].style.color = 'rgb(180, 100, 130)';
            pageLabel[3].style.color = 'rgb(255, 105, 180)';
            pageLabel[4].style.color = 'rgb(180, 100, 130)';
            pageLabel[5].style.color = 'rgb(180, 100, 130)';
            pageLabel[6].style.color = 'rgb(180, 100, 130)';
        } else {
            pageLabel[0].style.color = 'rgb(200, 130, 155)';
            pageLabel[1].style.color = 'rgb(200, 130, 155)';
            pageLabel[2].style.color = 'rgb(200, 130, 155)';
            pageLabel[3].style.color = 'rgb(220, 60, 120)';
            pageLabel[4].style.color = 'rgb(200, 130, 155)';
            pageLabel[5].style.color = 'rgb(200, 130, 155)';
            pageLabel[6].style.color = 'rgb(200, 130, 155)';
        }
        pageLabel[0].innerHTML = '// WELCOME';
        pageLabel[1].innerHTML = '// ARTICLE';
        pageLabel[2].innerHTML = '// ABOUT ME';
        pageLabel[3].innerHTML = '· // REFLECTION';
        pageLabel[4].innerHTML = '// PRELIM';
        pageLabel[5].innerHTML = '// MIDTERM';
        pageLabel[6].innerHTML = '// FINALS';

    } else if (percent > 57 && percent <= 71) {
        if (pageIsDark == true) {
            pageLabel[0].style.color = 'rgb(180, 100, 130)';
            pageLabel[1].style.color = 'rgb(180, 100, 130)';
            pageLabel[2].style.color = 'rgb(180, 100, 130)';
            pageLabel[3].style.color = 'rgb(180, 100, 130)';
            pageLabel[4].style.color = 'rgb(255, 105, 180)';
            pageLabel[5].style.color = 'rgb(180, 100, 130)';
            pageLabel[6].style.color = 'rgb(180, 100, 130)';
        } else {
            pageLabel[0].style.color = 'rgb(200, 130, 155)';
            pageLabel[1].style.color = 'rgb(200, 130, 155)';
            pageLabel[2].style.color = 'rgb(200, 130, 155)';
            pageLabel[3].style.color = 'rgb(200, 130, 155)';
            pageLabel[4].style.color = 'rgb(220, 60, 120)';
            pageLabel[5].style.color = 'rgb(200, 130, 155)';
            pageLabel[6].style.color = 'rgb(200, 130, 155)';
        }
        pageLabel[0].innerHTML = '// WELCOME';
        pageLabel[1].innerHTML = '// ARTICLE';
        pageLabel[2].innerHTML = '// ABOUT ME';
        pageLabel[3].innerHTML = '// REFLECTION';
        pageLabel[4].innerHTML = '· // PRELIM';
        pageLabel[5].innerHTML = '// MIDTERM';
        pageLabel[6].innerHTML = '// FINALS';

    } else if (percent > 71 && percent <= 85) {
        if (pageIsDark == true) {
            pageLabel[0].style.color = 'rgb(180, 100, 130)';
            pageLabel[1].style.color = 'rgb(180, 100, 130)';
            pageLabel[2].style.color = 'rgb(180, 100, 130)';
            pageLabel[3].style.color = 'rgb(180, 100, 130)';
            pageLabel[4].style.color = 'rgb(180, 100, 130)';
            pageLabel[5].style.color = 'rgb(255, 105, 180)';
            pageLabel[6].style.color = 'rgb(180, 100, 130)';
        } else {
            pageLabel[0].style.color = 'rgb(200, 130, 155)';
            pageLabel[1].style.color = 'rgb(200, 130, 155)';
            pageLabel[2].style.color = 'rgb(200, 130, 155)';
            pageLabel[3].style.color = 'rgb(200, 130, 155)';
            pageLabel[4].style.color = 'rgb(200, 130, 155)';
            pageLabel[5].style.color = 'rgb(220, 60, 120)';
            pageLabel[6].style.color = 'rgb(200, 130, 155)';
        }
        pageLabel[0].innerHTML = '// WELCOME';
        pageLabel[1].innerHTML = '// ARTICLE';
        pageLabel[2].innerHTML = '// ABOUT ME';
        pageLabel[3].innerHTML = '// REFLECTION';
        pageLabel[4].innerHTML = '// PRELIM';
        pageLabel[5].innerHTML = '· // MIDTERM';
        pageLabel[6].innerHTML = '// FINALS';

    } else {
        if (pageIsDark == true) {
            pageLabel[0].style.color = 'rgb(180, 100, 130)';
            pageLabel[1].style.color = 'rgb(180, 100, 130)';
            pageLabel[2].style.color = 'rgb(180, 100, 130)';
            pageLabel[3].style.color = 'rgb(180, 100, 130)';
            pageLabel[4].style.color = 'rgb(180, 100, 130)';
            pageLabel[5].style.color = 'rgb(180, 100, 130)';
            pageLabel[6].style.color = 'rgb(255, 105, 180)';
        } else {
            pageLabel[0].style.color = 'rgb(200, 130, 155)';
            pageLabel[1].style.color = 'rgb(200, 130, 155)';
            pageLabel[2].style.color = 'rgb(200, 130, 155)';
            pageLabel[3].style.color = 'rgb(200, 130, 155)';
            pageLabel[4].style.color = 'rgb(200, 130, 155)';
            pageLabel[5].style.color = 'rgb(200, 130, 155)';
            pageLabel[6].style.color = 'rgb(220, 60, 120)';
        }
        pageLabel[0].innerHTML = '// WELCOME';
        pageLabel[1].innerHTML = '// ARTICLE';
        pageLabel[2].innerHTML = '// ABOUT ME';
        pageLabel[3].innerHTML = '// REFLECTION';
        pageLabel[4].innerHTML = '// PRELIM';
        pageLabel[5].innerHTML = '// MIDTERM';
        pageLabel[6].innerHTML = '· // FINALS';
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
