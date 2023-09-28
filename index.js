
function go_to_1() {
    let toggleSwitch = document.getElementsByClassName('redButton')[0];
    var r = document.querySelector(':root')
    toggleSwitch.classList.add('position1');
    toggleSwitch.classList.remove('position2');
    toggleSwitch.classList.remove('position3');
    r.style.setProperty('--mainBackground', 'hsl(222, 26%, 31%)')
    r.style.setProperty('--toggleBackground', 'hsl(223, 31%, 20%)')
    r.style.setProperty('--screenBackground', ' hsl(224, 36%, 15%)')
    r.style.setProperty('--del_reset_KeyBackground', 'hsl(225, 21%, 49%)')
    r.style.setProperty('--del_reset_Shadow', 'hsl(224, 28%, 35%)')
    r.style.setProperty('--del_reset_FontColor', 'white')
    r.style.setProperty('--resetHover', '#A2B3E1')
    r.style.setProperty('--equalsKeyBackground', 'hsl(6, 63%, 50%)')
    r.style.setProperty('--equalsKeyShadow', 'hsl(6, 70%, 34%)')
    r.style.setProperty('--equalsHover', '#F96C5B')
    r.style.setProperty('--equalsFontColor', 'white')
    r.style.setProperty('--mainButtonBackground', 'rgb(240, 233, 233)')
    r.style.setProperty('--mainButtonKeyShadow', 'hsl(28, 16%, 65%)')
    r.style.setProperty('--mainButtonFontColor', 'hsl(221, 14%, 31%)')
    r.style.setProperty('--textColor', 'white')
    r.style.setProperty('--mainButtonHover', 'white')
}

function go_to_2() {
    let toggleSwitch = document.getElementsByClassName('redButton')[0];
    var r = document.querySelector(':root')
    toggleSwitch.classList.add('position2');
    toggleSwitch.classList.remove('position1');
    toggleSwitch.classList.remove('position3');
    r.style.setProperty('--mainBackground', 'hsl(0, 0%, 90%)')
    r.style.setProperty('--toggleBackground', 'hsl(0, 5%, 81%)')
    r.style.setProperty('--screenBackground', 'hsl(0, 0%, 93%)')
    r.style.setProperty('--del_reset_KeyBackground', 'hsl(185, 42%, 37%)')
    r.style.setProperty('--del_reset_Shadow', 'hsl(185, 58%, 25%)')
    r.style.setProperty('--del_reset_FontColor', 'white')
    r.style.setProperty('--resetHover', '#A2B3E1')
    r.style.setProperty('--equalsKeyBackground', 'hsl(25, 98%, 40%)')
    r.style.setProperty('--equalsKeyShadow', 'hsl(25, 99%, 27%)')
    r.style.setProperty('--equalsHover', '#F96C5B')
    r.style.setProperty('--equalsFontColor', 'white')
    r.style.setProperty('--mainButtonBackground', 'hsl(45, 7%, 89%)')
    r.style.setProperty('--mainButtonKeyShadow', 'hsl(35, 11%, 61%)')
    r.style.setProperty('--mainButtonFontColor', 'hsl(221, 14%, 31%)')
    r.style.setProperty('--textColor', 'hsl(60, 10%, 19%)')
    r.style.setProperty('--mainButtonHover', 'white')
}

function go_to_3() {
    let toggleSwitch = document.getElementsByClassName('redButton')[0];
    var r = document.querySelector(':root')
    toggleSwitch.classList.add('position3');
    toggleSwitch.classList.remove('position1');
    toggleSwitch.classList.remove('position2');
    r.style.setProperty('--mainBackground', 'hsl(268, 75%, 9%)')
    r.style.setProperty('--toggleBackground', 'hsl(268, 71%, 12%)')
    r.style.setProperty('--screenBackground', 'hsl(268, 71%, 12%)')
    r.style.setProperty('--del_reset_KeyBackground', 'hsl(281, 89%, 26%)')
    r.style.setProperty('--del_reset_Shadow', 'hsl(290, 70%, 36%)')
    r.style.setProperty('--del_reset_FontColor', 'white')
    r.style.setProperty('--resetHover', '#8631B0')
    r.style.setProperty('--equalsKeyBackground', 'hsl(176, 100%, 44%)')
    r.style.setProperty('--equalsKeyShadow', 'hsl(177, 92%, 70%)')
    r.style.setProperty('--equalsHover', '#94FFF9')
    r.style.setProperty('--equalsFontColor', 'hsl(198, 20%, 13%)')
    r.style.setProperty('--mainButtonBackground', 'hsl(268, 47%, 21%)')
    r.style.setProperty('--mainButtonKeyShadow', 'hsl(285, 91%, 52%)')
    r.style.setProperty('--mainButtonFontColor', 'hsl(52, 100%, 62%)')
    r.style.setProperty('--textColor', 'hsl(52, 100%, 62%)')
    r.style.setProperty('--mainButtonHover', '#6B34AC')
}

let buttons = document.querySelectorAll("button")
let string = ''

function readInput(input) {  
    let resSpot = document.querySelector(".res")
    if (input == "=") {
        string = String(eval(string))
        resSpot.innerHTML = string
        console.log(string)
    } else if (input == "RESET") {
        string = ""
        resSpot.innerHTML = string
    }else if(input=="DEL"){
        string = string.slice(0,-1)
        resSpot.innerHTML = string
    } else {
        string += input
        resSpot.innerHTML = string
        console.log(string)
    }
}
