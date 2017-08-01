'use strict';

module.exports = function countSameElements(collection) {
      var arr_SameElements = [];
      var counts = {};
      var specCounts = {};
      for(var i=0;i<collection.length; i++){
            var num = collection[i];
           if(num.indexOf('-') != -1) {
                 var kvPair = collection[i].split('-');
                 if(kvPair.length === 2){
                        specCounts[kvPair[0]] = parseInt(kvPair[1]);
                 }
           }else if(num.indexOf(':') != -1){
                 var kvPair = collection[i].split(':');
                 if(kvPair.length === 2){
                        specCounts[kvPair[0]] = kvPair[1];
                 }
           }else if(num.indexOf('[') != -1){
                 var k = num.substring(0,1)
                 var v = parseInt(num.substring(num.indexOf('[')+1,num.indexOf(']')));
                 specCounts[k]=v;
           }else{
                  counts[num] = counts[num] ? counts[num] + 1 :1;
           }
      }
      var keyArray = Object.keys(counts);
      var specArray = Object.keys(specCounts);
      for(var i = 0; i<keyArray.length;i++){
            var count = counts[keyArray[i]];
            for(var j =0;j<specArray.length;j++){
                  if(keyArray[i] === specArray[j]){
                       count +=  specCounts[specArray[j]];
                  }
            }
            arr_SameElements.push({name:keyArray[i],summary:count})
      }
      return arr_SameElements;
      
}
