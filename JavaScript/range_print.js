function printRange(start, end , by) {
    if(by === undefined){
      by = 1; 
      }
    if(end === undefined){
      end = start;
      start = 0;
      }
    
    
    start = start - by;
    end = end - by;
    
   
      while (start != end) {
        if(start < end ){
          start = start + by;
          console.log(start);
          
      }else{
        start = start - by;
        console.log(start);
        
        }
      }
  }
  printRange(90);