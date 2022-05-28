var Breakfast = [
    {
        name: 'Breakfast', items: [
            {
                name: 'Breakfast Burrito',
                description: 'Bacon, Egg, Potatoes, and Cheese in a Large Tortilla',
                additional: 'Chorizo add $2.00',
                price: '8.99'
            },
            {
                name: 'Breakfast Grilled Cheese',
                description: 'Bacon, Ham, Fried Egg, Cheddar on Sourdough',
                additional: '',
                price: '9.49'
            },
            {
                name: 'Build An Omelette',
                description: '3 Egg Omelette with Choice of 3 Fillings:Cheese, Bacon, Sausage, Ham, Chicken,Caramelized Onions, Tomatoes, Peppers,Spinach',
                additional: 'Each additional meat + $1.99 Each Additional vegetable + $.99',
                price: '9.49'
            },

            {
                name: 'Buttermilk Waffles or Pancakes',
                description: 'Choice of 2 Waffles or 2 Pancakes with Butter and Syrup',
                additional: '',
                price: '9.49'
            },

            {
                name: 'Avocado Toast',
                description: 'Wheat Toast topped with Smashed Avocado, 2 Poached Eggs, Tomato,and Everything Bagel Seasoning',
                additional: '',
                price: '9.49'
            },

            {
                name: 'Cozy Benedict ',
                description: 'Sourdough Bread topped with Ham, 2 Poached Eggs, and Hollandaise Sauce',
                additional: '',
                price: '10.99'
            },

            {
                name: 'Breakfast Sundae',
                description: 'Yogurt, Fruit, and Granola, topped with Whipped Cream. (NO SIDES)',
                additional: '',
                price: '5.99'
            }


        ]
    }
];

var Cozies = [
    {
        name: 'Breakfast Cozies', items: [
            {
                name: 'The Mini Cozy',
                description: '2 Eggs, Bacon or Sausage, Country Fried Potatoes, Toast',
                additional: '',
                price: '8.99'
            },
            {
                name: 'The Big Cozy',
                description: '2 Pancakes, 2 Eggs, Bacon and Sausage, Country Fried Potatoes',
                additional: '',
                price: '11.99'
            },

        ]
    }
];

var Drinks = [
    {
        name: 'Drinks', items: [
            {
                name: 'Bottled Water',
                price: '1.50'
            },
            {
                name: 'Bottled Drinks',
                price: '2.50'
            },
            {
                name: 'Local Milk',
                price: '3.00'
            }, {
                name: 'Fresh Brewed Coffee',
                price: '1.75'
            }, {
                name: 'Crafted Hot Cocoa ',
                price: '2.50'
            }, {
                name: 'Juice',
                price: '3.00'
            }, {
                name: 'Homemade Lemonade',
                price: '3.00'
            }

        ]
    }
];

var SmallBites = [{
    name: 'Fried Bites', items: [{
        name: 'Texas Egg Rolls',
        description: 'Fried Egg Rolls stuffed with Smoked Brisket Bacon, Jalapenos, Pepper Jack Cheese, Cream Cheese. Served with Spiced Cozy Sauce.',
        additional: '',
        price: '9.49'
    }, {
        name: 'Buffalo Chicken Flautas',
        description: 'Flour Tortillas stuffed with Chicken, Buffalo Sauce, Cream Cheese, and Cheddar Cheese. Fried and served with choice of Ranch or Blue Cheese',
        additional: '',
        price: '9.29'
    },

    {
        name: 'C.B.R. Bites',
        description: 'Flour Tortillas stuffed with Chicken, Bacon, Cheese, and Ranch. Fried and served with Spiced Cozy Sauce',
        additional: '',
        price: '9.29'
    },

    {
        name: 'NY Deli Rolls',
        description: 'Fried Egg Rolls filled with Pastrami, Swiss, and Pickles. Served with Honey Mustard',
        additional: '',
        price: '9.29'
    }


    ]
}]

var Soups = [{
    name: 'Soup and Salads', items: [
        {
            name: 'Side Salad ',
            description: 'Tomato, Cucumber, Shredded Cheese, Croutons',
            additional: '',
            price: '3.99'
        },

        {
            name: 'Pasta Salad of the Month',
            description: '',
            additional: 'side 3.49 / lg 5.99',
            price: ''
        },
        {
            name: 'Caesar Salad',
            description: 'Chopped Lettuce, Parmesan Cheese, Croutons and Caesar Dressing.',
            additional: 'Chicken add $2',
            price: '10.49'
        },
        {
            name: 'Strawberry Spinach Salad',
            description: 'Spinach, Strawberries, Apples, Cucumbers, and Blue Cheese Crumbles with a Balsamic Dressing',
            additional: 'Chicken add $2',
            price: '10.49'
        },
        {
            name: 'The Cozy Chopped Salad',
            description: 'Chopped Lettuce, Shredded Cheese, Cucumber, Tomato, Croutons, and Diced Chicken',
            additional: '',
            price: '12.59'
        }
    ]
}]


