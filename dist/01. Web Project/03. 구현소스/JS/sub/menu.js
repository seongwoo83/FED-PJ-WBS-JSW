const mdata = {
    "바스크 치즈 케이크": "1",
    "치킨 토마토 치즈 샌드위치": "2",
    "포테이토 어니언 크림치즈 베이글": "3",
    "아이스 슈크림 라떼": "4",
    "슈크림 라떼": "5",
    "핑크 플라워 유스베리 티": "6",
    "바질 레몬 셔벗 블렌디드": "7",
    "23 스프링 러블리홈 베어리스타 오프너": "8",
    "23 스프링 러블리홈 미니어처 양념통 세트": "9",
    "23 스프링 러블리홈 실리콘 쿠킹툴 세트": "10",
    "23 스프링 러블리홈 소스볼 (3P)": "11",
    "23 스프링 러블리홈 파스타볼": "12",
    "23 스프링 러블리홈 그라팅볼": "13",
    "23 스프링 러블리홈 머그트리": "14",
    "23 스프링 업사이클 티슈케이스": "15",
    "23 어반 스프링 JNL 보온병": "16",
    "23 SS 어반 스프링 파인니 콜드컵": "17",
    "23 SS 어반 스프링 하비 콜드컵": "18",
    "23 SS 스프링 러블리홈 데비 텀블러": "19",
    "23 SS 스프링 스탠리 아이슬란드 텀블러": "20",
    "23 SS 스프링 스탠리 켄처 텀블러": "21",
    "23 SS 어반 스프링 DW 투고 텀블러": "22",
    "23 SS 어반 스프링 모카 텀블러": "23"
};
window.addEventListener("DOMContentLoaded", function () {
    const productWrap = document.querySelector(".product_wrap");
    let hcode = "";
    hcode += "<ul>";
    for (let x in mdata) {
        hcode += `
            <li>
                <a href="#" class="pdc_img">
                    <img src="./03. 구현소스/img/menu/product/${mdata[x]}.jpg">
                </a>
                <span class="pdc_name">${x}</span>
            </li>
        `;
    }
    hcode += "</ul>";
    productWrap.innerHTML += hcode;
    const productButton = document.querySelector(".product_wrap");
    const productList = document.querySelector(".product_wrap ul");
    const pda = document.querySelector(".product_wrap a");
    pda.onclick = function (e) {
        e.preventDefault();
        if (productButton.clientHeight === 0) {
            productList.style.display = "flex";
            let productListHeight = productList.clientHeight;
            productButton.style.height = productListHeight + "px";
            productButton.style.padding = "28px 0 30px 0";
        }
        else {
            productButton.style.height = "0";
            productButton.style.padding = "0";
            setTimeout(() => {
                productList.style.display = "none";
            }, 400);
        }
    };
});
