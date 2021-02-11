 // ver 1.0
 function test(tab){
  var hash = {};
 for(var i = 0; i < tab.length; i++){
    var x = tab[i];
    if(hash[x])
       alert("Already in");
    else
       hash[tab[i]] = {index : i};
 }
 for(var j in hash)
     alert(hash[j].index);
}
 var nouv = [0,1,2,3,4,'a','b','c',1,5,'a'];
 test(nouv);
