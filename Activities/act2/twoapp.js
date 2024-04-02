import {image} from "./twoimg.js"
import {info} from "./twoinfo.js"
import {cards} from "./card.js"

const myObj1 = {
    title : "LUCKY BEAUTY",
    para : "I believe that all women are pretty without makeup, but the right makeup can be pretty powerful",
    btn : "lucky on",
    img : "up.jpg"
}

const myObj2 = {
    comp : "Project Completed",

    img1 : "b1.jpg",
    para1 : "Treat your makeup like jewelry for the face. Play with colors, shapes, structure it can transform you.",
    btn1 : "click here",

    img2 : "b2.jpg",
    para2 : "Beauty is power, and makeup is something that really enhances that it’s a woman’s secret",
    btn2 : "click here",

    img3 : "b.jpg",
    para3 : "Lipstick is really magical. It holds more than a waxy bit of color it holds the promise of a brilliant smile, ",
    btn3 : "click here"
}

let sectionOne = document.getElementById("sectionOne")
let sectionTwo = document.getElementById("sectionTwo")

const {title,para,btn,img} = myObj1;

const {comp,img1,para1,btn1,img2,para2,btn2,img3,para3,btn3} = myObj2;

sectionOne.append(info(title,para,btn))
sectionOne.append(image(img))  

sectionTwo.append(cards(comp,img1,para1,btn1,img2,para2,btn2,img3,para3,btn3))



