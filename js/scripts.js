(function ($) {
    $(document).ready(function () {
        var _1pauza = $("div.grid.grid-12");
        _1pauza.css("background", "#DAD8D8");

        var _2pauza = $(".nav").find("a").filter("[href^='http']");
        _2pauza.css("background", "#DAD8D8");

        var _3pauza = $("input:checkbox, input:radio").not(":checked")
        console.log(_3pauza);

        var _4pauza = $("div#text p:empty:first");
        console.log(_4pauza);


        var _5pauza = $(".pagination-item").not("span");
        _5pauza.css("background", "#DAD8D8");
    });

})(jQuery);