const image = (img) => {

    let div = document.createElement("div")
    div.innerHTML = `<img src="${img}" class="img">`

    return div
}

export{image}