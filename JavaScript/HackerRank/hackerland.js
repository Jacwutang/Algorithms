// Hackerland is a one-dimensional city with  houses, where each house  is located at some  on the -axis. The Mayor wants to install radio transmitters on the roofs of the city's houses. Each transmitter has a range, , meaning it can transmit a signal to all houses units of distance away.
//
// Given a map of Hackerland and the value of , can you find and print the minimum number of transmitters needed to cover every house in the city? (Every house must be covered by at least one transmitter) Each transmitter must be installed on top of an existing house.
//
// 5 1
// 1 2 3 4 5
//
// output: 2
//https://www.hackerrank.com/challenges/hackerland-radio-transmitters/problem

function hackerlandRadioTransmitters(x, k) {

    let houses = x.sort((a,b) => a - b);
    let count = 0;
    let index = 0;
    let location = 0;
    //[2,4,5,6,7,8,11,12]

    while(index < houses.length ){

        location = houses[index] + k;
        while(location >= houses[index]){
            index++;
        }

        index--;
        location = houses[index] + k;

        while(location >= houses[index]){
            index++;
        }

        count++;




    }

    return count;
}
