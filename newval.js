/* Override $.val() to trigger a change() event on form elements.
 * Unfortunately, it's unilateral - beware, this may play badly with other plugins!
 */
(function($) {
  
    var oldval = $.fn.val;

    $.fn.val = function() {
      var ret = oldval.apply(this, arguments);
      if (arguments.length) {
        $(this).trigger('change');
      }
      return ret;
    }

  })(jQuery);

