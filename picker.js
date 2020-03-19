let heroObj = document.getElementById('hero');
let zodDateObj = document.getElementById('zodDate');
let showMeObj = document.getElementById('showMe');

let butariObj = document.getElementById("butari");
let buttauObj = document.getElementById("buttau");
let butgemObj = document.getElementById("butgem");
let butcanObj = document.getElementById("butcan");
let butleoObj = document.getElementById("butleo");
let butvirObj = document.getElementById("butvir");
let butlibObj = document.getElementById("butlib");
let butscoObj = document.getElementById("butsco");
let butsagObj = document.getElementById("butsag");
let butcapObj = document.getElementById("butcap");
let butaquObj = document.getElementById("butaqu");
let butpisObj = document.getElementById("butpis");

let soundplayerObj = document.getElementById("soundplayer")


butariObj.addEventListener('click', function () {
    swapZodInfo(1);

}, false);
buttauObj.addEventListener('click', function () {
    swapZodInfo(2);
}, false);
butgemObj.addEventListener('click', function () {
    swapZodInfo(3);
}, false);
butcanObj.addEventListener('click', function () {
    swapZodInfo(4);
}, false);
butleoObj.addEventListener('click', function () {
    swapZodInfo(5);
}, false);
butvirObj.addEventListener('click', function () {
    swapZodInfo(6);
}, false);
butlibObj.addEventListener('click', function () {
    swapZodInfo(7);
}, false);
butscoObj.addEventListener('click', function () {
    swapZodInfo(8);
}, false);
butsagObj.addEventListener('click', function () {
    swapZodInfo(9);
}, false);
butcapObj.addEventListener('click', function () {
    swapZodInfo(10);
}, false);
butaquObj.addEventListener('click', function () {
    swapZodInfo(11);
}, false);
butpisObj.addEventListener('click', function () {
    swapZodInfo(12);
}, false);

function playSomething(whichOne) {
    console.log('playSomething called' + whichOne);
    soundplayerObj.src = whichOne;
    soundplayerObj.play();
}

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

    //    showMeObj.innerHTML = dateToZodiac(monNum, dayNum);
    dateToZodiac(monNum, dayNum);
}

function dateToZodiac(whichMonth, whichDayOfMonth) {
    if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        //ARI = "Dianna Ross ... March 21 - April 19";
        swapZodInfo(1);
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        //TAU = "The Bee Gees ... April 20 - May 20";
        swapZodInfo(2);
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        //GEM = "Prince ... May 21 - June 20";
        swapZodInfo(3);
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        //CAN = "The Weather Girls... June 21 - July 22";
        swapZodInfo(4);
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        //LEO = "Madonna ... July 23 - August 22";
        swapZodInfo(5);

    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        // VIR = "Gloria Gaynor ... August 23 - September 22";
        swapZodInfo(6);
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        // LIB = "Earth,Wind,Fire ... September 23 - October 22";
        swapZodInfo(7);
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        // SCO = "Marvin Gaye ... October 24 - November 21";
        swapZodInfo(8);
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        //SAG = "Chaka Khan... November 22 - December 21";
        swapZodInfo(9);
    } else if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        //CAP = "Donna Summer ... December 22 - January 19";
        swapZodInfo(10);
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        //AQU = "Billy Ocean ... January 20 - February 18";
        swapZodInfo(11);
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        // PIS = "Rick James... Febryary 19 - March 20";
        swapZodInfo(12);
    } else {
        AstroSign = "INVALID DATE"
    }
}

