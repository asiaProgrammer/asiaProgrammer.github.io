$(document).ready(function () {
    const input = $('#input-search');
    $('#search').on('click', function (e) {
            input.toggleClass('form-control-open');
            if(input.prop('required', true) && input.hasClass('form-control-open') === false) {
                input.prop('required', false);
        e.stopPropagation()
            }
        }
    );
    $('#search').on('blur', function (e) {
        if ($(e.target).is('#search') === false && input.val().length === 0 && $(e.target).is('.form-control-open') === false) {
            input.removeClass('form-control-open');
        }
    });
    const arrow = $('#arrow-start');
    arrow.on('click', function (e) {
        arrow.toggleClass('arrow-open', 'arrow-close');
        arrow.toggleClass('arrow-close', 'arrow-open');
    });
    const list = $('#left-list');
    $(window).on('scroll', function (e) {
        if ($(window).scrollTop() > 88) {
            list.removeClass('padding-down');
            list.addClass('padding-up');
        }
        else {
            list.removeClass('padding-up');
            list.addClass('padding-down');
        }
    });
});