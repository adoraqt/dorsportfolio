const Ldiv = (title, title2, para1, para2,  beautyBtn, aboutBtn, blogBtn, contactBtn ) => {
    let div = document.createElement("div")
    div.className = "ClassL"
    div.innerHTML = `<h1>${title}</h1>
                     <h1>${title2}</h1>
                     <p>${para1}</p>
                     <p>${para2}</p>
                     <button>${beautyBtn}</button>
                     <button>${aboutBtn}</button>
                     <button>${blogBtn}</button>
                     <button>${contactBtn}</button>
    `
    return div
}

export { Ldiv }