

let box2 = document.getElementById('box2')
let fir = document.getElementById('first')
let sec = document.getElementById('second')
let json = document.getElementById('json')
let param = document.getElementById('param')
let add = document.getElementById('add')
let submit = document.getElementById('submit')
let newParams = document.getElementById('newParams"')
sec.style.display = 'none'

json.addEventListener('click', () => {
    fir.style.display = 'none'
    sec.style.display = 'block'

})
param.addEventListener('click', () => {
    fir.style.display = 'flex'
    sec.style.display = 'none'

})
function added(string) {
    let news = document.createElement('div')
    news.innerHTML = string
    return
}
let i = 1


add.addEventListener('click', () => {

    let news = document.createElement('div')
    let st

    st = `   <div id="first" class="row my-3 ">
    <h4>PARAMETER ${i+1} :</h4>
    
    <input type="text" class="form-control comp" placeholder="ENTER ${i+1} KEY" id="park-${i+1}">
    
    
    <input type="text" class="form-control comp" placeholder="ENTER ${i+1} VALUE" id="parv-${i+1}">
    
    <button type="button"  class=" sub btn btn-primary"><b>-</b> </button>
    
    </div>`   
    i++
    news.innerHTML = st
    news.classList = 'container'
    fir.appendChild(news)
    let sub = document.getElementsByClassName('sub')
    for (let item of sub) {
        item.addEventListener('click', (e) => {
            let a = confirm('ARE YOR SURE TO DELETE ')

            if (a === true) {
                e.target.parentElement.parentElement.remove()
            }

        })
    }
})
submit.addEventListener('click', () => {
 
        let response = document.getElementById('responsebox').innerHTML = '<b>WAIT FOR RESPONSE...</b>'
    

   
    let req = document.querySelector("input[name='requestType']:checked").value
    let con = document.querySelector("input[name='contentType']:checked").value
    let url = document.getElementById('url').value;

    if (con == 'param') {
         data = {}
        let w = 1
        for (let j = 0; j < i + 1; j++) {
            if (document.getElementById('park-' + w) != undefined) {
                let key = document.getElementById('park-' + w).value
                let value = document.getElementById('parv-' + w).value
                data[key] = value

                w++
            }

        }

        data = JSON.stringify(data)
    
    }
    else {
        data = document.getElementById('jsonbox').value
       
    }
    if (req == 'GET') {
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.text())
            .then((text) => {
                document.getElementById('responsebox').innerHTML = text
                Prism.highlightAll()
                
            })
    }
    
    else {
        fetch(url, {
            method: 'POST',
            body: data,

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            } 
                
            
    })
    .then(response => response.text())
    .then((text) => { document.getElementById('responsebox').innerHTML = text })
    Prism.highlightAll()
    }

})