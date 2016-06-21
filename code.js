var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

// problem 1
var message = "Months listed are ";

function completeMessage(ms,list){

  for (var i = 0;  i < list.length; i++){
    if (i < list.length - 1){
      ms+=list[i]+', ';
    }
    else {
      ms+=list[i]+'.';
    }
  }
  return ms;
}
// problem 3
function oneString(list){

  var str = "";
  for (var i = 0; i< list.length; i++){

    str +=list[i];
  }
  return str;
}
// problem 4
function numTotal(list){

  var num = 0;
  for (var i = 0; i< list.length; i++){

    num +=list[i];
  }
  return num;
}
//problem 5
function sndBool(blist, nlist){

  if( blist[1] ){
    console.log(nlist[0] + nlist[nlist.length-1]);
  }
  else{
    console.log(Math.pow(nlist[1],2));
  }
}
// problem 6
function boolSignal(blist, nlist){

  for(var i=0; i < blist.length; i++){
    if(blist[i]){
      console.log(nlist[i]);
    }
  }
}

function masterArr(strList,blist, nlist){

  var master = [];

  var pusher= function(list){
    for (var i= 0; i < list.length; i++){
      master.push(list[i]);
    }
  };
  pusher(strList);
  pusher(blist);
  pusher(nlist);

  return master.reverse();

}


console.log(completeMessage(message,stringList));
console.log(numList[numList.length- 1]);
console.log(oneString(numList));
console.log(numTotal(numList));
sndBool(boolList,numList);
boolSignal(boolList,numList);
console.log(masterArr(stringList, boolList,numList));
