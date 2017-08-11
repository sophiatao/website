/* responding to width change*/

const mq = window.matchMedia('(max-width: 991px)');

mq.addListener(WidthChange);

function WidthChange(mq) {
    if (mq.matches) {
        $('nav').removeClass('affix');
        $('li').css('display', 'inline');
    }
    else {
        $('nav').addClass('affix');
        $('li').css('display','');
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
