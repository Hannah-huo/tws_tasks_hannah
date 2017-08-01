'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
      //var arr_UpdatedCollection=[];
      for(var i=0;i<collectionA.length;i++){
            for(var j=0;j<objectB.value.length;j++){
                  if(collectionA[i].key===objectB.value[j]){
                        collectionA[i].count--;
                  }
            }
      }
  return collectionA;
}