function swapZodInfo(whichOne) {
    console.log('swap zod info called ' + whichOne)
    //swap out zodiac image
    //swap out zodiac desc w date range
    ///play a sound
    if (whichOne == 1) {
        console.log('Aries');
        showMeObj.innerHTML =
            "<h3> Dianna Ross </h3> <h4>March 21 - April 19 </h4>  <p>Diana Ross, once the lead singer for the Motown supergroup the Supremes, was the most successful female singer of the rock and roll era. In the next few decades, she continued to enjoy success with a solo career and numerous television and film appearances. </p>";
        heroObj.src = 'media/images/diana_ross.jpg';
        playSomething('sounds/diana_ross.mp3');
    } else if (whichOne == 2) {
        console.log('Taurus');
        showMeObj.innerHTML =
            "<h3> The Bee Gees </h3> <h4>April 20 - May 20 </h4>  <p>The Bee Gees were a pop music group formed in 1958. Their lineup consisted of brothers Barry, Robin, and Maurice Gibb. The trio were especially successful as a popular music act in the late 1960s and early 1970s, and later as prominent performers of the disco music era in the mid-to-late 1970s. </p>";
        heroObj.src = 'media/images/bee_gees.jpg';
        playSomething('sounds/bee_gees.mp3');
    } else if (whichOne == 3) {
        console.log('Gemini');
        showMeObj.innerHTML =
            "<h3> Prince </h3> <h4>May 21 - June 20 </h4>  <p>American musician Prince achieved worldwide fame in the 1980s with '1999' and 'Purple Rain,' the latter album also serving as the soundtrack for the popular film of the same name. </p>";
        heroObj.src = 'media/images/prince.jpg';
        playSomething('sounds/prince.mp3');
    } else if (whichOne == 4) {
        console.log('Cancer');
        showMeObj.innerHTML =
            "<h3>The Weather Girls </h3> <h4>June 21 - July 22</h4>  <p>Powerful vocalists Martha Wash and Izora Armstead, previously known as Two Tons o' Fun; reached the Hot 100 in 1983 with 'It's Raining Men'. </p>";
        heroObj.src = 'media/images/weather_girls.jpg';
        playSomething('sounds/weather_girls.mp3');
    } else if (whichOne == 5) {
        console.log('Leo');
        showMeObj.innerHTML =
            "<h3>Madonna</h3> <h4>July 23 - August 22</h4>  <p>American singer, songwriter, actress, and entrepreneur whose immense popularity in the 1980s and ’90s allowed her to achieve levels of power and control that were nearly unprecedented for a woman in the entertainment industry. </p>";
        heroObj.src = 'media/images/madonna.jpg';
        playSomething('sounds/madonna.mp3');
    } else if (whichOne == 6) {
        console.log('Virgo');
        showMeObj.innerHTML =
            "<h3>Gloria Gaynor</h3> <h4>August 23 - September 22</h4>  <p>Gloria Gaynor's legendary career spans the past 40 years, never lsoing monentum. She has achieved global stardom and musical recognition with hit songs in the charts in all four decades.</p>";
        heroObj.src = 'media/images/gloria_gaynor.jpg';
        playSomething('sounds/gloria_gaynor.mp3');
    } else if (whichOne == 7) {
        console.log('Libra');
        showMeObj.innerHTML =
            "<h3>Earth, Wind, &amp Fire</h3> <h4>September 23 - October 22</h4>  <p>Earth, Wind &amp Fire, American pop, soul, and jazz-fusion band that became one of the best-selling and most influential groups of the 1970s. </p>";
        heroObj.src = 'media/images/earth_wind_and_fire.jpg';
        playSomething('sounds/e_w_f.mp3');

    } else if (whichOne == 8) {
        console.log('Scorpio');
        showMeObj.innerHTML = "<h3>Marvin Gaye</h3> <h4>October 24 - November 21</h4>  <p>Marvin Gaye was a soul singer-songwriter with Motown in the 1960s and 1970s. He produced his own records and often addressed controversial themes. </p>";
        heroObj.src = 'media/images/marvin_gaye.jpg';
        playSomething('sounds/marvin_gaye.mp3');

    } else if (whichOne == 9) {
        console.log('Sagittarius');
        showMeObj.innerHTML =
            "<h3>Chaka Khan</h3> <h4>November 22 - December 21</h4>  <p>Chaka Khan, also popularly known as the Queen of Funk, is an American recording artist. In her career, which has spanned more than five decades, she has won a total of ten Grammys. She has also been named the 65th most successful dance artist of all time by Billboard magazine. </p>";
        heroObj.src = 'media/images/chaka_khan.png';
        playSomething('sounds/chaka_khan.mp3');

    } else if (whichOne == 10) {
        console.log('Capricorn');
        showMeObj.innerHTML =
            "<h3>Donna Summer</h3> <h4>December 22 - January 19</h4>  <p>Donna Summer rocketed to international super-stardom in the mid-1970s when her groundbreaking merger of R&B, soul, pop, funk, rock, disco and avant-garde electronica catapulted underground dance music out of the clubs of Europe to the pinnacles of sales and radio charts around the world. </p>";
        heroObj.src = 'media/images/donna_summer.jpg';
        playSomething('sounds/donna_summer.mp3');

    } else if (whichOne == 11) {
        console.log('Aquarius');
        showMeObj.innerHTML =
            "<h3>Billy Ocean</h3> <h4>January 20 - February 18</h4>  <p>Billy Ocean is a noted Trinidadian-English recording artist who spawned chart-topping singles like ‘Caribbean Queen (No More Love on the Run)’ and is considered the most popular British R&B singer-songwriter of the early to mid-1980s.</p>";
        heroObj.src = 'media/images/billy_ocean.jpg';
        playSomething('sounds/billy_ocean.mp3');

    } else if (whichOne == 12) {
        console.log('Pisces');
        showMeObj.innerHTML =
            "<h3>Rick James</h3> <h4>February 19 - March 20</h4>  <p>Grammy Award winning musician, songwriter, singer and record producer, Rick James was an immensely popular figure in the genre of funk music. One of the most brilliant singers, Rick James has an array of No.1 hits on the U.S. R&B charts to his credit.</p>";
        heroObj.src = 'media/images/rick_james.jpg';
        playSomething('sounds/rick_james.mp3');


    } else {
        console.log('Error in swapZodInfo');
    }

}

const btnModal = document.querySelectorAll('.toggle-modal');
btnModal.forEach(button => {
    button.addEventListener(
        'click',
        () => {
            modal.hidden = !modal.hidden;
        },
        false
    );
});
