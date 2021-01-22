
/*Start fast problem */
function kilometerToMeter(kilo){
    var meter = kilo * 1000;
    return meter;
}

var result = kilometerToMeter(1);
console.log(result);

/*End fast problem */


/*Start second problem */

function budgetCalculator(watch,phone,laptop){

    var shopping1 = watch * 50;
    var shopping2 = phone * 100;
    var shopping3 = laptop * 500;
    if(watch==0 || phone==0 || laptop==0){
        return "error";
    }
    else{
        var total = shopping1 + shopping2 + shopping3;
        return total;
    }
}

    var result = budgetCalculator(4,4,3);
    console.log(result);

/*End second problem */


/*Start third problem */

function hotelCost(day){
    var cost = 0;
    if(day<=10){
        cost = day * 100;
    }
    else if(day<=20){
        var fastTenDays = 10 * 100;
        var remainingDays = day - 10;
        var secondTenDays = remainingDays * 80;
        cost = fastTenDays + secondTenDays;
    }
    else{
        var fastTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = day - 20;
        var unlimitedDays = remainingDays * 50;
        cost = fastTenDays + secondTenDays + unlimitedDays;
    }
    return cost;
}

    var result = hotelCost(22);
    console.log(result);

/*End third problem */


/*Start forth problem */

function megaFriend(arr){
    var lgth = 0;
    var longest;
  
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            var lgth = arr[i].length;
            longest = arr[i];
        }
    }
    return longest;
}
    var result = megaFriend(['Roni','Robin','showvik','shreeponna','swayem']);
    console.log(result);


/*End forth problem */
