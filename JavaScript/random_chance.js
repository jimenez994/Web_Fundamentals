 
 
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
  // games(35);
  var arr = [1,2,3];
  function reverse(arr) {
    console.log(Math.floor(arr.length/2))
    for(var i = 0; i < arr.length/2; i++){
      var temp = arr[i];
      arr[i]= arr[arr.length-i-1];
      arr[arr.length - i - 1] = temp;
    }
    console.log(arr);
  }
  reverse(arr);