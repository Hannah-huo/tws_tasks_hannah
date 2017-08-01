'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var arr_SameElements=[];
    for(var i=0; i<collectionA.length; i ++){
        for(var j=0; j<objectB.value.length; j++){
            if(collectionA[i] === objectB.value[j]){
                arr_SameElements.push(collectionA[i]);
                break;
            }
        }
    }
  return arr_SameElements;
}
