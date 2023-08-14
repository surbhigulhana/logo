import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import i1 from '../images/logo.jpg';
import p1 from '../images/pattern1.jpg'
import p2 from '../images/pattern2.jpg'
import p3 from '../images/pattern3.jpg'
import p4 from '../images/pattern4.jpg'
import p5 from '../images/pattern5.jpg'
import p6 from '../images/pattern6.jpg'
import p7 from '../images/pattern7.jpg'
import p8 from '../images/pattern8.jpg'
import p9 from '../images/pattern9.jpg'

const ColorSelect = () => {
    const history = useNavigate();
    const data = require("./Color.json");


    const [selectedColor, setSelectedColor] = useState(null);

    const handleCheckboxClick = (event) => {
        const value = event.target.value;
        setSelectedColor(value);
    };
    const matchedColor = data.find((color1) => color1.Color === selectedColor);
    console.log("kxjmk", matchedColor)
    const logoname = localStorage.getItem("Name");
    const sp = logoname.split(" ");
    const firstChar = sp.length > 0 ? sp[0].charAt(0) : '';
    const secondChar = sp.length > 1 ? sp[1]?.charAt(0) || '' : ''; // Use optional chaining for the second character
    console.log(firstChar,secondChar,logoname)

    function send() { 
        if(secondChar ===""){
            history("/OneLetter", { state: matchedColor })
        }
        else{
        history("/ShowCard", { state: matchedColor })
        }
     
    }
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-5'></div>
                    <div className='col-6'>&nbsp;&nbsp;&nbsp;&nbsp;<img src={i1}></img></div>

                    <div className='col-1'><br/>
                        <button className='btn btn-primary' >Sign In</button></div>
                </div>
            </div>
            <hr></hr>
            <div className='container'>
                <div class="mt-3">
                    <div className='row'>
                        <div className='col-4'></div>
                        <div className='col-4'><center><h4>Choose color inspiration</h4></center></div>
                        <div className='col-4'></div>

                    </div>
                    <div className='row'>
                        <div className='col-3'></div>
                        <div className='col-6'><center><h3><b>You can choose up to 3 color palettes</b></h3></center></div>
                        <div className='col-3'></div>

                    </div>
                    <br /><br />








                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4" id='sg1'>
                            <input class="checkbox-tools  " type="checkbox" name="tools" id="tool-1" value="Black" onChange={handleCheckboxClick}
                                checked={selectedColor === 'Black'} /> &nbsp;
                            <label class="for-checkbox-tools zoom" for="tool-1">
                                <img src={p1} width="100%" />
                            </label>
                        </div>
                        <div class="col-md-4">
                            <input class="checkbox-tools " type="checkbox" name="tools" id="tool-2" value="Blue" onChange={handleCheckboxClick}
                                checked={selectedColor === 'Blue'} /> &nbsp;
                            <label class="for-checkbox-tools zoom" for="tool-2">
                                <img src={p2} width="100%" />
                            </label>

                        </div>
                        <div class="col-md-4">
                            <input class="checkbox-tools " type="checkbox" name="tools" id="tool-3" value="Skyblue" onChange={handleCheckboxClick}
                                checked={selectedColor === 'Skyblue'} /> &nbsp;
                            <label class="for-checkbox-tools zoom" for="tool-3">
                                <img src={p3} width="100%" />
                            </label>
                        </div>
                    </div>

                    <div class="row" style={{ marginTop: "20px;" }}>
                        <div class="col-md-4">
                            <input class="checkbox-tools  " type="checkbox" name="tools" id="tool-4" value="Green" onChange={handleCheckboxClick}
                                checked={selectedColor === 'Green'} /> &nbsp;
                            <label class="for-checkbox-tools zoom" for="tool-4">
                                <img src={p4} width="100%" />
                            </label>
                        </div>
                        <div class="col-md-4">
                            <input class="checkbox-tools " type="checkbox" name="tools" id="tool-5" value="Purple" onChange={handleCheckboxClick}
                                checked={selectedColor === 'Purple'} /> &nbsp;
                            <label class="for-checkbox-tools zoom" for="tool-5">
                                <img src={p5} width="100%" />
                            </label>

                        </div>
                        <div class="col-md-4">
                            <input class="checkbox-tools " type="checkbox" name="tools" id="tool-6" value="Pink" onChange={handleCheckboxClick}
                                checked={selectedColor === 'Pink'} /> &nbsp;
                            <label class="for-checkbox-tools zoom" for="tool-6">
                                <img src={p6} width="100%" />
                            </label>
                        </div>
                    </div>

                    <div class="row" style={{ marginTop: "20px;", paddingBottom: "80px" }}>
                        <div class="col-md-4">
                            <input class="checkbox-tools  " type="checkbox" name="tools" id="tool-7" value="Red" onChange={handleCheckboxClick}
                                checked={selectedColor === 'Red'} /> &nbsp;
                            <label class="for-checkbox-tools zoom" for="tool-7">
                                <img src={p7} width="100%" />
                            </label>
                        </div>
                        <div class="col-md-4">
                            <input class="checkbox-tools " type="checkbox" name="tools" id="tool-8" value="Orange" onChange={handleCheckboxClick}
                                checked={selectedColor === 'Orange'} /> &nbsp;
                            <label class="for-checkbox-tools zoom" for="tool-8">
                                <img src={p8} width="100%" />
                            </label>

                        </div>
                        <div class="col-md-4">
                            <input class="checkbox-tools " type="checkbox" name="tools" id="tool-9" value="Yellow" onChange={handleCheckboxClick}
                                checked={selectedColor === 'Yellow'} /> &nbsp;
                            <label class="for-checkbox-tools zoom" for="tool-9">
                                <img src={p9} width="100%" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <br /><div className='row'>
                    <div className='col-4'></div>

                    <div className='col-4'>
                        <center>
                            <button className='btn btn-info' onClick={send} >Continue →</button></center>
                    </div> <div className='col-4'></div>

                </div>
            </div>
        </div>
    )
}

export default ColorSelect


// <li style={{ backgroundColor: oppo2, background: c5 }} id='edit' class="hh" onClick={handleDownload1} >

// <div class="logo-holder logo-1" >

//     <h3 style={{ color: oppo1, fontFamily: oppo }}>
//         {data1.length >= 2 && (
//             <i class={newicon} alt={`Image 1`} id='s1' style={{ color: oppo3 }} />
//         )}<br />

//         {logoname}</h3>
//     <p style={{ color: oppo1, fontFamily: oppo }}>{Slogan}</p>

// </div>


// </li>