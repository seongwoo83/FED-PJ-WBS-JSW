import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import '../css/test.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import mdata from "../data/mdata";
import { useState } from "react";
import $ from 'jquery'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function jqfn(){
    $(()=>{
        $(".auto_btn").on("click",function(e){
            e.stopPropagation();
            $(".menu_cover").slideDown().css({
                display:"flex"
            });
            $("body").css({
                overflow:"hidden"
            })
        });
        $(".close").on("click",function(e){
            $(".menu_cover").slideUp();
            $("body").css({
                overflow:"scroll"
            })
        })
        $(".mlist a").on("click",function(){
            $(".menu_cover").slideUp();
            $("body").css({
                overflow:"scroll"
            })
        })
    })
}



function Test() {
    const [vidx, setVidx] = useState(0);
    const chooseSetVidx = function(e){
        let cTargets = [...e.target.parentNode.parentNode.children]
        setVidx(cTargets.indexOf(e.target.parentNode));
        console.log(vidx);
    }
    return (
        <>
                <Navbar key='md' bg="color">
                    <Container fluid>
                        <Navbar.Brand><h1 className="header_logo"><Link to="/" >Ferrari</Link></h1></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>Menu</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-start flex-grow-1 pe-3">
                                    <Nav.Link className="auto_btn">Autos</Nav.Link>
                                    <Link to="/universe" className="nav-link">Universe</Link>
                                    <img src="./img/logo.png" alt="logo" className="header_logo_img"/>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
                <div className="menu_cover">
                        <FontAwesomeIcon icon={faCircleXmark} className="close"/>
                    <div className="mlist_wrap">
                        <h3 className="mlist_tit">Autos</h3>
                        <ul className="mlist">
                            {
                                mdata.map((v,i)=><li key={i}><Link to="/autos" state={{cname:v.name,
                                cidx:v.idx}} onMouseEnter={chooseSetVidx}>{v.name.toUpperCase()}</Link></li>)
                            }
                        </ul>
                    </div>
                    <div className="mvid_wrap">
                        {
                            mdata[vidx].cvid[0] != null && 
                            <>
                                <video src={mdata[vidx].cvid[0]} muted="muted" autoPlay="autoplay" loop="loop"></video>
                                <img src={mdata[vidx].logo} alt={mdata[vidx].name}/>
                            </>
                            
                        }
                    </div>
                </div>
                {jqfn()}
        </>
    );
}

export default Test;
