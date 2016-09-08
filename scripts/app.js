$(function () {
    window.app = new function () {
        this.body = $('body');
        $('#lightSwitch').on('click', $.proxy(function () {
            this.body.toggleClass('dark');

            $('.ticket').each(function (index) {
                $(this).find('.ticket__title').toggleClass('ticket__title--dark');
                $(this).find('.ticket__message').toggleClass('ticket__message--dark');
                $(this).find('.ticket__round-item').toggleClass('ticket__round-item--dark')
            });
        }, this));
    }();
});