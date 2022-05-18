function truthCheck(collection, pre) {
  let newCollection = [];
    collection
    .filter(tur=>{
        if(!tur[pre]){
            newCollection.push(tur)
        }
    })
    if(newCollection.length>0){
        return false
    }
    return true
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
