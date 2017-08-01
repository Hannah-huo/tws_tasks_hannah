'use strict';

module.exports = function collectSameElements(collectionA, objectB) {   
    var result = [];
    for (var i = 0; i < collectionA.length; i++) {
        var obj = collectionA[i];
        for (var j = 0; j < objectB.value.length; j++) {
            if(obj.key == objectB.value[j]){
                result.push(obj.key);
            }
            
        }
    }
    return result;
}
