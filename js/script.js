
var pizzaTotalSet = false;

$(document).ready(function(){

    $('#flour').change(function() { 
        var flour = parseFloat($('#flour').val());
        calculateValuesBasedOnFlour(flour)
    }); 

    $('#water').change(function() { 
        var water = parseFloat($('#water').val());
        var flour = water / 0.65;
        calculateValuesBasedOnFlour(flour)
    });

    $('#sugar').change(function() { 
        var water = parseFloat($('#sugar').val());
        var flour = sugar / 0.015;
        calculateValuesBasedOnFlour(flour)
    });

    $('#salt').change(function() { 
        var salt = parseFloat($('#salt').val());
        var flour = salt / 0.03;
        calculateValuesBasedOnFlour(flour)
    });

    $('#oil').change(function() { 
        var oil = parseFloat($('#oil').val());
        var flour = oil / 0.03;
        calculateValuesBasedOnFlour(flour)
    });

    $('#yeast').change(function() { 
        var yeast = parseFloat($('#yeast').val());
        var flour = yeast / 0.002;
        calculateValuesBasedOnFlour(flour)
    });

    $('#pizzaTotal').change(function() { 
        var pizzaTotal = parseFloat($('#pizzaTotal').val());
        var flour = pizzaTotal * 190;
        var pizzaTotalSet = true;
        calculateValuesBasedOnFlour(flour);
    });

});

function calculateValuesBasedOnFlour(flour){
        var water = flour * 0.63;
        var salt = flour * 0.03;
        var oil = flour * 0.03;
        var yeast = flour * 0.002;
        var sugar = flour * 0.015;

        setValues(flour, water, salt, yeast, oil, sugar)
}

function setValues(flour, water, salt, yeast, oil, sugar, pizzaTotal){
    $('#flour').val(Math.round( Math.abs(flour * 10 )) / 10);
    $('#water').val(Math.round( Math.abs(water * 10 )) / 10);
    $('#salt').val(Math.round( Math.abs(salt * 10 )) / 10);
    $('#yeast').val(Math.round( Math.abs(yeast * 10 )) / 10);
    $('#oil').val(Math.round( Math.abs(oil * 10 )) / 10);
    $('#sugar').val(Math.round( Math.abs(sugar * 10 )) / 10);

    if(pizzaTotalSet == true) {
        pizzaTotalSet = false;
    }
    else {
        var pizzaTotal = (water + salt + flour + yeast + oil) / 320;
        $('#pizzaTotal').val(Math.round( Math.abs(pizzaTotal * 10 )) / 10);
        pizzaTotalSet = false;
    }
}

