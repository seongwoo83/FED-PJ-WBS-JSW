import React from 'react';
import $ from 'jquery';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Mousewheel} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/model.css';
import mdata from '../data/mdata';


function Model(){
    return(
        <div className='swiper_wrap'>
        <Swiper
            modules={[ Navigation, Mousewheel]}
            spaceBetween={10}
            slidesPerView={1.2}
            rewind={true}
            scrollbar={{draggable: true}}
            navigation={true}
            mousewheel={true}
            onSwiper={()=>$('.swiper-slide-active').find(".tit_wrap").fadeIn()}
            onSlideChangeTransitionStart={()=>$(".swiper-slide-active").find(".tit_wrap").fadeIn(1000).parent().siblings(".swiper-slide").find(".tit_wrap").hide()}
            breakpoints={{
                700:{
                    slidesPerView:2,
                    spaceBetween:5
                },
                1200:{
                    slidesPerView:3,
                    spaceBetween:0
                }
            }}
        >
            {
                mdata.map((v, i)=>{
                    return (
                        <SwiperSlide key={i}>
                            <div className='img_wrap'>
                                <picture>
                                    <img src={v.src} alt='차' />
                                </picture>
                            </div>
                            <div className='tit_wrap'>
                                <span className='tit'>{v.name.toUpperCase()}</span>
                            </div>
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>
        </div>
    );
}

export default Model;