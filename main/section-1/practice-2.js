'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
      
      var arr_SameElements=[];
      for(var i=0; i<collectionA.length; i ++){
            for(var j=0; j<collectionB[0].length; j++){
                  if(collectionA[i] === collectionB[0][j]){
                        arr_SameElements.push(collectionA[i]);
                        break;
                  }
             }   
      }
      return arr_SameElements;
}
