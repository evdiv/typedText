/*!
 typedText 1.0.0 - 2014-06-04
 jQuery typed text plugin
 (c) 2014, http://fdata.org
 license: http://www.opensource.org/licenses/mit-license.php
 */

;(function($, document, window) {
    var Typed = {
        init: function(elem, options) {
            this.$elem = $(elem);
            this.text = this.$elem.text();
            this.position = 0;

            this.options = $.extend({}, $.fn.typedText.defaults, options);

            this.$elem.empty();
            this.typing();
        },

        typing: function() {
            var self = this;

            setTimeout(function() {

                self.$elem.empty().append(self.text.substr(0, self.position));
                self.position++;

                if(self.position < self.text.length) {

                    self.$elem.append('|');
                    self.typing();
                }
            }, self.options.delay);
        }
    };

    $.fn.typedText = function(options) {
        return this.each(function() {
            var typed = Object.create(Typed);
            typed.init(this, options);
        })
    };

    $.fn.typedText.defaults = {
        delay: 100
    };

})(jQuery, document, window);
