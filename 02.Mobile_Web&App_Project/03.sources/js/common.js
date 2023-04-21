window.addEventListener("DOMContentLoaded", function () {
    function 화면뿌려(이거) {
        document.querySelector(".gnb").innerHTML = 이거 ;
    }

    async function myAFn() {
        // 1. 변수 = new Promise((성공함수)=>{코드})
        // Promise 코드에 XMLHttpRequest 객체로 JSON 로딩함
        const myProm = new Promise((prFn) => {
            // 1) XMLHttpRequest() 인스턴스 생성
            let ajax = new XMLHttpRequest();

            // 2) 비동기 파일 요청(JSON파일)
            ajax.open("GET", "./js/json/gnb.json");
            //  -> JSON파일은 응답형식(reponseType)을 "json"으로 설정 필수
            ajax.responseType = "json";
            // 만약 responseType설정을 하지 않으면 "text"가 기본 값이다.
            // 이런경우에는 JSON파일형식이 잘못되었어도 읽어올 수 있음

            // 3) 결과 리턴 onload이벤트 함수구역
            ajax.onload = function () {
                console.log(ajax.status);
                if (ajax.status == 200) {
                    // Promise 성공함수를 통하여 JSON 데이터 전달하기
                    prFn(ajax.response);
                    // responseType을 "json"으로 설정했으므로 결과값은 JSON으로 전달됨
                } else {
                    console.log(ajax.statusText);
                    // 결과값이 null 이면 JSON파일 내부 형식이 잘못된 경우이다. 이런경우  JSON파일로 취급받지 못해 아무것도 로딩못한 결과임
                }
            }; /////////// onload 함수구역
            // 4) 비동기 요청 보내기: send()
            ajax.send();
        }); //////////// myProm 인스턴스

        const makeHtml = (obj) => {
            let hcode = `
            <ul class="category">
            `;
            for(let x in obj){
                hcode += `
                <h2>${x}</h2>
                    <ul class="smenu">
                `;
                for(let y in obj[x]){
                    hcode += `
                        <ul>
                            <h3>${y}</h3>
                    `;
                    for(let z of obj[x][y]){
                        hcode += `
                            <li>
                                <a>${z}</a>
                            </li>
                        `
                    }
                    hcode +=`</ul>`
                }
                hcode += `</ul>`
            }
            hcode += `</ul>`
            return hcode;
        };
        let temp = await myProm;
        화면뿌려(makeHtml(temp));
    }
    myAFn();
});
