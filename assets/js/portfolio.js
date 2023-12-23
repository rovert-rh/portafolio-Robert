$(document).ready(function(){
    $(".button").click(function(){
        if ($(this).hasClass("active")) {
            return false;  // Evitar clics adicionales si el botón ya está activo
        }
        $(".button.active").removeClass("active");  // Desactivar el botón activo
        $(this).addClass("active");  // Activar el botón clicado

        var filter = $(this).attr("data-filter");

        if (filter == "all"){
            $(".gallery .image").show(400);
        }
        else{
            $(".gallery .image").not("."+filter).hide(200);
            $(".gallery .image").filter("."+filter).show(400);
        }
        return false;  // Evitar que el evento de clic se propague
    });

    // Abrir el enlace en otra pestaña
    $(".btn1").click(function(event){
        window.open($(this).attr("href"), "_blank");
        return false; // Evitar que el evento de clic se propague
    });


    //MAGNIFIC-POPUP
    $(".gallery").magnificPopup({
        
        delegate: "a",
        type: "image",
        removalDelay: 500, //delay removal by X to allow out-animation
        gallery:{
            enabled: true
        },

        callbacks: {
            beforeOpen: function() {
              // just a hack that adds mfp-anim class to markup 
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
               this.st.mainClass = this.st.el.attr('data-effect');
            }
          },
          closeOnContentClick: true,
          midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
          
    })


});