


let itemCount = 0;

$('#inputExercise').keypress(function (keyPressEvent) {
    let key = keyPressEvent.which;
    if (key == 13) {
    let exercise = $('#inputExercise').val()
    if (exercise == '') {
        return;
    } else {
        itemCount++;

        $('#firstRow').append('<tr id="item' + itemCount + '"><td>' + exercise + '</td></tr>');
        $('#inputExercise').hide();
        $('#inputRepsSets').css('visibility', 'visible');
        $('#inputExercise').val('')
    }
}
});

$('#inputRepsSets').keypress(function (keyPressEvent) {
    let key = keyPressEvent.which;
    if (key == 13) {
    let RepsSets = $('#inputRepsSets').val()
    if (RepsSets == '') {
        return;
    } else {
        itemCount++;

        $('#item1').append('<td id="item' + itemCount + '">' + RepsSets + '</td>');
        $('#inputRepsSets').hide();
        $('#inputKilograms').css('visibility', 'visible');
        $('#inputRepsSets').val('')
    }
}
});

$('#inputKilograms').keypress(function (keyPressEvent) {
    let key = keyPressEvent.which;
    if (key == 13) {
    let Kilograms = $('#inputKilograms').val()
    if (Kilograms == '') {
        return;
    } else {
        itemCount++;

        $('#item1').append('<td id="item' + itemCount + '">' + Kilograms + '</td>');
        $('#inputKilograms').hide();
        $('#inputExercise').show();
        $('#inputKilograms').val('')
    }
}
});