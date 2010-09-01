/* Very simple jQuery expanding-sections plugin. */

(function($) {

    $.fn.expander = function(settings) {
      var config = {
        'selector': 'h4',
        'duration': 'fast'
      };

      if (settings) $.extend(config, settings);

      this.each(function() {

          $(config.selector, this).bind({
              'expander.open': function() {
                $(this).addClass('active').next().slideDown(config.duration);
              },
              'expander.close': function() {
                $(this).removeClass('active').next().slideUp(config.duration);
              },
              'expander.toggle': function() {
                $(this).hasClass('active') ? $(this).trigger('expander.close') : $(this).trigger('expander.open');
              }
              
            });

          $(config.selector, this).click(function() {
              $(this).trigger('expander.toggle');
              return false;
            }
          ).next().hide();
        });

      return this;

    };

  })(jQuery);

