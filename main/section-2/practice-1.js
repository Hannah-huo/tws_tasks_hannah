'use strict';

module.exports = function countSameElements(collection) {
      var arr_SameElements = [];
      var counts = {};
      for(var i=0;i<collection.length; i++){
           var num = collection[i];
           counts[num] = counts[num] ? counts[num] + 1 :1;
      }
      var keyArray = Object.keys(counts);
      for(var i = 0; i<keyArray.length;i++){
            arr_SameElements.push({key:keyArray[i],count:counts[keyArray[i]]})
      }
  return arr_SameElements;
}
