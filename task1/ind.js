for( let i = 0; i < 9; i++) {
    $(`#${i}`).on('click', () => {
        setValues();
    });
};

$('#result').on('change', () => {
    get($(`#result`).val());
});

function setValues() {
    let arrayOfResult = [];
    for( let i = 0; i < 9; i++) {
        if (document.getElementById(i).checked) {
            arrayOfResult.push(1);
        }
        else {
            arrayOfResult.push(0);
        }
    }
    arrayOfResult.unshift(0);
    send(arrayOfResult);
}

async function send(array) {
    await $.ajax({
        url: 'php/backend.php',
        type: 'post',
        cache: false,
        data: {result: array, isNumber: false},
        success: function (data) {
            changeNumber(data);
        }
    })
}

async function get(number) {
    if (number%2 === 1) {
        alert("Число неверно.");
        return false;
    }
    await $.ajax({
        url: 'php/backend.php',
        type: 'post',
        cache: false,
        data: {result: number, isNumber: true},
        success: function (data) {
            changeArray(data);
        }
    })
}

function changeArray(number) {
    let result = number.split('');
    for( let i = 0; i < 9; i++) {
        if (result[i] == 1) {
            $(`#${i}`).prop('checked', true);
        }
        if (result[i] == 0) {
            $(`#${i}`).prop('checked', false);
        }
    }
}

function changeNumber(number) {
    $(`#result`).val(number);
}
