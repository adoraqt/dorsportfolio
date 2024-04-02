import { Ldiv } from "./info.js"
import { right } from "./img.js"



//object
const data = {
    title: "DAILY",
    title2: "SKINCARE",
    para1:"Keeping our skin glowing by optimizing hydration, barrier function and cell turnover,and minimizing irritation; Helping to repair past superficial damage to skin.",
    para2: "“Happy skin is healthy skin.”", 
    beautyBtn: "Beauty",
    aboutBtn: "About",
    blogBtn: "Blog ",
    contactBtn: "contact",
    myImage: "skin.jpg"

}
//destructuring
const { title, title2, para1, para2,  beautyBtn, aboutBtn, blogBtn, contactBtn, myImage } = data
//access the container
let container = document.getElementById("container")

container.append(Ldiv(title, title2, para1, para2, beautyBtn, aboutBtn, blogBtn, contactBtn))
container.append(right(myImage))