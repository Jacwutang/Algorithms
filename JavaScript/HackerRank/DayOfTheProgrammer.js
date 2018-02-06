// From  to , Russia's official calendar was the Julian calendar; since  they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in , when the next day after January  was February . This means that in , February  was the  day of the year in Russia.
//
// In both calendar systems, February is the only month with a variable amount of days; it has  days during a leap year, and  days during all other years. In the Julian calendar, leap years are divisible by ; in the Gregorian calendar, leap years are either of the following:
//
// Divisible by .
// Divisible by  and not divisible by .
// Given a year, , find the date of the  day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is .
//

function solve(year){
    // Complete this function


    if(year === 1918){
        return switchYear();
    } else if(year <= 1917){

        return julianCalendar(year);
    } else{
        return gregCalendar(year);
    }




}



function julianCalendar(year){

    if(year % 4  === 0){
        array[1] = 29;
    } else{
        array[1] = 28;
    }

    var sumDays = 0;
    var month = 0;

    while(256-sumDays > 31){
         sumDays += array[month];
         month += 1;
    }


    return `${formatSyntax(256-sumDays)}.${formatSyntax(month+1)}.${year}`;
}

function formatSyntax(num){
    var res = (num < 10)? `0${num}` : num

    return res;
}

function gregCalendar(year){

    if(year % 400  === 0){
        array[1] = 29;
    } else if (year % 4 === 0 && year % 100 !== 0){
        array[1] = 29;
    } else{
        array[1] = 28;
    }

    var sumDays = 0;
    var month = 0;

    while(256-sumDays > 31){
         sumDays += array[month];
         month += 1;
    }


    return `${formatSyntax(256-sumDays)}.${formatSyntax(month + 1)}.${year}`;
}

function switchYear(){
    var sumDays = 0;
    var month = 0;

    while(256 - sumDays > 31){
        sumDays += array[month];
        month += 1;

    }



    return `${formatSyntax(256-sumDays)}.${formatSyntax(month+1)}.${1918}`;
}
