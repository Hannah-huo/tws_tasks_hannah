'use strict';

module.exports = function countSameElements(collection) {
      var arr_SameElements = [];
      var counts = {};
      var specCounts = {};
      var result = [];
      for(var i=0;i<collection.length; i++){
            var num = collection[i];
           if(num.indexOf('-') !== -1) {
                 var kvPair = collection[i].split('-');
                 result.push({name: kvPair[0], summary: kvPair[1] ? kvPair[1] : 1});
                 /*if(kvPair.length === 2){
                        specCounts[kvPair[0]] = parseInt(kvPair[1]);
                 }*/
           }else if(num.indexOf(':') !== -1){
                 var kvPair = collection[i].split(':');
                 result.push({name: kvPair[0], count: kvPair[1] ? kvPair[1] : 1});
                 /*if(kvPair.length === 2){
                        specCounts[kvPair[0]] = kvPair[1];
                 }*/
           }else if(num.indexOf('[') != -1){
                 /*var k = num.substring(0,1)
                 var v = parseInt(num.substring(num.indexOf('[')+1,num.indexOf(']')));
                 specCounts[k]=v;*/
                var splitNum = num.split('');
                var summary = parseInt(num[2] + num[3]);
                var name = num[0];
                result.push({name:name, summary: summary});
           }else{
                  //counts[num] = counts[num] ? counts[num] + 1 :1;
                  
                  function findInResult(result, num){
                        result.forEach(function(element) {
                              if(element.name === num){
                                    return true;
                              }
                        }, this);
                        return false;
                  }
                  //findInResult 需要自己实现
                  if(!findInResult(result, num)) {
                        result.push({name: num, summary: 1});
                  } else {
                        var k = result.find(r => num === r.name);
                        k.summary ++;
                  }
           }
      }
      
      return result;
      /*var keyArray = Object.keys(counts);
      var specArray = Object.keys(specCounts);
      console.log(specArray);
      for(var i = 0; i<keyArray.length;i++){
            var count = counts[keyArray[i]];
            for(var j =0;j<specArray.length;j++){
                  if(keyArray[i] === specArray[j]){
                       count +=  specCounts[specArray[j]];
                  }
            }
            arr_SameElements.push({name:keyArray[i],summary:count})
      }
      return arr_SameElements;*/
      
}
