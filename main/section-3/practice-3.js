'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var arr_SameElements = [];
      var counts = {};
      for(var i=0;i<collectionA.length; i++){
           var num = collectionA[i];
           counts[num] = counts[num] ? counts[num] + 1 :1;
      }
      var keyArray = Object.keys(counts);
      
      for (var i = 0; i < keyArray.length; i++) {
            for (var j = 0; j < objectB.value.length; j++) {
                var count = counts[keyArray[i]];
                if (keyArray[i] === objectB.value[j]) {
                    counts[keyArray[i]] -= parseInt(count / 3);
                    break;
                }
            }

        }
        for (var i = 0; i < keyArray.length; i++) {
            arr_SameElements.push({ key: keyArray[i], count: counts[keyArray[i]] })
        }
  return arr_SameElements;
}
