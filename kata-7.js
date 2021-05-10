const checkAir = function (samples, threshold) {
  let air = 'Clean'
  let howDirty = []
  // my variables 
  let percent = samples.length * threshold
  // calculating the percent allowed
  for (let i = 0; i < samples.length; i++){
    if (samples[i] === 'dirty'){
      howDirty.push(samples[i])
    //finding how many indexes are dirty
    }
  }
  if (howDirty.length > percent){
    air = 'Polluted'
  // changing the result of air if the number of dirty's is higher then the threshold amount
  }
  return air
};







  console.log(checkAir(
    ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
    0.3
  ));
  
  console.log(checkAir(
    ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
    0.25
  ));
  
  console.log(checkAir(
    ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
    0.9
  ))