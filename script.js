const numbers = document.querySelectorAll('.numbers div'),
    screen = document.querySelector('.screen');


numbers[0].addEventListener('click', () => {
    screen.value = ""
})

numbers[1].addEventListener('click', () => {
    screen.value = screen.value.slice(0, screen.value.length - 1)
})

numbers[2].addEventListener('click', () => {
    if(screen.value.slice(screen.value.length - 3, screen.value.length) !== ' % ' && screen.value !== '') {
        screen.value += " % "
    }
})

numbers[3].addEventListener('click', () => {
    if(screen.value.slice(screen.value.length - 3, screen.value.length) !== ' / ' && screen.value !== '') {
        screen.value += " / "
    }
})

numbers[4].addEventListener('click', () => {
    screen.value += 1
})

numbers[5].addEventListener('click', () => {
    screen.value += 2
})

numbers[6].addEventListener('click', () => {
    screen.value += 3
})

numbers[8].addEventListener('click', () => {
    screen.value += 4
})

numbers[9].addEventListener('click', () => {
    screen.value += 5
})

numbers[10].addEventListener('click', () => {
    screen.value += 6
})

numbers[12].addEventListener('click', () => {
    screen.value += 7
})

numbers[13].addEventListener('click', () => {
    screen.value += 8
})

numbers[14].addEventListener('click', () => {
    screen.value += 9
})

numbers[16].addEventListener('click', () => {
    screen.value += '00'
})

numbers[17].addEventListener('click', () => {
    screen.value += 0
})

numbers[18].addEventListener('click', () => {
    screen.value += ','
})