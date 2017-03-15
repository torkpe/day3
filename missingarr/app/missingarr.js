function findMissing(arr1, arr2) {
      var set1 = new Set(arr1);
   var set2 = new Set(arr2);

   var arr;   

   set1.forEach(function(val) {  
     if (!set2.has(val)) arr=val; 
   });
   set2.forEach(function(val) {  
     if (!set1.has(val)) arr=val; 
   });
    if (arr===undefined){
      return 0;
    }
   return arr;
}
   

module.exports=findMissing;