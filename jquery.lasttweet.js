/* Matthew Cegielka, 2011-01-26. Portions reused from Tweet - http://tweet.seaofclouds.com/ */
(function($) {

  $.extend({
    linkify: function(str) {
      // See http://daringfireball.net/2010/07/improved_regex_for_matching_urls
      var regexp = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;
      return str.replace(regexp, 
      function(match) {
        var url = (/^[a-z]+:/i).test(match) ? match : "http://"+match;
        return "<a href=\""+url+"\">"+match+"</a>";
      });
    }
  });


  $.fn.lasttweet = function(o){
    var s = {
      username:      "",
      loading_class: 'lt_loading',
      loading_text:  'Loading...',
      tweet_class:   'lt_tweet'
    };

    if(o) $.extend(s, o);

    $.fn.extend({

    });


    function build_url() {
      var proto = ('https:' == document.location.protocol ? 'https:' : 'http:');
      return proto + "//twitter.com/users/" + s.username + ".json?callback=?";
    }

    return this.each(function(i, elem){
      var loading = $('<span class="lt_loading">'+s.loading_text+'</span>');

      if (s.loading_text) $(elem).append(loading);
      $(elem).bind("load", function(){
        $.getJSON(build_url(), function(data){
          var text = '<span class="' + s.tweet_class + '">'  + $.linkify(data.status.text) + '</span>';

            $(elem).html(text);
          });
        }).trigger("load");
      });
    };


  })(jQuery);
