import $ from 'jquery'
import { useEffect } from 'react';
import article_data from '../data/ardata';
import '../css/imgslide.css';

function ImgSlide(props) {
    useEffect(()=>{
        let slideImg = $(".img_slide li");
        slideImg.each(function (idx, ele) {
            $(ele).css({
                left: 30 * idx + "px",
                top: 30 * idx + "px",
                zIndex: -idx + slideImg.length+1,
            });
        });

        let slideImgBx = $(".img_slide");

        slideImgBx.find("li").on("click", function () {
            if ($(this).index() === 0) {
                $(this).animate(
                    {
                        top: "-50px",
                        left: "-50px",
                        opacity: "0",
                    },
                    400,
                    () => {
                        $(this).parent().append($(this));
                        slideImg = $(".img_slide li");
                        slideImg
                            .each(function (idx, ele) {
                                $(ele).animate(
                                    {
                                        left: 30 * idx + "px",
                                        top: 30 * idx + "px",
                                        zIndex: -idx + slideImg.length+1,
                                    },
                                    200
                                );
                            })
                            .last()
                            .animate({
                                opacity: "1",
                            });
                    }
                );
            } else return;
        });
    })

    return(
        <>
            <ul className='img_slide'>
                            <>{
                                article_data[props.art][props.idx].rsrc.map((v,i)=>{
                                    return (
                                    <li key={i}><img src={v} /></li>
                                    )
                                })
                            }
                            </>
            </ul>
        </>
    )
}

export default ImgSlide;
