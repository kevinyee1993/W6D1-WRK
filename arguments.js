function sum(...args) {

  let totSum = 0;
  [...args].forEach( (el) => {
    totSum += el;
  });
  return totSum;
}


//ES6 VERSION
Function.prototype.myBind = function (obj, ...bindArgs) {
  return (...callArgs) => {
    let args = [obj].concat(...bindArgs, ...callArgs);
    return this.call(...args);
  };
};

//ES5 VERSION
// Function.prototype.myBind = function () {
//   let args1 = Array.prototype.slice.call(arguments);
//   const a = this;
//   return function () {
//     let args2 = Array.prototype.slice.call(arguments);
//     args1 = args1.concat(args2);
//     console.log(args1);
//     return a.apply(args1[0], args1.slice(1));
//   };
// };

// const sum = curriedSum(4);
// sum(5)(30)(20)(1); // => 56

function curriedSum(numArgs) {
  let nums = [];
  let sum1 = 0;
  function _curriedSum(num) {
    nums.push(num);
    if (nums.length === numArgs) {
      for (let i = 0; i < nums.length; i++) {
        sum1 += nums[i];
      }
      return sum1;
    }
    return _curriedSum;
  }
  return _curriedSum;
}



Function.prototype.curry = function (numArgs) {
  let args = [];
  let b = this;

  function _curryCounter(arg) {
    args.push(arg);

    if(args.length === numArgs) {
      return b.apply(args[0], args.slice(1));
    } else {
      return _curryCounter;
    }
  }

  return _curryCounter;
};
