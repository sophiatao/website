/* responding to width change*/

const mq = window.matchMedia('(min-width: 991px)');

mq.addListener(WidthChange);

function WidthChange(mq) {
    if (mq.matches) {
        $('nav').addClass('affix');
        $('li').css('display', '');
    }
    else {
        $('nav').removeClass('affix');
        $('li').css('display','inline');
    }
};

/* navigating*/
$(document).ready(function() {
    $('a').click(function(evt) {
        var anchor = $(this).attr('href');
        $('article').addClass('hidden');
        $(anchor).removeClass('hidden');

    });
});
