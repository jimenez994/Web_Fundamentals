var days = 30;

var money = 0.1;

for(var i = 1; i <= days; i++){
    money = money*2;
    console.log(i ,money);
    
} 

//How many days would it take the servant to make $10,000?//
var money = 10000;
var days = 0;
while (money >= 0.01) {
    money = money/2;
    days++
    console.log(days,money);
    
}
//How about 1 billion?//
var money = 1000000000000;
var days = 0;
while (money >= 0.01) {
    money = money/2;
    days++
    console.log(days,money);
    
}
//In JavaScript, there is a value Infinity . How many days until the servant has infinite money?//
var money = Infinity;
var days = 0;
while (money >= 0.01) {
    money = money/2;
    days++
    console.log(days,money);
    
}
