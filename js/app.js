/* responding to width change*/

const mq = window.matchMedia('(min-width: 991px)');

mq.addListener(WidthChange);

function WidthChange(mq) {
    if (mq.matches) {
        $('nav').addClass('affix');
        $('.navli').css('display', '');
    }
    else {
        $('nav').removeClass('affix');
        $('.navli').css('display','inline');
    }
};

/* navigating*/
$(document).ready(function() {
    $('.navli').children().click(function(evt) {
        var anchor = $(this).attr('href');
        $('article').addClass('hidden');
        $(anchor).removeClass('hidden');

    });
});
