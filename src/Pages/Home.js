import React, { useState } from 'react'
import i1 from '../images/l.png'
import { useNavigate } from 'react-router-dom';


const Home = () => {
 
const history =useNavigate();
  const [Name, setName] = useState("");
  const [Slogan, setSlogan] = useState("");
  const[msg,setMsg] =useState("");
  console.log(msg)
  function send(e) {

    e.preventDefault(); // Prevent form submission for now

    // Check if the "Name" field is empty
    if (Name === '') {
      setMsg(<p style={{ color: 'red' }}>Please enter a Company Name.</p>);
    } else {
      const Company = localStorage.setItem("Name", Name);
      const CompanySlogan = localStorage.setItem("Slogan", Slogan);
      history("/Card")
    }
  }
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-5'></div>
          <div className='col-6'>&nbsp;&nbsp;&nbsp;&nbsp;<img src={i1} id='suruicon'></img></div>

          <div className='col-1'><br/>
            <button className='btn btn-primary'>Sign In</button></div>
        </div>
      </div>
      <hr></hr>
    
      <div className='container-xl' id='c1'>
        <br /><br />
        <div className='row'>
          <div className='col-3'></div>
          <div className='col-6'><center><h4>Crafting Your Identity, One Logo at a Time</h4></center></div>
          <div className='col-3'></div>

        </div>
        <div className='row'>
          <div className='col-3'></div>
          <div className='col-6'><center><h4><b>Please provide more information about your businesssss</b></h4></center></div>
          <div className='col-3'></div>

        </div>



        
        <div className='row'>
          <div className='col-4'></div>
          <div className='col-4'><center><h6>Empowering Your Business Through Tailored Logo Creations</h6></center></div>
          <div className='col-4'></div>

        </div>
        <br />
        <form method=''>
        <div className='row'>
          <div className='col-4'></div>
          <div className='col-4'><center><div class="form-group">

            <input type="text" class="form-control" id="usr" placeholder='Enter Company Name' value={Name} onChange={(e) => { setName(e.target.value) }} required />
            {msg}
          </div></center></div>
          <div className='col-4'></div>

        </div>


        <div className='row'>
          <div className='col-4'></div>

          <div className='col-4'><center><div class="form-group">

            <input type="text" class="form-control" id="usr" placeholder='Tagline (Optional)' value={Slogan} onChange={(e) => {
              setSlogan(e.target.value)
            }} />
          </div></center></div> <div className='col-4'></div>

        </div>
       
       
          <br/>
            <center>
              <button className='btn btn-info' type='submit' onClick={send}>Continue →</button></center>
              </form>
      </div>

     
    </div>
  )
}

export default Home;
