function convertHTML(str) {
  let regex = /[&|<|>|"|']/g;
  let htmlString = str.replace(regex, function(match){
    if(match === "&"){
      return "&amp;";
    }else if(match === "<"){
      return "&lt;"
    }else if(match === ">"){
      return "&gt;";
    }else if(match === '"'){
      return "&quot;";
    }else{
      return "&apos;";
    }
  });
      
  return htmlString;
}
