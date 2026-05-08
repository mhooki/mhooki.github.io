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

    updateActivePage();
}

/*
 *  page label handling
 */

const pageTitles = [
    "WELCOME",
    "ABOUT ME",
    "ARTICLE",
    "REFLECTION",
    "PRELIM",
    "MIDTERM",
    "FINALS"
];

function resetPageLabels() {
    var pageLabel = document.getElementsByClassName("pageLabel");

    for (let i = 0; i < pageLabel.length; i++) {
        if (pageIsDark == true) {
            pageLabel[i].style.color = 'rgb(255, 170, 210)';
        } else {
            pageLabel[i].style.color = 'rgb(255, 105, 180)';
        }

        pageLabel[i].innerHTML = '// ' + pageTitles[i];
    }
}

function highlightLabel(index) {
    var pageLabel = document.getElementsByClassName("pageLabel");

    resetPageLabels();

    if (pageIsDark == true) {
        pageLabel[index].style.color = 'rgb(255, 200, 230)';
    } else {
        pageLabel[index].style.color = 'rgb(255, 20, 147)';
    }

    pageLabel[index].innerHTML = '· // ' + pageTitles[index];
}

function updateActivePage() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;

    var sections = [
        document.getElementById('page1'),
        document.getElementById('page2'),
        document.getElementById('page3'),
        document.getElementById('page4'),
        document.getElementById('page5'),
        document.getElementById('page6'),
        document.getElementById('page7')
    ];

    let activeIndex = 0;

    sections.forEach((section, index) => {
        if (section) {
            const top = section.offsetTop - (windowHeight / 2);

            if (scrollPosition >= top) {
                activeIndex = index;
            }
        }
    });

    highlightLabel(activeIndex);
}

/*
 *  scroll animations
 */

document.addEventListener('scroll', function () {

    updateActivePage();

    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

    var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    var adjPercent = percent * 8 - 200;

    document.getElementById('sidebarContainer').style.marginBottom = adjPercent + 'px';

    var image1 = document.getElementById('image1');

    if (image1) {
        if (percent >= 5 && percent <= 30) {
            image1.style.opacity = 1;
            image1.style.bottom = 0;
        } else if (percent < 5) {
            image1.style.opacity = 0;
            image1.style.bottom = '-5vh';
        } else {
            image1.style.opacity = 0;
            image1.style.bottom = '5vh';
        }
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

/*
 *  initialize labels
 */

window.onload = function () {
    updateActivePage();
};
