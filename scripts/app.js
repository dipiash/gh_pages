$(function () {
    window.app = new function () {
        var cloneTicket = $('.ticket__clone')
            .clone()
            .removeClass('ticket__clone');

        var ticketsLine = $('#tickets-line');

        var messageC = messageControls();

        this.body = $('body');
        $('#lightSwitch').on('click', $.proxy(function () {
            this.body.toggleClass('dark');

            $('.ticket').each(function (index) {
                $(this).find('.ticket__title').toggleClass('ticket__title--dark');
                $(this).find('.ticket__message').toggleClass('ticket__message--dark');
                $(this).find('.ticket__round-item').toggleClass('ticket__round-item--dark')
            });
        }, this));

        $('button').on('click', function () {
            messageC.showMessage('asdfsdaf')
        });
    }();

    // Module for message controls
    var messageControls =function () {
        return {
            showMessage: function (text) {
                alert(text)
            }
        }
    };
});