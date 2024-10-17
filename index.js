function canDivide(smaller, larger) {
    if (larger % smaller === 0) {
      return true;
    } else {
      return false;
    }
  }
res=canDivide(2, 4)
console.log(res)

//== and  === are different 
//== checks value also does type conversion . first does type conversion if necessary and then compares the value
//=== checks value and type 
// ? : is a ternary operator  which is used to replace if else condition in one line 
/// in java script the input is taken from html page