

let db = {
    travelList:[],
    regList:[]
}

let Travel = function Travel(name, price){
    this.Id = db.travelList.length == 0 ? 1 :
        db.travelList[ db.travelList.length -1 ].Id + 1;

    this.Price = price
    this.Name = name

    this.getTotalPrice = function getTotalPrice(numOfReg){
        return numOfReg * this.Price
    }
}

Travel.getTravelsCount = function getTravelsCount(){
    return db.travelList.length;
}
Travel.buildlHtml = function buildlHtml(travelObject){
    return `<div class="travel-item item" travel-id="${travelObject.Id}">
        <div class="travel-name">${travelObject.Name}</div>
        <div class="travel-price">${travelObject.Price}</div>
    </div>`;
}

//var t1 = new Travel('hiland blue', 100)
//var t2 = new Travel('hiland green', 100)



db.travelList.push(new Travel('london', 300))
db.travelList.push(new Travel('miron', 200))
db.travelList.push(new Travel('Israel', 100))
db.travelList.push(new Travel('USA', 500))


let travelListElm = document.getElementById('travel-list')
for (let i = 0; i < db.travelList.length; i++) {
    let _t = db.travelList[i];
    let h = Travel.buildlHtml(_t)
    travelListElm.innerHTML += h;
}
