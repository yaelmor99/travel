let ctx = document.querySelector('#travel-lookup')
ctx.querySelector('button').onclick = ev =>{
    //let pid = ctx.querySelector('input').value
    let userName = ctx.querySelector('input').value
    //let results = db.regList.filter(r => r.personalID == pid);
    let results = db.regList.filter(r => r.Name == userName);

    let resultsElm = ctx.querySelector('.results')
    resultsElm.innerHTML = ''

    for (let i = 0; i < results.length; i++) {
        let _c = results[i];
        let h = _c.buildMyHtml()
        resultsElm.innerHTML += h;
    }
}
