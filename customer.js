

let Customer = function Customer(name, personalID, travelID, passengersCount){
    this.Id = db.regList.length == 0 ? 3 :
        db.regList[ db.regList.length -1 ].Id + 1;

    this.Name = name
    this.personalID = personalID
    this.TravelId = travelID
    this.passengers = parseInt( passengersCount )

    this.buildMyHtml = function buildMyHtml(){
        let travel = null

        //very short
        travel = db.travelList.find(t => t.Id == this.TravelId)

        //little short
        travel = db.travelList.find(function(t){return t.Id == this.TravelId})

        //long old
        for (let i = 0; i < db.travelList.length; i++) {
            const t = db.travelList[i];
            if (t.Id == this.TravelId) {
                travel = t
                break;
            }
        }


        let travelTotal = travel.getTotalPrice(this.passengers)

        return `<div class="costumer-item item">
            <div class="c-id">${this.Id}</div>
            <div class="c-name">${this.Name}</div>
            <div class="c-personalID">${this.personalID}</div>
            <div class="c-TravelId">${travel.Name}</div>
            <div class="c-passengers">${this.passengers}</div>
            <div class="c-total">${travelTotal}</div>
        </div>`
    }
}

Customer.addNewCustomer = function(c){
    db.regList.push(c)
    let h = c.buildMyHtml()
    regListElm.innerHTML += h;
}

db.regList.push(new Customer('lerner', 123, 3, 2))
db.regList.push(new Customer('fogrl', 2123, 2, 2))
db.regList.push(new Customer('dahbasf', 0, 1, 10))



let regListElm = document.getElementById('reg-list')
for (let i = 0; i < db.regList.length; i++) {
    let _c = db.regList[i];
    let h = _c.buildMyHtml()
    regListElm.innerHTML += h;
}
