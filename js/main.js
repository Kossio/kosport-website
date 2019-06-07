

$(function(){
    $('#slider').anythingSlider({
        theme               : "custom", // Theme name
        mode                : "horiz",   // Set mode to "horizontal", "vertical" or "fade" (only first letter needed); replaces vertical option
        expand              : true,     // If true, the entire slider will expand to fit the parent element
        autoPlay     : true,
       // resizeContents      : true,      // If true, solitary images/objects in the panel will expand to fit the viewport
       // showMultiple        : false,     // Set this value to a number and it will show that many slides at once
       // easing              : "swing",   // Anything other than "linear" or "swing" requires the easing plugin or jQuery UI

        //buildArrows         : true,      // If true, builds the forwards and backwards buttons
        //buildNavigation     : true,      // If true, builds a list of anchor links to link to each panel
        navigationFormatter : function(index, panel){
            var title = $(panel).find('h2').text();
            return title; // This would have each tab with the text 'Panel #X' where X = index
        },
        hashTags: false,
         pauseOnHover        : false,
        buildStartStop      : false      // If true, builds the start/stop button and adds slideshow functionality

        /*appendForwardTo     : null,      // Append forward arrow to a HTML element (jQuery Object, selector or HTMLNode), if not null
        appendBackTo        : null,      // Append back arrow to a HTML element (jQuery Object, selector or HTMLNode), if not null
        appendControlsTo    : null,      // Append controls (navigation + start-stop) to a HTML element (jQuery Object, selector or HTMLNode), if not null
        appendNavigationTo  : null,      // Append navigation buttons to a HTML element (jQuery Object, selector or HTMLNode), if not null
        appendStartStopTo   : null,      // Append start-stop button to a HTML element (jQuery Object, selector or HTMLNode), if not null

        toggleArrows        : false,     // If true, side navigation arrows will slide out on hovering & hide @ other times
        toggleControls      : false,     // if true, slide in controls (navigation + play/stop button) on hover and slide change, hide @ other times

        startText           : "Start",   // Start button text
        stopText            : "Stop",    // Stop button text
        forwardText         : "&raquo;", // Link text used to move the slider forward (hidden by CSS, replaced with arrow image)
        backText            : "&laquo;", // Link text used to move the slider back (hidden by CSS, replace with arrow image)
        tooltipClass        : "tooltip", // Class added to navigation & start/stop button (text copied to title if it is hidden by a negative text indent)

        // Function
        enableArrows        : true,      // if false, arrows will be visible, but not clickable.
        enableNavigation    : true,      // if false, navigation links will still be visible, but not clickable.
        enableStartStop     : true,      // if false, the play/stop button will still be visible, but not clickable. Previously "enablePlay"
        enableKeyboard      : true,      // if false, keyboard arrow keys will not work for this slider.

        // Navigation
        startPanel          : 1,         // This sets the initial panel
        changeBy            : 1,         // Amount to go forward or back when changing panels.
        hashTags            : true,      // Should links change the hashtag in the URL?
        infiniteSlides      : true,      // if false, the slider will not wrap & not clone any panels
        navigationFormatter : null,      // Details at the top of the file on this use (advanced use)
        navigationSize      : false,     // Set this to the maximum number of visible navigation tabs; false to disable

        // Slideshow options
        autoPlay            : false,     // If true, the slideshow will start running; replaces "startStopped" option
        autoPlayLocked      : false,     // If true, user changing slides will not stop the slideshow
        autoPlayDelayed     : false,     // If true, starting a slideshow will delay advancing slides; if false, the slider will immediately advance to the next slide when slideshow starts
        pauseOnHover        : true,      // If true & the slideshow is active, the slideshow will pause on hover
        stopAtEnd           : false,     // If true & the slideshow is active, the slideshow will stop on the last page. This also stops the rewind effect when infiniteSlides is false.
        playRtl             : false,     // If true, the slideshow will move right-to-left

        // Times
        delay               : 3000,      // How long between slideshow transitions in AutoPlay mode (in milliseconds)
        resumeDelay         : 15000,     // Resume slideshow after user interaction, only if autoplayLocked is true (in milliseconds).
        animationTime       : 600,       // How long the slideshow transition takes (in milliseconds)
        delayBeforeAnimate  : 0,         // How long to pause slide animation before going to the desired slide (used if you want your "out" FX to show).

        // Callbacks
        onBeforeInitialize  : function(e, slider) {}, // Callback before the plugin initializes
        onInitialized       : function(e, slider) {}, // Callback when the plugin finished initializing
        onShowStart         : function(e, slider) {}, // Callback on slideshow start
        onShowStop          : function(e, slider) {}, // Callback after slideshow stops
        onShowPause         : function(e, slider) {}, // Callback when slideshow pauses
        onShowUnpause       : function(e, slider) {}, // Callback when slideshow unpauses - may not trigger properly if user clicks on any controls
        onSlideInit         : function(e, slider) {}, // Callback when slide initiates, before control animation
        onSlideBegin        : function(e, slider) {}, // Callback before slide animates
        onSlideComplete     : function(slider) {},    // Callback when slide completes; this is the only callback without an event "e" variable

        // Interactivity
        clickForwardArrow   : "click",         // Event used to activate forward arrow functionality (e.g. add jQuery mobile's "swiperight")
        clickBackArrow      : "click",         // Event used to activate back arrow functionality (e.g. add jQuery mobile's "swipeleft")
        clickControls       : "click focusin", // Events used to activate navigation control functionality
        clickSlideshow      : "click",         // Event used to activate slideshow play/stop button
        allowRapidChange    : false,           // If true, allow rapid changing of the active pane, instead of ignoring activity during animation

        // Video
        resumeOnVideoEnd    : true,      // If true & the slideshow is active & a supported video is playing, it will pause the autoplay until the video is complete
        resumeOnVisible     : true,      // If true the video will resume playing (if previously paused, except for YouTube iframe - known issue); if false, the video remains paused.
        isVideoPlaying      : function(base){ return false; } // return true if video is playing or false if not - used by video extension

        // deprecated - use the video extension `wmode` option now
        // addWmodeToObject : "opaque",  // If your slider has an embedded object, the script will automatically add a wmode parameter with this setting*/

      });
function nl2br (str, is_xhtml) {
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
}


//https://www.google.com/maps?q=KOSPORT+Fitness+Center,+Doctor++Abella,+Zona+Administrativa+Federal,+Hermosillo,+Mexico&hl=en&ll=29.083551,-110.997545&spn=0.010567,0.012134&sll=29.052943,-110.959511&sspn=0.08456,0.097075&hq=KOSPORT+Fitness+Center,+Doctor+Abella,&hnear=Zona+Administrativa+Federal,+Sonora,+Mexico&t=m&z=17&iwloc=A
        var centerCoords = new google.maps.LatLng(29.083551,-110.997545);
        var map = new google.maps.Map($('#map')[0], {
          zoom: 18,
           scrollwheel: false,
          center: centerCoords,
         // disableDefaultUI: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var image = 'css/MAP_logo.png';
        var myLatLng = new google.maps.LatLng(29.083301,-110.997545);
        var beachMarker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          icon: image
        });


        $(window).resize(function(){
            map.panTo(centerCoords);
        });

        $('#carousel').elastislide();

        var ds = new Miso.Dataset({
          importer : Miso.Dataset.Importers.GoogleSpreadsheet,
          parser : Miso.Dataset.Parsers.GoogleSpreadsheet,
          key : "2PACX-1vTBySEbvEgVsSkmecl5SUDpQLEp5lzdPKWbGEPhILAE5w1YGnSwDo3TNHQ7ZoKGkiYfpijqS92tcOwQ",
          worksheet : "1"
        });

        ds.fetch({
          success : function() {
            this.each(function(row, k) {
                for(var i in row) if(row[i] == null) row[i] = '';

                switch(k){
                    case 0: $('.grupales-fecha').html(row.semana_fecha); break;
                    case 1: $('.grupal-semana-lunes').html(row.semana_fecha); break;
                    case 2: $('.grupal-semana-martes').html(row.semana_fecha); break;
                    case 3: $('.grupal-semana-miercoles').html(row.semana_fecha); break;
                    case 4: $('.grupal-semana-jueves').html(row.semana_fecha); break;
                    case 5: $('.grupal-semana-viernes').html(row.semana_fecha); break;
                    case 6: $('.grupal-semana-sabado').html(row.semana_fecha); break;
                }

                var tr = '<tr>';

                row.saturday_streamer = nl2br(row.saturday_streamer);
                row.sunday_streamer = nl2br(row.sunday_streamer);
                row.monday_streamer = nl2br(row.monday_streamer);
                row.tuesday_streamer = nl2br(row.tuesday_streamer);
                row.wednesday_streamer = nl2br(row.wednesday_streamer);
                row.thursday_streamer = nl2br(row.thursday_streamer);
                row.friday_streamer = nl2br(row.friday_streamer);

                row.saturday_game = nl2br(row.saturday_game);
                row.sunday_game = nl2br(row.sunday_game);
                row.monday_game = nl2br(row.monday_game);
                row.tuesday_game = nl2br(row.tuesday_game);
                row.wednesday_game = nl2br(row.wednesday_game);
                row.thursday_game = nl2br(row.thursday_game);
                row.friday_game = nl2br(row.friday_game);

                  tr = tr+'<td nowrap="nowrap"><span class="horario">'+row.time-day+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.saturday_streamer+'</span><span class="instructor">'+row.saturday_game+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.sunday_streamer+'</span><span class="instructor">'+row.sunday_game+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.monday_streamer+'</span><span class="instructor">'+row.monday_game+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.tuesday_streamer+'</span><span class="instructor">'+row.tuesday_game+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.wednesday_streamer+'</span><span class="instructor">'+row.wednesday_game+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.thursday_streamer+'</span><span class="instructor">'+row.thursday_game+'</span></td>';
                  tr = tr+'<td nowrap="nowrap"><span class="name">'+row.friday_streamer+'</span><span class="instructor">'+row.friday_game+'</span></td>';

                  $('#horario tbody').append(tr);
            });
          },
          error : function() {
            console.log("Are you sure you are connected to the internet?");
          }
        });

        var ds = new Miso.Dataset({
          importer : Miso.Dataset.Importers.GoogleSpreadsheet,
          parser : Miso.Dataset.Parsers.GoogleSpreadsheet,
          key : "0AmiwpEaQwxurdGlpbkJTSy1qZ2dYMF9YOGNmX3RkYVE",
          worksheet : "1"
        });
        //semana_fecha
        //
        ds.fetch({
          success : function() {
            this.each(function(row, k) {

                for(var i in row) if(row[i] == null) row[i] = '';

                // console.log(k, row.semana_fecha);

                switch(k){
                    case 0: $('.spinning-fecha').html(row.semana_fecha); $('.spinning-semana-jueves').html(row.semana_fecha2); break;
                    case 1: $('.spinning-semana-lunes').html(row.semana_fecha); $('.spinning-semana-viernes').html(row.semana_fecha2); break;
                    case 2: $('.spinning-semana-martes').html(row.semana_fecha); $('.spinning-semana-sabado').html(row.semana_fecha2); break;
                    case 3: $('.spinning-semana-miercoles').html(row.semana_fecha); break;

                }

                var tr = '<tr>';

                row.lunes = nl2br(row.lunes);
                row.martes = nl2br(row.martes);
                row.miercoles = nl2br(row.miercoles);
                row.jueves = nl2br(row.jueves);
                row.viernes = nl2br(row.viernes);
                row.sabado = nl2br(row.sabado);

                row.instructor_lunes = nl2br(row.instructor_lunes);
                row.instructor_martes = nl2br(row.instructor_martes);
                row.instructor_miercoles = nl2br(row.instructor_miercoles);
                row.instructor_jueves = nl2br(row.instructor_jueves);
                row.instructor_viernes = nl2br(row.instructor_viernes);
                row.instructor_sabado = nl2br(row.instructor_sabado);

                tr = tr+'<td nowrap="nowrap"><span class="horario">'+row.horario+'</span></td>';
                tr = tr+'<td nowrap="nowrap"><span class="name">'+row.lunes+'</span><span class="instructor">'+row.instructor_lunes+'</span></td>';
                tr = tr+'<td nowrap="nowrap"><span class="name">'+row.martes+'</span><span class="instructor">'+row.instructor_martes+'</span></td>';
                tr = tr+'<td nowrap="nowrap"><span class="name">'+row.miercoles+'</span><span class="instructor">'+row.instructor_miercoles+'</span></td>';
                tr = tr+'<td nowrap="nowrap"><span class="name">'+row.jueves+'</span><span class="instructor">'+row.instructor_jueves+'</span></td>';
                tr = tr+'<td nowrap="nowrap"><span class="name">'+row.viernes+'</span><span class="instructor">'+row.instructor_viernes+'</span></td>';
                tr = tr+'<td nowrap="nowrap"><span class="name">'+row.sabado+'</span><span class="instructor">'+row.instructor_sabado+'</span></td>';

                $('#spinning tbody').append(tr);
            });
          },
          error : function() {
            console.log("Are you sure you are connected to the internet?");
          }
        });




$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



$("#toggle").click(function(){

         $("#target").slideToggle( 'slow',function(){
         $("#toggle").text($("#target").is(':visible') ? "▾ Valoración Física" : "▸ Valoración Física");
 });
});

 $("#toggle2").click(function(){

         $("#target2").slideToggle( 'slow',function(){
         $("#toggle2").text($("#target2").is(':visible') ? "▾ Programa de Inicio Rápido" : "▸ Programa de Inicio Rápido");
 });
});

 $("#toggle3").click(function(){

         $("#target3").slideToggle( 'slow',function(){
         $("#toggle3").text($("#target3").is(':visible') ? "▾ Sistema de Seguimiento" : "▸ Sistema de Seguimiento");
 });
});

$('#target').hide();
$('#target2').hide();
$('#target3').hide();

$('#contactform').submit(function(e){
    console.log('submit event fired');


$.post('submit.php', $('#contactform').serialize(),function(data){
console.log(data);
Shadowbox.open({
        content:    '<div id="welcome-msg">¡Tu mensaje ha sido enviado! </div>',
        player:     "html",
        title:      "KOSPORT",
        height:     70,
        width:      390
    });
});

    e.preventDefault();
return false;

});


});