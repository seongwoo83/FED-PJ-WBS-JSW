import jsnData from "./json/ralph_lauren.json" assert{type:"json"}
function showCart(){
    const cartFn = function(){
        let cart = [];
        let hcode = `
            `;
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            cart.push(jsnData[JSON.parse(`${localStorage.getItem(key)}`).idx]);
        }
        for(let x of cart){
            hcode += `
            <ol>
                <img src="./img/${x.level}/prod/${x.idx}.jpg">
                <ol class="list_info">
                    <li>${x.category}</li>
                    <li>${x.name}</li>
                    <li>${x.price}</li>
                </ol>
            </ol>
            `
        }
        hcode += `
        `
        $(".cartmenu").find("ul").html(hcode).parent().slideToggle(400)
    }
    $(".open_cart").on("click", function(e){
        e.preventDefault();
        cartFn();
    });
    $(".remove_cart").on("click",function(e){
        e.preventDefault();
        localStorage.clear();
        cartFn();
    })
}
export default showCart;