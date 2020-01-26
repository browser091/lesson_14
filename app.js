let str = prompt('Введите слово:');
while (str === '') {
    alert('Вы не ввели слово')
    str = prompt('Пожалуста, введите слово:');
}

function myResult(str) {
    return str == str.split('').reverse().join('');
}
if (myResult(str) === true) {
    alert('Это палиндромом');
} else {
    alert('Слово не является палиндромом');
}