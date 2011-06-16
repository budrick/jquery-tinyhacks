/*
 *
 * jQuery Default Value
 * Author: Matt Cegielka <matt@mudbrick.org>
 * 
 * Usage: $('some input selector').defaultval();
 *
 * The plugin does the rest.
 *
 */
(function( $ ){

  var methods = {
    init : function( options ) {

             return this.each(function(){

               var $this = $(this),
                   data = $this.data('defaultval');

             if ( ! data ) {
               $(this).data('defaultval', {
                 'defaultvalue': this.defaultValue
               });

               $this.bind({
                 'focus.defaultval': function() {
                   if ($this.val() == $this.data('defaultval').defaultvalue) {
                     $this.val('');
                   }
                 },
                 'blur.defaultval': function() {
                   if (!$this.val()) {
                     $this.val($this.data('defaultval').defaultvalue);
                   }
                 }
               });

             }
             });
           },
    destroy : function( ) {

                return this.each(function(){

                  var $this = $(this),
                data = $this.data('defaultval');

                // Namespacing FTW
                $(window).unbind('.defaultval');
                data.defaultval.remove();
                $this.removeData('defaultval');

                })

              }  };

$.fn.defaultval = function( method ) {

  if ( methods[method] ) {
    return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
  } else if ( typeof method === 'object' || ! method ) {
    return methods.init.apply( this, arguments );
  } else {
    $.error( 'Method ' +  method + ' does not exist on jQuery.defaultval' );
  }    

};
})( jQuery );

