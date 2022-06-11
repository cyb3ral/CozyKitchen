var events = [
    
    {
        date: "1",
        month: "JUN",
        year: "2022",
        event: "Burger of the Month",
        description: "BBQ Bacon Burger",
    },
    {
        date: "1",
        month: "JUN",
        year: "2022",
        event: "Pasta Salad of the Month",
        description: "Classic Mac",
    },
    {
        date: "4",
        month: "JUL",
        year: "2022",
        event: "Closed",
        description: "",
    },
    

];

$(document).ready(function () {
    var EventHtml = Mustache.render($("#events-template").html(), {
        events: events,
    });
    $("#eventContainer").append(EventHtml);
    $("#eventContainer .row").not(":first").css("padding-top", "10px");
    $("#eventContainer");
});
