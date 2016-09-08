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
            var text = $('#MessageInput').val().trim();

            if (text !== '') {
                messageControls.showMessage(text);
            } else {
                alert('You should input text!');
            }
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

        function appendTicket(element, cb) {
            var countTickets = ticketsLine.find('.ticket').length + 1;

            ticketsLine.append(
                element
                    .clone()
                    .css({
                        "position": "absolute",
                        "bottom": 0
                    })
                    .show()
                    .animate({
                        "bottom": $('body').height() - countTickets*125
                    }, 300)
            );
        }

        return {
            showMessage: function (text) {
                if ($('body').hasClass('dark')) {
                    cloneTicketDark
                        .find('.ticket__text')
                        .text(text);

                    appendTicket(cloneTicketDark);
                } else {
                    cloneTicketLight
                        .find('.ticket__text')
                        .text(text);

                    appendTicket(cloneTicketLight);
                }
            }
        }
    }();
});