const cards = (w1,img1,para1,btn1, img2, para2, btn2, img3, para3, btn3) => {
    let div = document.createElement("div")
    div.innerHTML = `<h1>${w1}</h1>
                    <div class="container">
                        <div class="p1">
                            <img src="${img1}">
                            <p>${para1}</p>
                            <button>${btn1}</button>
                        </div>
                        <div class="p1">
                            <img src="${img2}">
                            <p>${para2}</p>
                            <button>${btn2}</button>
                        </div>
                        <div class="p1">
                            <img src="${img3}">
                            <p>${para3}</p>
                            <button>${btn3}</button>
                        </div>
                    </div>
    
    `
    return div
}
export{cards}