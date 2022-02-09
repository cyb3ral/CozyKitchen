var events = [
    
    {
        date: "1",
        month: "FEB",
        year: "2021",
        event: "Valentine's Limited Edition Sweet Treats and Paparazzi Jewelry Pop Up Shop",
        description: "",
    },
    {
        date: "9",
        month: "FEB",
        year: "2021",
        event: "Super Bowl Party Pack-Order Deadline",
        description: "",
    },{
        date: "12",
        month: "FEB",
        year: "2021",
        event: "Super Bowl Party Pack-Pickups",
        description: "",
    },
    {
        date: "14",
        month: "FEB",
        year: "2021",
        event: "Valentine's Day",
        description: "Buy 1 Get 1! Dine in Only.",
    },
    {
        date: "15",
        month: "FEB",
        year: "2021",
        event: "Mardi Gras Specials (Po Boy Sandwiches, Party Cones, and more!)",
        description: "",
    },
    {
        date: "4",
        month: "MAR",
        year: "2021",
        event: "First Friday Prix Fixe Dinner and Pop-Up Gift Shop.",
        description: "Reservations Required.",
    },
    {
        date: "7",
        month: "MAR",
        year: "2021",
        event: "St. Patrick's Month Long Specials (Guinness Glazed Corned Beef, Irish Burger, and more!)",
        description: "",
    },
    {
        date: "25",
        month: "APR",
        year: "2021",
        event: "First Friday Prix Fixe Dinner and Pop-Up Gift Shop. ",
        description: "Reservations Required.",
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
