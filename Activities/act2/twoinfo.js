const info = (h1,p,btn,) => {
    let div = document.createElement("div")
    div.className ="info"
    div.innerHTML = `<h1>${h1}</h1>
                    <p>${p}</p>     
                    <button>${btn}</button>
    
    `
    return div
}

export{info}