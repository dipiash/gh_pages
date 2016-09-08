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

        $('button').on('click', function () {
            messageControls.showMessage('asdfsdaf')
        });
    }();

    // Module for message controls
    var messageControls = function () {
        var cloneTicketLight = $('.ticket__clone')
            .clone()
            .removeClass('ticket__clone');

        var cloneTicketDark = $('.ticket-dark__clone')
            .clone()
            .removeClass('.ticket-dark__clone');

        var ticketsLine = $('#tickets-line');

        return {
            showMessage: function (text) {
                if ($('body').hasClass('dark')) {
                    cloneTicketDark
                        .find('.ticket__text')
                        .text(text);

                    ticketsLine.append(
                        cloneTicketDark
                            .clone()
                            .show()
                    );
                } else {
                    cloneTicketLight
                        .find('.ticket__text')
                        .text(text);

                    ticketsLine.append(
                        cloneTicketLight
                            .clone()
                            .show()
                    );
                }
            }
        }
    }();
});