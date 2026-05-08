/* 
 * Pink Portfolio Navigation Script
 */

var pageLabels = document.getElementsByClassName("pageLabel");

document.addEventListener('scroll', function () {

    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

    var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;

    // Reset all labels first
    for (let i = 0; i < pageLabels.length; i++) {
        pageLabels[i].style.color = 'rgb(180, 100, 140)';
    }

    // Highlight active section
    if (percent <= 15) {
        pageLabels[0].style.color = 'rgb(255, 105, 180)';
        pageLabels[0].innerHTML = '· // ABOUT ME';

    } else if (percent <= 30) {
        pageLabels[1].style.color = 'rgb(255, 105, 180)';
        pageLabels[1].innerHTML = '· // ARTICLE';

    } else if (percent <= 45) {
        pageLabels[2].style.color = 'rgb(255, 105, 180)';
        pageLabels[2].innerHTML = '· // REFLECTION';

    } else if (percent <= 60) {
        pageLabels[3].style.color = 'rgb(255, 105, 180)';
        pageLabels[3].innerHTML = '· // PRELIM';

    } else if (percent <= 80) {
        pageLabels[4].style.color = 'rgb(255, 105, 180)';
        pageLabels[4].innerHTML = '· // MIDTERM';

    } else {
        pageLabels[5].style.color = 'rgb(255, 105, 180)';
        pageLabels[5].innerHTML = '· // FINALS';
    }

    // Reset non-active labels
    if (percent > 15) pageLabels[0].innerHTML = '// ABOUT ME';
    if (percent <= 15 || percent > 30) pageLabels[1].innerHTML = '// ARTICLE';
    if (percent <= 30 || percent > 45) pageLabels[2].innerHTML = '// REFLECTION';
    if (percent <= 45 || percent > 60) pageLabels[3].innerHTML = '// PRELIM';
    if (percent <= 60 || percent > 80) pageLabels[4].innerHTML = '// MIDTERM';
    if (percent <= 80) pageLabels[5].innerHTML = '// FINALS';

});
