(function ($) {
    $(document).ready(function () {
        var _1pauza = $("div.grid, div.grid-12").parent();
        // div.filter(".grid");
        _1pauza.css("background", "#DAD8D8");

        var _2pauza = $("nav").find("a").filter("[href^='http']");
        // div.filter(".grid");
        _2pauza.css("background", "#DAD8D8");

        var _4pauza = $("div#text p");
        _4pauza.filter()
        _4pauza.css("background", "#DAD8D8");
        console.log(_4pauza);


        var _5pauza = $(".pagination-item:not('span')");
        _5pauza.css("background", "#DAD8D8");
    });

})(jQuery);