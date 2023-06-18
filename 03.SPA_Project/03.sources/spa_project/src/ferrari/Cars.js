import React from "react";
import mdata from "./data/mdata";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import './css/cars.css';


const StyledDiv = styled.div`
    background-color : ${(props) => props.bgc}
`
const Cars = () => {
    let idx = 0;
    return(
        <>
            <StyledDiv bgc={mdata[idx].bgc} className="c_vid_wrap">
                <video src={mdata[idx].cvid[0]} muted="muted" autoPlay="autoplay" loop="loop" />
                <h3 className="slogan">{mdata[idx].slo}</h3>
                <img src={mdata[idx].logo} alt=" " />
            </StyledDiv>
            <StyledDiv bgc={mdata[idx].bgc} className="c_sum_wrap">
                <img src={mdata[idx].psrc[0]} alt=" "/>
                <div className="c_sum_container">
                    <h3 className="c_name">{mdata[idx].name.toUpperCase()}</h3>
                    <p className="c_sum">{mdata[idx].csum}</p>
                </div>
            </StyledDiv>
            <StyledDiv bgc={mdata[idx].bgc} className="c_img_wrap">
                <Swiper 
                    slidesPerView={1.2}
                    allowTouchMove={true}
                >
                    <SwiperSlide>
                        <img src={mdata[idx].psrc[1]} alt=" "/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mdata[idx].psrc[2]} alt=" "/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mdata[idx].psrc[3]} alt=" "/>
                    </SwiperSlide>
                </Swiper>
            </StyledDiv>
            <StyledDiv bgc={mdata[idx].bgc} className="c_per_wrap">
                <ul className="c_per">
                    <li>{mdata[idx].cper.eng}</li>
                    <li>{mdata[idx].cper.hp}</li>
                    {
                        mdata[idx].cper.zero && 
                        <li>{mdata[idx].cper.zero}</li>
                    }
                </ul>
                <p className="c_per_sum">{mdata[idx].cper.psum}</p>
                <video src={mdata[idx].cvid[1]} autoPlay="autoplay" muted="muted" loop="loop"/>
            </StyledDiv>
            <div className="c_des_wrap">
                <img src={mdata[idx].psrc[4]} alt=" "/>
                <h3 className="c_des">{mdata[idx].cdes}</h3>
            </div>
            <StyledDiv bgc={mdata[idx].bgc} className="c_part_wrap">
                <h3 className="c_part_tit">파트너</h3>
                <ul className="c_part_list">
                    {
                        mdata[idx].part.map((v,i)=>{
                            return (
                                <li key={i}><span>{v}</span></li>
                            )
                        })
                    }
                </ul>
            </StyledDiv>
        </>
    )
}

export default Cars;