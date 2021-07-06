var regresar = $("#ir-arriba");

$ (window).scroll(function() {
    if ($(window).scrollTop() > 300){
        regresar.addClass("visible");
    }else{
        regresar.removeClass("visible");
    }
});

regresar.on("click", function (evento) {
    evento.preventDefault();
    $("html, body").animate ({scrollTop: 0}, 300)/*Tipo de animación*/
})
