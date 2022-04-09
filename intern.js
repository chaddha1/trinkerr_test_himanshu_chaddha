let keys = ["idea", "idae", "bsnl", "nsbl", "grasim", "bata"];

function checkAnagrams(arr){
   let p1 = 0, p2= keys.length, result = [];
   while(p1<p2){
      const res = strAnagrams(keys[p1], keys[p1+1]);
      if(res){
         result.push([keys[p1], keys[p1+1]]);
      }else{
         result.push([keys[p1]],[keys[p1+1]]);
         
      }
      p1+=2;
   }
   return result;
}

function strAnagrams(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    
   for(let i=0; i< str1.length; i++){
       let found = false;
       for(let j=0; j< str2.length; j++){
           if(str1[i] === str2[j]){
               found = true;
           }
       }
       if(!found){
           return false;
       }
   }
    return true;
}

checkAnagrams(keys)