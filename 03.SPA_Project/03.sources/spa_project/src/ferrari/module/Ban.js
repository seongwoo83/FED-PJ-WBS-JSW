import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import '../css/ban.css';
import styled from "styled-components";

const StyledBtnBx = styled.div`
    overflow: hidden;
`
const StyledBtn = styled.button`
    position: relative;
    padding: 5px 0;
    border: none;
    background-color: transparent;
    color: #aaa;
`
function Ban(){

    const slide_data = [
        {
            stit:"Cars",
            btit:"Start Your Engine",
            src:"https://ferrari-cdn.thron.com/static/Z2DSEE_SITO-Video_Cover_Gen_2023_768x1024_J6QFKV.mp4?xseo=",
        },
        {
            stit:"",
            btit:"SCUDERIA FERRARI",
            src:"https://ferrari-cdn.thron.com/static/M9YPMI_cover_f1-sf23_video_beauty_768x1024__720p_VTPLDP.mp4?xseo=",
        },
        {
            stit:"Collections",
            btit:"NEW 2023 SPRING-SUMMER COLLECTION",
            src:"https://ferrari-cdn.thron.com/static/HVQBCA_Store_Ferrari_Cover_768x1024_CP6ON5.mp4?xseo=",
        }
    ]



    return(
        <div className="banner">
        <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={500}
        autoplay={{
            delay:7000
        }}>
            {
                slide_data.map((v,i)=>{
                    return(
                        <SwiperSlide key={i} className="video_slide">
                            <div className="v_cont_bx">
                                {
                                    v.stit !== null &&
                                    <h4 className="v_stit">{v.stit}</h4>
                                }
                                <h2 className="v_btit">{v.btit}</h2>
                                <StyledBtnBx className="v_btn_wrap">
                                    <StyledBtn className="v_btn">Show Details</StyledBtn>
                                </StyledBtnBx>
                            </div>
                            <video src={v.src} muted="muted" autoPlay="autoplay" loop="loop" className="v_src"/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
        </div>
    );
}

export {Ban, StyledBtn,StyledBtnBx};