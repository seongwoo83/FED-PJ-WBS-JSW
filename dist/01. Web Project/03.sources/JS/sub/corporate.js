$(() => {
    const getWay = $(".tab_wrap>ul>li a");
    const tabBox = $(".tab_box");
    getWay.on("click", function (e) {
        e.preventDefault();
        if ($(this).hasClass("on")) {
            return;
        }
        else {
            $(this).addClass("on").parent().siblings().children().removeClass("on");
            if (getWay.first().hasClass("on")) {
                tabBox.first().addClass("on");
                tabBox.last().removeClass("on");
            }
            else if (getWay.last().hasClass("on")) {
                tabBox.first().removeClass("on");
                tabBox.last().addClass("on");
            }
        }
    });
    const tabSelCont = $(".tab_sel li a");
    const innerTab = $(".inner_tab");
    const tabSelBx = $("#select_bx");
    tabSelCont.on("click", function (e) {
        e.preventDefault();
        if ($(this).hasClass("on")) {
            return;
        }
        else {
            $(this).parent().addClass("on").siblings().removeClass("on");
            switch ($(this).parents().index()) {
                case 0:
                    innerTab.eq(0).addClass("on").siblings().removeClass("on");
                    tabSelBx.val("md").attr("selected");
                    ;
                    break;
                case 1:
                    innerTab.eq(1).addClass("on").siblings().removeClass("on");
                    tabSelBx.val("card").attr("selected");
                    ;
                    break;
                case 2:
                    innerTab.eq(2).addClass("on").siblings().removeClass("on");
                    tabSelBx.val("ecard1").attr("selected");
                    ;
                    break;
                case 3:
                    innerTab.eq(3).addClass("on").siblings().removeClass("on");
                    tabSelBx.val("ecard2").attr("selected");
                    break;
            }
        }
    });
    function tabSelValOn() {
        let tabSelVal = $("#select_bx option:selected").val();
        switch (tabSelVal) {
            case "md":
                innerTab.eq(0).addClass("on").siblings().removeClass("on");
                tabSelCont.eq(0).parent().addClass("on").siblings().removeClass("on");
                break;
            case "card":
                innerTab.eq(1).addClass("on").siblings().removeClass("on");
                tabSelCont.eq(1).parent().addClass("on").siblings().removeClass("on");
                break;
            case "ecard1":
                innerTab.eq(2).addClass("on").siblings().removeClass("on");
                tabSelCont.eq(2).parent().addClass("on").siblings().removeClass("on");
                break;
            case "ecard2":
                innerTab.eq(3).addClass("on").siblings().removeClass("on");
                tabSelCont.eq(3).parent().addClass("on").siblings().removeClass("on");
                break;
        }
    }
    $("#select_bx").on('change', tabSelValOn);
});