var Lunch = [{
    name: '', items: [{
        name: 'B.B.L.T.',
        description: 'Bacon, more Bacon, Lettuce, and Tomato ',
        additional: 'Substitute Fried Green Tomato add $2 Fried Egg add $1',
        price: '9.00'
    },
    {
        name: 'B.B.L.T.',
        description: 'Bacon, more Bacon, Lettuce, and Tomato',
        additional: 'Fried Green Tomato add $2  Fried Egg add $1',
        price: '9.29'
    },
    {
        name: 'Turkey-Cran Sandwich',
        description: 'Roasted Turkey, Swiss, Lettuce, Tomato, Cranberry-Sage Aioli on Garlic Butter Toasted Sourdough',
        additional: '',
        price: '10.29'
    },
    {
        name: 'Country Chicken Salad',
        description: 'Chicken tossed with Apples, Celery, and Dried Cranberries. Topped with Lettuce and Tomato on a Croissant',
        additional: '',
        price: '10.29'
    },
    {
        name: 'Ham and Cheese',
        description: 'Ham, Choice of Swiss or Cheddar, Black Pepper Aioli, Mustard, Lettuce, and Tomato',
        additional: '',
        price: '9.49'
    },
    {
        name: 'Garden Sandwich',
        description: 'Veggie-Herb Cream Cheese, Microgreens, Red Onion, Cucumber, Lettuce, Tomato on a Croissant',
        additional: 'Fried Green Tomato add $2',
        price: '9.49'
    }
    ]
}]




var lunch2 = [{
    name: '', items: [
        {
            name: 'New York Pastrami',
            description: 'Hot Pastrami, Swiss, and Spicy Mustard on Rye',
            additional: '',
            price: '10.49'
        },
        {
            name: 'Pulled Pork Sandwich',
            description: 'Slow Cooked Pork in a our Signature BBQ Sauce, topped with Slaw on a Brioche Bun',
            additional: '',
            price: '10.49'
        },
        {
            name: 'Patty Melt',
            description: '1/2 lb Beef Patty topped with Caramelized Onions, Swiss Cheese, and Thousand Island on Grilled Rye Bread',
            additional: '',
            price: '11.29'
        },
        {
            name: 'Classic Cheeseburger',
            description: '1/2 lb Beef Patty, Cheddar Cheese, Lettuce, Tomato, Red Onion, Pickles, and Thousand Island',
            additional: '',
            price: '11.29'
        },
        {
            name: 'The Cozy Bistro Burger',
            description: '1/2 lb Beef Patty, White Cheddar, Brown Sugar Peppered Bacon, Avocado, Lettuce, and a Black Pepper Aioli',
            additional: '',
            price: '11.29'
        },
        {
            name: 'The Cuban',
            description: 'Slow Cooked Pork, Ham, Swiss, Pickles, and Spicy Mustard on a Fresh Pressed Roll',
            additional: '',
            price: '11.99'
        }
    ]
}];

var KidsBreakfast = [{
    name: 'Breakfast', items: [{
        name: '',
        description: '',
        additional: '',
        price: ''
    }
    ]
}]

var KidsLunch = [{
    name: 'Lunch', items: [{
        name: '',
        description: '',
        additional: '',
        price: ''
    }
    ]
}]

$(document).ready(function () {
    CreateMenu()

    function CreateMenu() {
        // var template = Handlebars.compile('{{#categories}}<div class="col-lg-4 menu-wrap"><div class="heading-menu"><h3 class="text-center mb-5">{{name}}</h3></div>{{#items}}<div class="menus d-flex align-items-center"><div class="menu-img rounded-circle"<img class="img-fluid" src="{{imgUrl}}" alt=""></div>                   <div class="text-wrap">                       <div class="row align-items-start">                           <div class="col-8">                           <h4>{{name}}</h4>                       </div>                       <div class="col-4"><h4 class="text-muted menu-price">{{price}}</h4></div>                   </div>                   <p>{{description}}</p>               </div>           </div>           {{/items}}       </div>       {{/categories}}');
        var _Breakfast = Mustache.render($('#menu-template').html(), { categories: Breakfast })
        var _Cozies = Mustache.render($('#menu-template').html(), { categories: Cozies })
        var _Drinks = Mustache.render($('#drink-template').html(), { categories: Drinks })
        var $menu1 = $('#divMenu')

        $menu1.append(_Breakfast).append(_Cozies);
        $('h4').filter(function () { return $(this).text() === 'Drinks' }).empty().append(_Drinks);

        var drinksContainer = $('.drinksContainer').parent().parent();
        $(drinksContainer).removeClass('col-8').addClass('col-12');
        $('.drinksContainer').closest('.align-items-center').css('border-bottom', 'none');

        var $menu2 = $('#divMenu2')
        var _bites = Mustache.render($('#menu-template').html(), { categories: SmallBites })
        var _soups = Mustache.render($('#menu-template').html(), { categories: Soups })
        $menu2.append(_bites).append(_soups)

        var $menu3 = $('#divMenu3')

        var _Lunch = Mustache.render($('#menu-template').html(), { categories: Lunch })
        var _Lunch2 = Mustache.render($('#menu-template').html(), { categories: lunch2 })
        $menu3.append(_Lunch).append(_Lunch2)

        var $menu4 = $('#divMenu4')

        var _kidsBreakfast = Mustache.render($('#menu-template').html(), { categories: KidsBreakfast })
        var _kidsLunch = Mustache.render($('#menu-template').html(), { categories: KidsLunch })
        //$menu4.append(_kidsBreakfast).append(_kidsLunch)
    }

});

