function Test(num) {
  if(num <=0){
     console.log("All Done");
     return;
  }
  console.log('num',num);
  num--;
  Test(num);
}
Test(5);
