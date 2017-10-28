function fancy(arr,symbol) {
    if(symbol === undefined){
      symbol = "->";
      }
      var num = 0;
      
      for(var i = 0; i <= arr.length; i++){
          console.log(num, symbol, arr[i] )
          num++
          if(num == arr.length){
            return;
            }
      }
      
  }
  fancy(["James", "Jill", "Jane", "Jack"]);