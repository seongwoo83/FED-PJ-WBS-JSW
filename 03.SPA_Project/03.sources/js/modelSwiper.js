import model from "./model.js";

let hcode = "";
model.map(x=>{
    hcode += `
        <li>
            <img src="${x.src}" />
            <span>${x.name}</span>
        </li>
    `
})

$(".model_swiper").html(hcode)