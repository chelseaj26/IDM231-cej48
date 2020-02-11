let zodDateObj = document.getElementById('zodDate');
let showMeObj = document.getElementById('showMe');

function computeZod() {
    let userBday = zodDateObj.value;
    console.log('userBday is ' + userBday);
    //2000-11-26
    let monStr = userBday.substr(5, 2);
    let dayStr = userBday.substr(8, 2);
    //convert str into number
    let monNum = parseInt(monStr);
    let dayNum = parseInt(dayStr);

    console.log('monNum = ' + monNum);
    console.log('dayNum = ' + dayNum);

    if (isNaN(monNum)) {
        console.log('WRONG!')
    }

    showMeObj.innerHTML = dateToZodiac(monNum, dayNum);
}


/*'Cap',
'Sag',
'Sco',
'Lib',
'Vir',
'Leo',
'Can',
'Gem',
'Tau',
'Ari',
'Pis',
'Aqu'
];

let zodDates = [
'Dec 22.. Jan 19',
'Nov 22.. Dec 21',
'Oct 24.. Nov 21',
'Sep 23.. Oct 23',
'Aug 23.. Sep 22',
'Jul 23.. Aug 22',
'Jun 22.. Jul 22',
'May 21.. Jun 21',
'Apr 20.. May 20',
'Mar 21.. Apr 19',
'Feb 19.. Mar 20',
'Jan 20.. Feb 18'
]; */

function dateToZodiac(whichMonth, whichDayOfMonth) {
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "Donna Summer";
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "Chaka Khan";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "The Bee Gees";
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "Marvin Gaye";
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        AstroSign = "Gloria Gaynor";
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        AstroSign = "Madonna";
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "The Weather Girls";
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        AstroSign = "Prince";
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "Earth, Wind, & Fire";
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        AstroSign = "Diana Ross";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "Billy Ocean";
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "Rick James";
    } else {
        AstroSign = "INVALID DATE"
    }
    return AstroSign;
}
