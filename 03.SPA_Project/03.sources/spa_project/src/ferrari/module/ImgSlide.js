import $ from 'jquery'
import { useEffect, useState } from 'react';
import article_data from '../data/ardata';

function ImgSlide(props) {
    const [nsrc, setNsrc] = useState(article_data.art1.src)
    useEffect(()=>{
        let slideImg = $(".img_slide li");
        slideImg.each(function (idx, ele) {
            $(ele).css({
                left: 30 * idx + "px",
                top: 30 * idx + "px",
                zIndex: -idx + slideImg.length,
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
                                        zIndex: -idx + slideImg.length,
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
    },[nsrc])

    return(
        <>
            <ul className='img_slide'>
                {
                    article_data[props.art].map((v,i)=>{
                        return (
                            <>
                                <li key={i}>{v.src}</li>
                                <li key={i}>{v.src}</li>
                                <li key={i}>{v.src}</li>
                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default ImgSlide;
