




$('button').click(function () {
    $("#item" + itemCount).replaceWith('<p>' + exercise + '</p>')
    $("#itemReps" + itemCount).replaceWith('<p>' + setsReps + '</p>')
    $("#itemKilo" + itemCount).replaceWith('<p>' + exercise + '</p>');
})


$('#test').keypress(function(keypressEvent) {
    let key = keypressEvent.which;
    if (key == 13) {
        let test = $('#test').val();
        if (test == '') {
            return;
        } else {
            $('#testtwo').append('<p>' + test + '</p>');
        }
    }
})

$('#inputExercise').keypress(function(keypressEvent) {
    let key = keypressEvent.which;
    if (key == 13) {
        let inputExercise = $('#inputExercise').val();
        if (test == '') {
            return;
        } else {
            $('#testthree').append('<p>' + inputExercise + '</p>');
        }
    }
})