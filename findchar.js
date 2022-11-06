 
  function hasString(inputString, searchString){
    let position = inputString.search(searchString).toLowercase;
    
    if(position== -1){
    console.log("itsNotThere")
    }
    console.log("String is There!");
      return position;
      
    }
    let myString="I need to learn this"
    let inputString="i";
    let isItThere = hasString("myString, inputString");
    