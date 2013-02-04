var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
        $(document).keydown(function(e) {
          kkeys.push( e.keyCode );
          if ( kkeys.toString().indexOf( konami ) >= 0 ){
            $(document).unbind('keydown',arguments.callee);
            $.getScript('http://www.cornify.com/js/cornify.js',function(){
              for(var i=0; i<36;i++){
                cornify_add();
              }
              $(document).click(cornify_add);
            });
          }
        });