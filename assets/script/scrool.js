$(window).scroll(function() {
    var scrollValue = $(window).scrollTop() + 400;


    var visionScrool = $("#vision").offset().top;
    var distributionScrool = $("#distribution").offset().top;
    var featuresScrool = $("#features").offset().top;
    var partnersScrool = $("#partners").offset().top;
    var roadmapScrool = $("#roadmap").offset().top;

    if (partnersScrool == scrollValue) {
        alert("geldin");
    }
});