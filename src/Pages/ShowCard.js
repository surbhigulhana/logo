import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import i1 from '../images/logo.jpg'
import bg from '../images/bg.png'
import p from '../images/p.png'
import p1 from '../images/p1.png'
import line from '../images/line.png'

const ShowCard = () => {
    const l1 = useLocation();
    const c1 = l1.state.cc[0].ColorCode;
    const c2 = l1.state.cc[1].ColorCode;
    const c3 = l1.state.cc[2].ColorCode;
    const c4 = l1.state.cc[3].ColorCode;
    const c5 = l1.state.cc[4].ColorCode;
    const c6 = l1.state.cc[5].ColorCode;
    const c7 = l1.state.cc[6].ColorCode;
    const c8 = l1.state.cc[7].ColorCode;
    const c9 = l1.state.cc[8].ColorCode;
    const [data1, setData1] = useState([]);
    const logoname = localStorage.getItem("Name");
    const sp = logoname.split(" ");
    console.log(sp[0])
    const firstChar = sp.length > 0 ? sp[0].charAt(0) : '';
    const secondChar = sp.length > 1 ? sp[1]?.charAt(0) || '' : ''; // Use optional chaining for the second character




    const Slogan = localStorage.getItem("Slogan");
    // console.log(logoname)
    useEffect(() => {
        // Retrieve the data from local storage when the component mounts
        const jsonData = localStorage.getItem("array");

        // If data exists, parse it back to an array using JSON.parse()
        if (jsonData) {
            const data = JSON.parse(jsonData);
            setData1(data);
        }
    }, []);



    const imgss = require('../Pages/Icon.json')
    // console.log(imgss[0].images)
    const handleDownload1 = (e) => {

        if (data1[0] == imgss[0].images) {
            // console.log("same")
        } else if (data1[0] !== imgss[0].images) {
            // console.log("not same", data1[0], imgss[0].images)
        }
        const cardElement = document.querySelector('.hh');

        html2canvas(cardElement).then((canvas) => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/jpg');
            link.download = 'card.png';
            link.click();


        });
    };


    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false);
    const [show12, setShow12] = useState(false);
    const [show13, setShow13] = useState(false);
    const [show14, setShow14] = useState(false);
    const [show15, setShow15] = useState(false);
    const [show16, setShow16] = useState(false);
    const [show17, setShow17] = useState(false);
    const [show18, setShow18] = useState(false);
    const [show19, setShow19] = useState(false);
    const [show20, setShow20] = useState(false);
    const [show21, setShow21] = useState(false);
    const [show22, setShow22] = useState(false);
    const [show23, setShow23] = useState(false);
    const [show24, setShow24] = useState(false);
    const [show25, setShow25] = useState(false);
    const [show26, setShow26] = useState(false);
    const [show27, setShow27] = useState(false);
    const [show28, setShow28] = useState(false);
    const [show29, setShow29] = useState(false);
    const [show30, setShow30] = useState(false);


    const [containershow1, setContainer1] = useState(false);
    const [containershow, setContainer] = useState(true);



    function s1(e) {
        setContainer1(true)
        setContainer(false);
        setAll(false)
        console.log(e.target.name)
        if (e.target.name == "show") {
            console.log(e.target.name)
            setShow(true)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)


        }
        else if (e.target.name == "show1") {
            setShow(false)
            setShow1(true)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == "show2") {
            setShow(false)
            setShow1(false)
            setShow2(true)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == "show3") {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(true)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == "show4") {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(true)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show5') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(true)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show6') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(true)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show7') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(true)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show8') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(true)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show9') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(true)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == "show10") {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(true)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show11') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(true)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show12') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(true)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show13') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(true)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show14') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(true)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show15') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(true)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show16') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(true)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show17') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(true)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show18') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(true)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show19') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(true)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show20') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(true)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show21') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(true)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show22') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(true)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show23') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(true)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.targe.name == 'show24') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(true)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show25') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(true)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show26') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(true)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show27') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(true)
            setShow28(false)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show28') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(true)
            setShow29(false)
            setShow30(false)
        }
        else if (e.target.name == 'show29') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(true)
            setShow30(false)
        }
        else if (e.target.name == 'show30') {
            setShow(false)
            setShow1(false)
            setShow2(false)
            setShow3(false)
            setShow4(false)
            setShow5(false)
            setShow6(false)
            setShow7(false)
            setShow8(false)
            setShow9(false)
            setShow10(false)
            setShow11(false)
            setShow12(false)
            setShow13(false)
            setShow14(false)
            setShow15(false)
            setShow16(false)
            setShow17(false)
            setShow18(false)
            setShow19(false)
            setShow20(false)
            setShow21(false)
            setShow22(false)
            setShow23(false)
            setShow24(false)
            setShow25(false)
            setShow26(false)
            setShow27(false)
            setShow28(false)
            setShow29(false)
            setShow30(true)
        }
    }

    // for  style
    var orts = { "one": "Monospace", "two": "Cursive", "three": "Fantasy", "four": "ui-serif", "five": "Verdana", "six": "Trebuchet MS", "seven": "Brush Script MT" };
    var llls = ["Monospace", "Cursive", "Fantasy", "ui-serif", "Verdana", "Trebuchet MS", "Brush Script MT"];
    // console.log(orts, llls)
    const [oppo, setOppo] = useState()


    function fhj(e) {
        setOppo(e.target.id)
    }

    // font color hide show

    const [font, setFont] = useState(true);
    const [color, setColor] = useState(false);
    const [head, sethead] = useState(false);
    const [back, setBack] = useState(false);
    const [all, setAll] = useState(true);
    const [align, setAlign] = useState(false);
    const [logocolr, setlogocolor] = useState(false)
    const [iconedit, setIconEdit] = useState(false)
    function fontclick() {

        setFont(true);
        setColor(false)
        sethead(false)
        setBack(false)
        setlogocolor(false)
        setIconEdit(false);
        setAlign(false)
    }
    function colorclick() {

        setFont(false);
        setColor(true)
        sethead(false)
        setBack(false)
        setlogocolor(false)
        setIconEdit(false);

        setAlign(false)
    }
    function headclick() {

        setFont(false);
        setColor(true)
        sethead(false)
        setBack(false)
        setlogocolor(false)
        setIconEdit(false);

        setAlign(false)
    }
    function backclick() {

        setFont(false);
        setColor(false)
        sethead(false)
        setBack(true)
        setlogocolor(false)
        setIconEdit(false);

        setAlign(false)
    }
    function logoclick() {

        setFont(false);
        setColor(false)
        sethead(false)
        setBack(false);
        setlogocolor(true)
        setIconEdit(false);

        setAlign(false)

    }

    function editclick() {

        setFont(false);
        setColor(false)
        sethead(false)
        setBack(false);
        setlogocolor(false)
        setIconEdit(true);

        setAlign(false)

    }

    function alignclick() {

        setFont(false);
        setColor(false)
        sethead(false)
        setBack(false);
        setlogocolor(false)
        setIconEdit(false);

        setAlign(true)

    }

    // console.log(data1)
    // font color
    var fontcolor = { "one": c1, "two": c2, "three": c3, "four": c4 };
    var fc = [c1, c2, c3, c4, c6, c7, c9, c8, "black", "grey"];
    const [oppo1, setOppo1] = useState()


    function fhj1(e) {
        setOppo1(e.target.id)

    }
    // bg color
    var fontcolor1 = { "one": c1, "two": c2, "three": c3, "four": c4 };
    var fc1 = [c1, c2, c3, c6, c7, c8, c9];
    const [oppo2, setOppo2] = useState()


    function fhj2(e) {
        setOppo2(e.target.id)

    }
    // console.log(oppo2)

    // logocolor
    var fc2 = [c1, c2, c3, c4, c6, c7, c9, c8];
    const [oppo3, setOppo3] = useState()


    function fhj3(e) {
        setOppo3(e.target.id)

    }
    // console.log(oppo1)



    var ghg = data1[0]
    console.log(ghg)
    const [newicon, setNewIcon] = useState('fas fa-laptop')


    // text position
    var fontcolor1 = { "one": "left", "two": "right", "three": "center" };
    var fc4 = ["left", "right", "center"];

    const [oppo4, setOppo4] = useState()


    function fhj4(e) {
        setOppo4(e.target.id)
        // console.log(e.target.id)

    }

    const img = require("./icon1.json")
    const cate = localStorage.getItem("cateName")
    console.log(cate)
    const category = img.find(item => item.category === cate);
    console.log(category)
    if (category) {

        const images = category.images;
        console.log(images);

    } else {
        console.log('Category not found.');
    }
    const [iconshow, seticonshow] = useState(true);
    const [iconshow1, seticonshow1] = useState(false);
    function iconedit1(e) {
        seticonshow(false);
        seticonshow1(true)
        console.log(e.target.className)
        const ff = e.target.getAttribute("name");
        setNewIcon(ff);
        console.log(ff)

    }







    return (
        <div>
            {/* xxxxxxxxxxxxxxxxxxxx */}

            {containershow1 &&
                <>
                    <div class="sidenav">
                        {font &&
                            <>
                                {llls.map((hhhg, index) => (
                                    <tr key={hhhg._id}>
                                        <td onClick={fhj} id={hhhg} style={{ fontFamily: hhhg }}>


                                            <li style={{ backgroundColor: c4, listStyle: "none", height: "250px", width: "300px", borderRadius: "10px", margin: "10px", padding: "10px" }} >

                                                <div class="logo-holder logo-1" >

                                                    <h3>
                                                        {data1.length >= 2 && (
                                                            <i class={data1[1]} alt={`Image 1`} id='s1' style={{ color: "black" }} />
                                                        )}<br />

                                                    </h3>
                                                    <h4 onClick={fhj} id={hhhg}> {logoname}</h4>
                                                    <p onClick={fhj} id={hhhg}>{Slogan}</p>

                                                </div>


                                            </li>




                                        </td>
                                    </tr>
                                ))}
                            </>
                        }
                        {/* ----------------------- */}
                        {color &&
                            <>
                                {fc.map((hhg, index) => (
                                    <tr key={hhg._id}>
                                        <td onClick={fhj1} id={hhg} style={{ color: hhg }}>


                                            <li style={{ backgroundColor: "white", listStyle: "none", height: "250px", width: "300px", borderRadius: "10px", margin: "10px", padding: "10px" }} >

                                                <div class="logo-holder logo-1" >

                                                    <h3>
                                                        {data1.length >= 2 && (
                                                            <i class={data1[1]} alt={`Image 1`} id='s1' />
                                                        )}<br />

                                                    </h3>
                                                    <h4 onClick={fhj1} id={hhg} > {logoname}</h4>
                                                    <p onClick={fhj1} id={hhg} >{Slogan}</p>

                                                </div>


                                            </li>




                                        </td>
                                    </tr>
                                ))}
                            </>
                        }
                        {back &&
                            <>
                                {fc1.map((hg, index) => (
                                    <tr key={hg._id}>
                                        <td  >


                                            <li style={{ listStyle: "none", height: "250px", width: "300px", borderRadius: "10px", margin: "10px", padding: "10px", backgroundColor: hg }} onClick={fhj2} id={hg} >

                                                <div class="logo-holder logo-1" >

                                                    <h3>
                                                        {data1.length >= 2 && (
                                                            <i class={data1[1]} alt={`Image 1`} id='s1' />
                                                        )}<br />

                                                    </h3>
                                                    <h4 > {logoname}</h4>
                                                    <p >{Slogan}</p>

                                                </div>


                                            </li>




                                        </td>
                                    </tr>
                                ))}
                            </>
                        }

                        {logocolr &&
                            <>
                                {fc2.map((hge, index) => (
                                    <tr key={hge._id}>
                                        <td onClick={fhj3} id={hge} style={{ color: hge }}>




                                            <li style={{ backgroundColor: "white", listStyle: "none", height: "250px", width: "300px", borderRadius: "10px", margin: "10px", padding: "10px" }} >

                                                <div class="logo-holder logo-1" >

                                                    <h3>
                                                        {data1.length >= 2 && (
                                                            <i class={data1[1]} alt={`Image 1`} onClick={fhj3} id={hge} />
                                                        )}<br />

                                                    </h3>
                                                    <h4  > {logoname}</h4>
                                                    <p >{Slogan}</p>

                                                </div>


                                            </li>



                                        </td>
                                    </tr>
                                ))}
                            </>
                        }
                        {
                            iconedit &&

                            <>
                                <h1></h1>


                                {category.images.map((image, index) => (

                                    <>
                                        <div style={{ height: "150px", width: "150px", background: "lightgrey", borderRadius: "100%" }}><br /><br />
                                            <center>                                            <i key={index} className={image.i1} style={{ fontSize: "70px", display: "block" }} name={image.i1} onClick={iconedit1}></i></center>

                                        </div>



                                    </>
                                ))}




                            </>
                        }
                        {
                            align &&

                            <>
                                {/* {fc4.map((hgew, index) => (
                                    <tr key={hgew._id}>
                                        <td onClick={fhj4} id={hgew} >

                                            <div style={{ height: "200px", width: "300px", background: "grey" }}>


                                                <h1 onClick={fhj4} id={hgew} style={{ textAlign: hgew }}>{logoname}</h1>
                                            </div>
                                       </td>
                                    </tr>
                                ))} */}
                                {fc4.map((hgew, index) => (
                                    <tr key={hgew._id}>
                                        <td onClick={fhj4} id={hgew} >


                                            <li style={{ backgroundColor: "white", listStyle: "none", height: "250px", width: "300px", borderRadius: "10px", margin: "10px", padding: "10px" }} >

                                                <div class="logo-holder logo-1" >

                                                    <h3>
                                                        {data1.length >= 2 && (
                                                            <i class={data1[1]} alt={`Image 1`} id='s1' />
                                                        )}<br />

                                                    </h3>
                                                    <h4 onClick={fhj4} id={hgew} style={{ textAlign: hgew }} > {logoname}</h4>
                                                    <p onClick={fhj4} id={hgew} style={{ textAlign: hgew }} >{Slogan}</p>

                                                </div>


                                            </li>




                                        </td>
                                    </tr>
                                ))}
                            </>
                        }
                    </div>

                    <div class="main">
                        <center>
                            <p>
                                <div style={{ marginTop: "40px" }}>
                                    <button type="button" class="btn btn-outline-dark" onClick={fontclick}>Font</button>
                                    <button type="button" class="btn btn-outline-dark" onClick={colorclick}>Color</button>
                                    <button type="button" class="btn btn-outline-dark" onClick={alignclick}>align</button>
                                    <button type="button" class="btn btn-outline-dark" onClick={backclick}>background</button>
                                    <button type="button" class="btn btn-outline-dark" onClick={logoclick}>logo Color</button>
                                    <button type="button" class="btn btn-outline-dark" onClick={editclick}>Edit Icon</button>
                                </div>

                            </p>
                            <div style={{ marginLeft: "-100px" }}>
                                {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}
                                {show &&
                                    <>
                                        <div className='col-4' >

                                            <div class="card card-2 hh">

                                                <span style={{ fontSize: "150px", fontFamily: oppo, zIndex: "10", color: oppo1 }}>{firstChar}</span>

                                                <span style={{ fontSize: "150px", fontFamily: oppo, zIndex: "10", color: oppo1 }}>{secondChar}</span>
                                                <div id='gs2' className='hh' style={{ textAlign: oppo4 }}>
                                                    <span style={{ color: "darkgrey" }}>{logoname}</span>
                                                </div>



                                            </div>
                                            <center>
                                                <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button>
                                            </center>

                                        </div>
                                    </>
                                }
                                {show1 && <>
                                    <div className='col-4'>

                                        <div class="card card-2 hh">
                                            <div class="logo-holder " id='bg3' >

                                                <h1 style={{ fontFamily: oppo, color: oppo1, backgroundColor: oppo2, textAlign: oppo4 }} >{logoname}</h1>



                                            </div>

                                        </div>
                                        <center>
                                            <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button>
                                         
                                        </center>

                                    </div>
                                </>}
                                {show2 &&
                                    <>
                                        <div className='col-4'>

                                            <div class="card card- hh">
                                                <div class="logo-holder " >
                                                    <center style={{ marginTop: "-50px" }}>
                                                        <div class="outer">
                                                            <div class="inner" style={{ backgroundColor: oppo2 }}><h3 id='gs4' style={{ fontFamily: oppo, color: oppo1 }} >{firstChar}</h3></div>
                                                            <div id='gs5' style={{ textAlign: oppo4 }}><span style={{ fontFamily: oppo, color: oppo1, textAlign: oppo4 }}>{logoname}</span></div>
                                                        </div>
                                                    </center>

                                                </div>

                                            </div>
                                            <center>
                                                <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button>
                                            </center>

                                        </div>

                                    </>
                                }
                                {show3 && <>   <div className='col-4'>

                                    <div class="card card- hh" style={{ backgroundColor: oppo2 }}>
                                        <div class="logo-holder " id='bg3' >
                                            <div class="image-container" style={{ textAlign: oppo4 }}>
                                                <img src={p1} alt="Your Image" style={{ width: "100%" }} />
                                                <div class="text-overlay" >
                                                    <p style={{ fontFamily: oppo, color: oppo1, fontSize: "20px", marginTop: "-100px", }}>{logoname}</p>
                                                </div>
                                                <p style={{ fontFamily: oppo, textAlign: oppo4 }}>{Slogan}</p>
                                            </div>

                                        </div>

                                    </div>
                                    <center>
                                        <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button> <button type='button' name={"show3"} id='b1' onClick={s1}>✎</button>
                                    </center>

                                </div></>}
                                {show4 && <>  <div className='col-4'>
                                    <div class="card hh" style={{ backgroundColor: oppo2 }}>
                                        <div class="logo-holder logo-1" style={{ textAlign: oppo4 }}>

                                            <h3 style={{ color: oppo1, fontFamily: oppo }}>{logoname}</h3>
                                            <p style={{ color: oppo1, fontFamily: oppo }}>{Slogan}</p>

                                        </div>
                                    </div><br />
                                    <center>
                                        <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button> <button type='button' name={"show4"} id='b1' onClick={s1}>✎</button>
                                    </center>
                                </div></>}
                                {show5 && <>   <div className='col-4'>
                                    <div class="card card- hh" style={{ backgroundColor: oppo2 }}>
                                        <center>



                                            {iconshow &&
                                                <i class={data1[2]} alt={`Image 1`} id='icon2' style={{ color: oppo3 }} />}
                                            {iconshow1 &&
                                                <i class={newicon} alt={`Image 1`} id='icon2' style={{ color: oppo3 }} />
                                            }


                                        </center>
                                        <h2 id='t3' style={{ color: oppo1, fontFamily: oppo, textAlign: oppo4 }}><b>{logoname}</b></h2>
                                        <p id='p3' style={{ color: oppo1, fontFamily: oppo, textAlign: oppo4 }}><b>{Slogan}</b>&nbsp; </p>

                                    </div>
                                    <center>
                                        <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button> <button type='button' name={"show5"} id='b1' onClick={s1}>✎</button>
                                    </center>
                                </div></>}
                                {show6 && <>     <div className='col-4'>
                                    <div class="card card- hh" style={{ backgroundColor: oppo2 }}>
                                        <div class="logo-holder logo-6" style={{ textAlign: oppo4 }}>

                                            <h3 style={{ color: oppo1, fontFamily: oppo }}>{firstChar}{secondChar} <span style={{ backgroundColor: oppo1, fontFamily: oppo }}>{logoname}</span></h3>

                                        </div>

                                    </div>
                                    <center>
                                        <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button> <button type='button' name={"show6"} id='b1' onClick={s1}>✎</button>
                                    </center>
                                </div></>}
                                {show7 && <>   <div className='col-4' >
                                    <div class="card card-1" style={{ backgroundColor: oppo2 }}>
                                        <div class="logo-holder logo-2" style={{ textAlign: oppo4 }}>

                                            <h3 style={{ color: oppo1, fontFamily: oppo }}>{logoname}</h3>
                                            <p style={{ color: oppo1, fontFamily: oppo }}>{Slogan}</p>

                                        </div>

                                    </div>
                                    <center>
                                        <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button> <button type='button' name={"show7"} id='b1' onClick={s1}>✎</button>
                                    </center>
                                </div></>}
                                {show8 && <>   <div className='col-4'>
                                    <div class="card card- hh" style={{ backgroundColor: oppo2 }}>
                                        <div class="logo-holder logo-3">

                                            <h3 style={{ color: oppo1, fontFamily: oppo }}>{logoname}</h3>
                                            <p style={{ fontFamily: oppo, textAlign: oppo4 }}>{Slogan}</p>

                                        </div>

                                    </div>
                                    <center>
                                        <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button> <button type='button' name={"show8"} id='b1' onClick={s1}>✎</button>
                                    </center>
                                </div></>}
                                {show9 && <>   <div className='col-4'>
                                    <div class="card hh" style={{ backgroundColor: oppo2 }} >
                                        <div class="logo-holder logo-4">

                                            <h3 style={{ color: oppo1, fontFamily: oppo }}>{logoname}</h3>
                                            <p style={{ fontFamily: oppo, textAlign: oppo4 }}>{Slogan}</p>

                                        </div>
                                    </div><br />
                                    <center>
                                        <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button> <button type='button' name={"show9"} id='b1' onClick={s1}>✎</button>
                                    </center>
                                </div></>}
                                {show10 && <>   <div className='col-4'>
                                    <div class="card card-1" style={{ backgroundColor: oppo2 }}>
                                        <div class="logo-holder logo-5">

                                            <h3 style={{ color: oppo1, fontFamily: oppo, textAlign: oppo4 }}>{logoname}</h3><br />
                                            <p style={{ fontFamily: oppo }}>{Slogan}</p>

                                        </div>

                                    </div>
                                    <center>
                                        <button onClick={handleDownload1}>
                                            <i class="fa fa-download" aria-hidden="true"></i></button>
                                        <button type='button' name={"show10"} id='b1' onClick={s1}>✎</button>
                                    </center>
                                </div></>}
                                {show11 && <>   <div className='col-4'>
                                    <div class="card hh" id='bg1' style={{ backgroundColor: oppo2 }}>
                                        <div class="image-container">
                                            <img src={bg} alt="Your Image" />
                                            <div class="text-overlay">
                                                <p style={{ fontFamily: oppo, color: oppo1, fontSize: "20px", marginLeft: "40px" }}>{logoname}</p>
                                            </div>
                                        </div>
                                    </div><br />
                                    <center>
                                        <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button> <button type='button' name={"show11"} id='b1' onClick={s1}>✎</button>
                                    </center>
                                </div></>}
                                {show12 && <>  <div className='col-4'>
                                    <div class="card hh" style={{ backgroundColor: oppo2 }}>

                                        <div class="logo-holder logo-7">
                                            <i class="fas fa-book-open"></i>
                                            <div class="left">
                                                <h3 style={{ color: oppo1, fontFamily: oppo }}>{logoname}</h3>
                                                <p style={{ color: oppo1, fontFamily: oppo, textAlign: oppo4 }}>{Slogan}</p>
                                            </div>

                                        </div>
                                    </div><br />
                                    <center>
                                        <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button> <button type='button' name={"show12"} id='b1' onClick={s1}>✎</button>
                                    </center>
                                </div></>}
                                {show13 && <>   <div className='col-4'>
                                    <div class="card card-1" style={{ backgroundColor: oppo2 }}>
                                        <div class="logo-holder logo-10">

                                            <h3 style={{ color: oppo1, fontFamily: oppo, textAlign: oppo4 }}>{logoname}</h3>
                                            <br />
                                            <p style={{ color: oppo1, fontFamily: oppo, backgroundColor: oppo1 }}>&nbsp;</p>

                                        </div>

                                    </div>
                                    <center>
                                        <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button> <button type='button' name={"show13"} id='b1' onClick={s1}>✎</button>
                                    </center>
                                </div></>}
                                {show14 && <>     <div className='col-4'>

                                    <div class="card card- hh" style={{ backgroundColor: oppo2 }}>
                                        <div class="logo-holder " id='bg3' >
                                            <center>
                                                <span style={{ fontSize: "100px", fontFamily: oppo, color: oppo1 }}>{firstChar}</span>
                                                <span id='v1'><b>{logoname}</b></span>
                                                <span style={{ fontSize: "100px", fontFamily: oppo, color: oppo1 }}>{secondChar}</span>
                                            </center>

                                        </div>

                                    </div>
                                    <center>
                                        <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button> <button type='button' name={"show14"} id='b1' onClick={s1}>✎</button>
                                    </center>

                                </div></>}
                                {show15 && <> <div className='col-4'>

                                    <div class="card card- hh" style={{ backgroundColor: oppo2 }}>
                                        <div class="logo-holder " id='bg3' >
                                            <center>
                                                <span style={{ fontSize: "100px", fontFamily: oppo, color: oppo1, marginLeft: "10px" }}>{firstChar}</span>
                                                <span id='v2' style={{ color: oppo1 }}>I</span>
                                                <span style={{ fontSize: "100px", fontFamily: oppo, color: oppo1 }}>{secondChar}<br />
                                                </span>
                                                <h4 style={{ color: c4, fontFamily: "Alegreya Sans SC", textAlign: oppo4 }}>{logoname}</h4>
                                            </center>

                                        </div>

                                    </div>
                                    <center>
                                        <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button> <button type='button' name={"show15"} id='b1' onClick={s1}>✎</button>
                                    </center>

                                </div></>}
                                {show16 && <>    <div className='col-4'>

                                    <div class="card card- hh" style={{ backgroundColor: oppo2 }}>
                                        <div class="logo-holder " id='bg2'>

                                            <h3 style={{ fontSize: "90px", color: oppo1, fontFamily: oppo }}>{firstChar}<span>{secondChar}</span></h3><br />
                                            <p style={{ color: oppo1, fontFamily: "cursive", fontSize: "18px", textAlign: oppo4 }}>{logoname}</p>
                                        </div>

                                    </div>
                                    <center>
                                        <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button> <button type='button' name={"show16"} id='b1' onClick={s1}>✎</button>
                                    </center>

                                </div></>}
                                {show17 && <>    <div className='col-4'>
                                    <div class="card hh" id='bg1' style={{ backgroundColor: oppo2 }} >
                                        <center>
                                            <div class="image-container1">
                                                <img src={p} alt="Your Image" />
                                                <div class="text-overlay">
                                                    <p style={{ fontFamily: oppo, color: oppo1, fontSize: "50px", }}>{logoname}</p>
                                                </div>
                                            </div></center>
                                    </div><br />
                                    <center>
                                        <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button> <button type='button' name={"show17"} id='b1' onClick={s1}>✎</button>
                                    </center>
                                </div></>}
                                {show18 && <>   <div className='col-4'>
                                    <div class="card hh" style={{ backgroundColor: oppo2 }} >
                                        <center>
                                            {/* {data1.length >= 2 && (<i class={data1[0]} alt={`Image 1`} id='icon1' style={{color:oppo3}} />)} */}
                                            {iconshow &&
                                                <i class={data1[0]} alt={`Image 1`} id='icon1' style={{ color: oppo3 }} />}
                                            {iconshow1 &&
                                                <i class={newicon} alt={`Image 1`} id='icon1' style={{ color: oppo3 }} />
                                            }
                                        </center>
                                        <h2 id='t1' style={{ color: oppo1, fontFamily: oppo, textAlign: oppo4 }} >{logoname}</h2>
                                        <p id='p1' style={{ color: oppo1, fontFamily: oppo, textAlign: oppo4 }}>{Slogan}</p>
                                    </div><br />
                                    <center>
                                        <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button> <button type='button' name={"show18"} id='b1' onClick={s1}>✎</button>
                                    </center>
                                </div> </>}

                                {show19 && <>    <div className='col-4'>
                                    <div class="card hh"  >
                                        <div className='container' id='gs7'><h1></h1>
                                            <div className='row' id='gs77'>
                                                <div className='col-1'></div>
                                                <div class="col-5" id='gs8' style={{ backgroundColor: oppo2, fontFamily: oppo, textAlign: oppo4 }}><h1></h1>{sp[0]}</div>
                                                <div class="col-5" id='gs88' style={{ fontFamily: oppo, textAlign: oppo4 }}><h1></h1>{sp[1]}</div>
                                                <div className='col-1'></div>

                                            </div><h2></h2>


                                        </div>

                                    </div><br />
                                    <center>
                                        <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button> <button type='button' name={"show19"} id='b1' onClick={s1}>✎</button>
                                    </center>
                                </div></>}
                                {show20 && <>  <div className='col-4'>

                                    <div class="card card- hh" style={{ backgroundColor: oppo2 }}>
                                        <center>
                                            {/* {data1.length >= 2 && (<i class={data1[0]} alt={`Image 1`} id='icon1' style={{color:oppo3}} />)} */}
                                            {iconshow &&
                                                <i class={data1[0]} alt={`Image 1`} id='icon1' style={{ color: oppo3 }} />}
                                            {iconshow1 &&
                                                <i class={newicon} alt={`Image 1`} id='icon1' style={{ color: oppo3 }} />
                                            }




                                            <h4 id='hl' style={{ color: oppo1, fontFamily: oppo, textAlign: oppo4 }}>{logoname}<img src={line} id='img6'></img> </h4>


                                        </center>



                                    </div>
                                    <center>
                                        <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button> <button type='button' name={"show20"} id='b1' onClick={s1}>✎</button>
                                    </center>

                                </div></>}
                                {show21 && <> <div className='col-4'>

                                    <div class="card card- hh" style={{ backgroundColor: oppo2 }}>
                                        <div class="logo-holder " >
                                            <center style={{ marginTop: "-50px" }}>

                                                <h3 id='gs44' style={{ color: oppo1, fontFamily: oppo }} >{firstChar}</h3>
                                                <div id='gs55' style={{ textAlign: oppo4 }}><span style={{ fontFamily: "garet" }}>{logoname}</span></div>

                                            </center>

                                        </div>

                                    </div>
                                    <center>
                                        <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button> <button type='button' name={"show21"} id='b1' onClick={s1}>✎</button>
                                    </center>

                                </div></>}

                            </div>
                        </center>
                    </div>
                </>
            }


            {all &&

                <>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-5'></div>
                            <div className='col-6'>&nbsp;&nbsp;&nbsp;&nbsp;<img src={i1}></img></div>

                            <div className='col-1'><br />
                                <button className='btn btn-primary'>Sign In</button></div>
                        </div>
                    </div>
                    <hr></hr>



                    <div className='contanier'>
                        {/* 1 */}
                        <div className='row'>
                            <div className='col-4'>

                                <div class="card card-2 hh">
                                    <center><br />
                                        <span style={{ fontSize: "150px", fontFamily: "Garamond", zIndex: "10" }}>{firstChar}</span>

                                        <span style={{ fontSize: "150px", fontFamily: "Garamond", zIndex: "10" }}>{secondChar}</span>
                                        <div id='gs2'>
                                            <span style={{ color: "darkgrey" }}>{logoname}</span>
                                        </div>
                                    </center>


                                </div>
                                <center>
                                    <button type='button' name={"show"} id='b1' onClick={s1}>✎</button>
                                    
                                </center>

                            </div>
                            <div className='col-4'>

                                <div class="card card-2">
                                    <div class="logo-holder " id='bg3' >
                                        <center>
                                            <h1 >{logoname}</h1>

                                        </center>

                                    </div>

                                </div>
                                <center>
                                    <button type='button' name={"show1"} id='b1' onClick={s1}>✎</button>
                                </center>

                            </div>
                            <div className='col-4'>

                                <div class="card card-2">
                                    <div class="logo-holder " >
                                        <center style={{ marginTop: "-50px" }}>
                                            <div class="outer">
                                                <div class="inner"><h3 id='gs4' >{firstChar}</h3></div>
                                                <div id='gs5'><span style={{ fontFamily: "Segoe Script" }}>{logoname}</span></div>
                                            </div>
                                        </center>

                                    </div>

                                </div>
                                <center>
                                    <button type='button' name={"show2"} id='b1' onClick={s1}>✎</button>
                                </center>

                            </div>

                        </div><br />
                        {/* -------------------------------- */}
                        {/* 2 */}
                        <div className='row'>
                            {/* 1 */}
                            <div className='col-4'>

                                <div class="card card-2">
                                    <div class="logo-holder " id='bg3' >
                                        <div class="image-container">
                                            <img src={p1} alt="Your Image" style={{ width: "100%" }} />
                                            <div class="text-overlay">
                                                <p style={{ fontFamily: "'Lucida Handwriting' ,cursive", fontSize: "26px", marginLeft: "40px", marginTop: "-100px" }}>{logoname}</p>
                                                <p>{Slogan}</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <center>
                                    <button type='button' name={"show3"} id='b1' onClick={s1}>✎</button>
                                </center>

                            </div>

                            {/* 2 */}
                            <div className='col-4'>
                                <div class="card hh"  >
                                    <div class="logo-holder logo-1">

                                        <h3 style={{ color: c3 }}>{logoname}</h3>
                                        <p style={{ color: c4 }}>{Slogan}</p>

                                    </div>
                                </div><br />
                                <center>
                                    <button type='button' name={"show4"} id='b1' onClick={s1}>✎</button>
                                </center>
                            </div>
                            {/* 3 */}
                            <div className='col-4'>
                                <div class="card card-2">
                                    <center> {data1.length >= 2 && (<i class={data1[2]} alt={`Image 1`} id='icon2' />)} </center>
                                    <h2 id='t3' style={{ color: c1, fontFamily: "'Bangers', cursive" }}><b>{logoname}</b></h2>
                                    <p id='p3' style={{ color: c6 }}><b>{Slogan}</b>&nbsp; </p>

                                </div>
                                <center>
                                    <button type='button' name={"show5"} id='b1' onClick={s1}>✎</button>
                                </center>
                            </div>
                        </div><br />
                        {/* -------------------------------- */}
                        {/* 3 */}
                        <div className='row'>
                            {/* 1 */}
                            <div className='col-4'>
                                <div class="card card-2">
                                    <div class="logo-holder logo-6">

                                        <h3>{firstChar}{secondChar} <span>{logoname}</span></h3>

                                    </div>

                                </div>
                                <center>
                                    <button type='button' name={"show6"} id='b1' onClick={s1}>✎</button>
                                </center>
                            </div>
                            {/* 2 */}
                            <div className='col-4'>
                                <div class="card card-1">
                                    <div class="logo-holder logo-2">

                                        <h3 style={{ color: c9 }}>{logoname}</h3>
                                        <p style={{ color: c3 }}>{Slogan}</p>

                                    </div>

                                </div>
                                <center>
                                    <button type='button' name={"show7"} id='b1' onClick={s1}>✎</button>
                                </center>
                            </div>
                            {/* 3 */}
                            <div className='col-4'>
                                <div class="card card-2">
                                    <div class="logo-holder logo-3">

                                        <h3 style={{ color: c1 }}>{logoname}</h3>
                                        <p>{Slogan}</p>

                                    </div>

                                </div>
                                <center>
                                    <button type='button' name={"show8"} id='b1' onClick={s1}>✎</button>
                                </center>
                            </div>
                        </div><br />
                        {/* -------------------------------- */}
                        {/* 4 */}

                        <div className='row'>
                            {/* 1 */}
                            <div className='col-4'>
                                <div class="card hh"  >
                                    <div class="logo-holder logo-4">

                                        <h3 style={{ color: c2 }}>{logoname}</h3>
                                        <p>{Slogan}</p>

                                    </div>
                                </div><br />
                                <center>
                                    <button type='button' name={"show9"} id='b1' onClick={s1}>✎</button>
                                    <button onClick={handleDownload1}><i class="fa fa-download" aria-hidden="true"></i></button>
                                </center>
                            </div>
                            {/* 2 */}
                            <div className='col-4'>
                                <div class="card card-1">
                                    <div class="logo-holder logo-5">

                                        <h3 style={{ color: c5 }}>{logoname}</h3><br />
                                        <p>{Slogan}</p>

                                    </div>

                                </div>
                                <center>
                                    <button type='button' name={"show10"} id='b1' onClick={s1}>✎</button>
                                </center>
                            </div>
                            {/* 3 */}
                            <div className='col-4'>
                                <div class="card hh" id='bg1' >
                                    <div class="image-container">
                                        <img src={bg} alt="Your Image" />
                                        <div class="text-overlay">
                                            <p style={{ fontFamily: "fantasy", fontSize: "26px", marginLeft: "40px" }}>{logoname}</p>
                                        </div>
                                    </div>
                                </div><br />
                                <center>
                                    <button type='button' name={"show11"} id='b1' onClick={s1}>✎</button>
                                </center>
                            </div>
                        </div><br />
                        {/* -------------------------------- */}
                        {/* 5 */}
                        <br />
                        <div className='row'>
                            {/* 1 */}
                            <div className='col-4'>
                                <div class="card hh"  >

                                    <div class="logo-holder logo-7">
                                        <i class="fas fa-book-open"></i>
                                        <div class="left">
                                            <h3>{logoname}</h3>
                                            <p>{Slogan}</p>
                                        </div>

                                    </div>
                                </div><br />
                                <center>
                                    <button type='button' name={"show12"} id='b1' onClick={s1}>✎</button>
                                </center>
                            </div>
                            {/* 2 */}
                            <div className='col-4'>
                                <div class="card card-1">
                                    <div class="logo-holder logo-10">

                                        <h3>{logoname}</h3>
                                        <br />
                                        <p style={{ backgroundColor: c7 }}>&nbsp;</p>

                                    </div>

                                </div>
                                <center>
                                    <button type='button' name={"show13"} id='b1' onClick={s1}>✎</button>
                                </center>
                            </div>
                            {/* 3 */}
                            <div className='col-4'>

                                <div class="card card-2">
                                    <div class="logo-holder " id='bg3' >
                                        <center>
                                            <span style={{ fontSize: "100px", fontFamily: "Garamond" }}>{firstChar}</span>
                                            <span id='v1'><b>{logoname}</b></span>
                                            <span style={{ fontSize: "100px", fontFamily: "Garamond" }}>{secondChar}</span>
                                        </center>

                                    </div>

                                </div>
                                <center>
                                    <button type='button' name={"show14"} id='b1' onClick={s1}>✎</button>
                                </center>

                            </div>

                        </div>
                        {/* -------------------------------- */}
                        <div className='row'>
                            <div className='col-4'>

                                <div class="card card-2">
                                    <div class="logo-holder " id='bg3' >
                                        <center>
                                            <span style={{ fontSize: "100px", fontFamily: "Alegreya", color: c4, marginLeft: "10px" }}>{firstChar}</span>
                                            <span id='v2'>I</span>
                                            <span style={{ fontSize: "100px", fontFamily: "Alegreya", color: c4 }}>{secondChar}<br />
                                            </span>
                                            <h4 style={{ color: c4, fontFamily: "Alegreya Sans SC" }}>{logoname}</h4>
                                        </center>

                                    </div>

                                </div>
                                <center>
                                    <button type='button' name={"show15"} id='b1' onClick={s1}>✎</button>
                                </center>

                            </div>
                            <div className='col-4'>

                                <div class="card card-2">
                                    <div class="logo-holder " id='bg2'>

                                        <h3 style={{ fontSize: "90px", color: c6 }}>{firstChar}<span>{secondChar}</span></h3><br />
                                        <p style={{ color: c8, fontFamily: "cursive", fontSize: "18px" }}>{logoname}</p>
                                    </div>

                                </div>
                                <center>
                                    <button type='button' name={"show16"} id='b1' onClick={s1}>✎</button>
                                </center>

                            </div>
                            <div className='col-4'>
                                <div class="card hh" id='bg1' >
                                    <center>
                                        <div class="image-container1">
                                            <img src={p} alt="Your Image" />
                                            <div class="text-overlay">
                                                <p style={{ fontFamily: "Aclonica Font", fontSize: "50px", }}>{logoname}</p>
                                            </div>
                                        </div></center>
                                </div><br />
                                <center>
                                    <button type='button' name={"show17"} id='b1' onClick={s1}>✎</button>
                                </center>
                            </div>

                        </div>
                        <br />
                        {/* ------------------------------------ */}
                        <div className='row'>
                            <div className='col-4'>
                                <div class="card hh"  >
                                    <center>
                                        {data1.length >= 2 && (<i class={data1[0]} alt={`Image 1`} id='icon1' />)}

                                    </center>
                                    <h2 id='t1' style={{ color: c2 }} >{logoname}</h2>
                                    <p id='p1' style={{ color: c2 }}>{Slogan}</p>
                                </div><br />
                                <center>
                                    <button type='button' name={"show18"} id='b1' onClick={s1}>✎</button>
                                </center>
                            </div>
                            <div className='col-4'>
                                <div class="card hh"  >
                                    <div className='container' id='gs7'><h1></h1>
                                        <div className='row' id='gs77'>
                                            <div className='col-1'></div>
                                            <div class="col-5" id='gs8' style={{ backgroundColor: c8 }}><h1></h1>{sp[0]}</div>
                                            <div class="col-5" id='gs88'><h1></h1>{sp[1]}</div>
                                            <div className='col-1'></div>

                                        </div><h2></h2>


                                    </div>

                                </div><br />
                                <center>
                                    <button type='button' name={"show19"} id='b1' onClick={s1}>✎</button>
                                </center>
                            </div>
                            <div className='col-4'>

                                <div class="card card-2">
                                    <center>
                                        {data1.length >= 2 && (<i class={data1[0]} alt={`Image 1`} id='icon1' />)}
                                        <h4 id='hl'>{logoname}<img src={line} id='img6'></img> </h4>


                                    </center>



                                </div>
                                <center>
                                    <button type='button' name={"show20"} id='b1' onClick={s1}>✎</button>
                                </center>

                            </div>
                        </div>
                        {/* ------------------------------------- */}
                        <div className='row'>
                            <div className='col-4'>

                                <div class="card card-2">
                                    <div class="logo-holder " >
                                        <center style={{ marginTop: "-50px" }}>

                                            <h3 id='gs44' style={{ color: c7 }} >{firstChar}</h3>
                                            <div id='gs55'><span style={{ fontFamily: "garet" }}>{logoname}</span></div>

                                        </center>

                                    </div>

                                </div>
                                <center>
                                    <button type='button' name={"show21"} id='b1' onClick={s1}>✎</button>
                                </center>

                            </div>
                        </div>
                    </div>
                </>
            }

        </div>

    );
};

export default ShowCard;
