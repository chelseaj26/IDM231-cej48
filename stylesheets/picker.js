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
        console.log('WRONGGGGGGGGGGG!');
    }

    showMeObj.innerHTML = dateToZodiac(monNum, dayNum);
}

function dateToZodiac(whichMonth, whichDayOfMonth) {
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "Jeff Bezos ... December 22 - January 19";
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "Tim Cook ... November 22 - December 21";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "Evan Spiegel ... October 23 - November 21";
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "Jack Dorsey ... September 23 - October 22";
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        AstroSign = "Mark Zuckerberg ... August 23 - September 22";
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        AstroSign = "Elon Musk ... July 23 - August 22";
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "Dan Schulman ... June 21 - July 22";
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        AstroSign = "Logan Green ... May 21 - June 20";
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "Satya Nadella ... April 20 - May 20";
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        AstroSign = "Reed Hastings ... March 21 - April 19";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "Jason Citron ... Febryary 19 - March 20";
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "Stewart Butterfield ... January 20 - February 18";
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 1 && whichDayOfMonth <= 18)) {

    } else {
        AstroSign = "INVALID DATE"
    }
    return AstroSign;
}
