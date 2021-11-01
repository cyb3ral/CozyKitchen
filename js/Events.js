var events = [
    
    {
        date: "1",
        month: "NOV",
        year: "2021",
        event: "All Month Long",
        description: "Pumpkin Spiced Waffles, Bacon Bourbon Turkey Burger, and Apple Spiced BonBons",
    },
    {
        date: "3",
        month: "NOV",
        year: "2021",
        event: "First Friday Dinner reservation deadline",
        description: "",
    },{
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
        event: "First Friday Pop up Shop",
        description: "",
    },
    {
        date: "5",
        month: "NOV",
        year: "2021",
        event: "Prix Fixe Dinner",
        description: "",
    },
    {
        date: "20",
        month: "NOV",
        year: "2021",
        event: "Thanksgiving Meals Order Deadline",
        description: "",
    },
    {
        date: "24",
        month: "NOV",
        year: "2021",
        event: "Thanksgiving Meals Pickup",
        description: "",
    },
    {
        date: "25",
        month: "NOV",
        year: "2021",
        event: "Closed for Thanksgiving",
        description: "",
    },
    {
        date: "26",
        month: "NOV",
        year: "2021",
        event: "Closed for Thanksgiving",
        description: "",
    },
    {
        date: "27",
        month: "NOV",
        year: "2021",
        event: "Closed for Thanksgiving",
        description: "",
    },
    {
        date: "28",
        month: "NOV",
        year: "2021",
        event: "Closed for Thanksgiving",
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
