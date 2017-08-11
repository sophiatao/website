const mq = window.matchMedia('(max-width: 991px)');

mq.addListener(WidthChange);

function WidthChange(mq) {
    if (mq.matches) {
        $('nav').removeClass('affix');
        $('nav').addClass('upper');
        $('li').css('display', 'inline');
    }
    else {
        $('nav').addClass('affix');
        $('nav').removeClass('upper');
        $('li').css('display','');
    }
};
