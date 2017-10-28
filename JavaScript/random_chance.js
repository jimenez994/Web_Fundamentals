 
 
function games(quarters) {
    var win = 56;
    var leftover = quarters;
    for(var i = 0; i < quarters; ++i){
      leftover--;
    var random = Math.floor((Math.random() * 100 ) + 1);
      var coins = Math.floor((Math.random() * 100 ) + 1);
      if(coins < 50){
        coins = coins + 50;
        }
      if(random === win){
        console.log("you won", coins, leftover);
          return;
        }else{
          if(leftover != 0){
            console.log("sorry try again");
            }else{
          console.log("no more coins left");
            }
          }
    }
     
  }
  games(5);