'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
      for(var i=0;i<collectionA.length;i++){
            for(var j=0;j<objectB.value.length;j++){
                        if(objectB.value[j] == collectionA[i].key){
                               collectionA[i].count -= parseInt(collectionA[i].count / 3);
                        }
            }
      }
      return collectionA;
}
