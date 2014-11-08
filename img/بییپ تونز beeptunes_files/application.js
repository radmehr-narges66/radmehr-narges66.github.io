/**
 * Page Script
 */
(function ($) {
    var page = {
        ready       : $(function () {
            $('.live-tile').liveTile();

            var $trackCount = $('.track-count');

//            var x = 40000;
//            setInterval(function () {
//                $trackCount.text(x);
//                x++;
//            }, 10);

            /**
             * Big search page scroller
             */
//            $('.search.mode-big .search-input').focus(function () {
//                /**
//                 * Umit small & medium size devices
//                 */
//                var windowWidth = $(window).width();
//                if (windowWidth > 545) {
//                    $('html,body').animate({
//                        scrollTop: 490
//                    }, 1000);
//                }
//            });

            /**
             * Set page height to cover height
             */
            window.pageHeight = $(window).height();
            $('.hero').height(pageHeight);
            $('.check-down').css('top', (pageHeight-70));

            /**
             * Scroll to main section
             */
            $(document).on('click touchstart', '.check-down', function () {

                $(this).removeClass('animate');

                $('html,body').animate({
                    scrollTop: window.pageHeight
                }, 1000);

            });

            /**
             * Call incomming metro after hero background loaded
             */
//                setTimeout(function () {
//                    page.incomming();
//                }, 1000);

            $('.box-play').click(function () {
                page.playDefaultPlaylist();

            });

            /**
             * Remove scroll animation after first scroll
             */
            $(window).scroll(function () {
                $('.check-down').removeClass('animate').fadeOut();
                $(this).unbind('scroll');
            });
        }),
        trackCounter: {
            from : null,
            to   : 40500,
            gap  : 100,
            $elm : {},
            speed: 10,
            ready: $(function () {
//                page.trackCounter.$elm = $('.track-counter');
//                page.trackCounter.from = parseInt(page.trackCounter.$elm.data('tracks')) - page.trackCounter.gap;
//                page.trackCounter.start();
            }),
            start: function () {
                var This = this;
                setTimeout(function () {
                    This.count();
                }, 2000);
            },

            /**
             * Increment counter
             */
            count: function () {
                this.ease();
            },

            /**
             * Increment one point
             */
            increment: function () {
                this.$elm.text(this.from);
                this.from++;
            },

            /**
             * Call increment with ease
             */
            ease: function () {
                var This = this;
                var j = 1;
                for (var i = -1; i < page.trackCounter.gap; i++) {

                    /**
                     * slow down at position in 2/3 of gap
                     */
                    if (i > Math.round(page.trackCounter.gap * 0.6)) {
                        j++;
                    }
                    (function () {
                        setTimeout(function () {
                            This.increment();
                        }, (i) * (((j) * (.1)) + 10));
                    })();
                }
            }
        },

        /**
         * Metro style incomming intro
         */
        incomming: function () {
            var $boxWrap = $('.box-wrap');
            var length = $boxWrap.length;

            for (var i = 0; i < length; i++) {
                (function () {
                    var j = i;
                    setTimeout(function () {
                        $boxWrap.eq(j).addClass('in');
                    }, (i * 200) + 1000);
                })();
            }
        },
        flipper  : {
            ready: $(function () {
                $('.flip-container').mouseenter(function () {
                    $(this).toggleClass('hover');
                });
            })
        },

        /**
         * Namad Etemad Electronici
         */
        nemad              : {
            ready: $(function () {
                setTimeout(function () {
                    $('#the-ugly-enamad').append('<iframe width="120" scrolling="no" height="120" frameborder="0" style="margin: 0; padding: 0; border: 1px" temp_src="http://enamad.ir/trustseal/symbol.aspx" src="http://enamad.ir/trustseal/symbol.aspx"></iframe>');
                }, 8000);
            })
        },
        playDefaultPlaylist: function () {
            $('.play-control').eq(0).click();
        }
    }
})(window.jQuery);