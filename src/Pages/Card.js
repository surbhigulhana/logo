import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import i1 from '../images/logo.jpg'
const Card = () => {
    // const img = require("./Icon.json")
    
    const img = require("./icon1.json")
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
      
        setShow(false)
        setSelectedCategory(event.target.value);
    };
    console.log("ljk", selectedCategory)
    const cate1= localStorage.setItem("cateName",selectedCategory)

    const [show, setShow] = useState(true);
    const history = useNavigate();
    const [file, setFile] = useState([]);
    const logo = (e) => {
        const { value, checked } = e.target;
        console.log(`${value} is ${checked}`);
        if (checked) {
            setFile([...file, value]);

        } else {
            setFile(file.filter((e) => e !== value));
        }

    };
    console.log("khnjhb",file)
    const jsonData = JSON.stringify(file);
    const gg = localStorage.setItem("array", jsonData);
    console.log(gg)
  

    function chk() {

        if (file.length == 3) {
            history("/ColorSelect", { state: file });
        }
        else if (file.length < 3) {
            alert("please select 3 icon");
        }
        else {
            alert("limit 3")
        }

    }
    const[cate,setCate] =useState("");
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
            <div className='row'>
                <div className='col-2'></div>

                <div className='col-8'>
                    <h6><b>
                        Choose your business field
                    </b>
                    </h6></div>

                <div className='col-2'></div>

            </div>
            <div className='row'>
                <div className='col-2'></div>

                <div className='col-8'>

                    <select className='form-control' value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="">Select a category</option>
                        {img.map((category, index) => (
                            <option key={index} value={category.category}>
                                {category.category}
                            </option>
                        ))}

                    </select>

                    {show && <>
                        {img.map((category) =>
                            category.images.map((image, index) => (
                                // <img
                                //     key={index}
                                //     src={image.i1}
                                //     alt={`Icon ${index + 1}`}
                                //     style={{ width: '60px', height: '60px', padding: "10px", margin: "10px" }} // Adjust the size as needed
                                // />
                                <i key={index} class={image.i1} alt={selectedCategory} style={{ fontSize:"30px", padding: "10px", margin: "10px" }}  />
                            ))
                        )}</>}


                    {selectedCategory && (
                        <div>
                            {img
                                .find((category) => category.category === selectedCategory)
                                .images.map((image, index) => (
                                    <>
                                        <input type="checkbox" id="myCheckbox1" multiple onChange={logo} value={image.i1} />
                                        {/* <img key={index} src={image.i1} alt={selectedCategory} style={{ width: '60px', height: '60px', padding: "10px", margin: "10px", marginTop: "10px" }} /> */}
                                        <i key={index} class={image.i1} name={image.i1} alt={selectedCategory} style={{ fontSize:"30px", padding: "10px", margin: "10px" }}  />
                                    </>
                                ))}
                        </div>
                    )}
                </div>

                <div className='col-2'></div>

            </div>
            </div>

            <div className='container'>
                <br /><div className='row'>
                    <div className='col-4'></div>

                    <div className='col-4'>
                        <center>
                            <button className='btn btn-info' onClick={chk}>Continue →</button></center>
                    </div> <div className='col-4'></div>

                </div>
            </div>
        </div>
    )
}

export default Card
