var events = [
    
    {
        date: "1",
        month: "OCT",
        year: "2021",
        event: "All Month Long Oktoberfest Specials",
        description: "",
    },
    {
        date: "15",
        month: "OCT",
        year: "2021",
        event: "1 Year Anniversary of Opening Specials",
        description: "",
    },
    {
        date: "16",
        month: "OCT",
        year: "2021",
        event: "1 Year Anniversary of Opening Specials",
        description: "",
    },
    {
        date: "17",
        month: "OCT",
        year: "2021",
        event: "1 Year Anniversary of Opening",
        description: "",
    },
    {
        date: "3",
        month: "NOV",
        year: "2021",
        event: "Prix Fixe Reservation Deadline",
        description: "",
    },
    {
        date: "5",
        month: "NOV",
        year: "2021",
        event: "Prix Fixe Dinner",
        description: "",
    }
    

];

$(document).ready(function () {
    var EventHtml = Mustache.render($("#events-template").html(), {
        events: events,
    });
    $("#eventContainer").append(EventHtml);
    $("#eventContainer .row").not(":first").css("padding-top", "10px");
    $("#eventContainer");
});
