const urlEncode = function(text) {
    let revamp = text.trim()
    const strCopy = revamp.split(' ');
    return strCopy.join('%20')
  };
  
  console.log(urlEncode("Lighthouse Labs"));
  console.log(urlEncode(" Lighthouse Labs "));
  console.log(urlEncode("blue is greener than purple for sure"));
  