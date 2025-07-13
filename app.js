function showCallFunc (fn){
  const value = 10;
  fn(value)
}

function fn(val){
    console.log(val)
}

showCallFunc(fn);