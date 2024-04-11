import './pages.css'


function MakeResume() {



  function resume() {

    const fname = document.getElementById("fname").value
    const lname = document.getElementById("lname").value
    const mail = document.getElementById("mail").value
    const pnumber = document.getElementById("pnumber").value
    const address = document.getElementById("address").value
    const about = document.getElementById("about").value
    const experience = document.getElementById("experience").value
    const exp_year = document.getElementById("exp_year").value
    const salary = document.getElementById("salary").value
    const education = document.getElementById("education").value
    const no_edu = document.getElementById("no_edu").value
    const skill = document.getElementById("skill").value
    const lag = document.getElementById("lag").value

    const div = document.createElement("div")


    div.setAttribute("class", "resume_container")
    div.innerHTML = `
    <div class="resume_form">
        <div class="about_section">
            <div class="nane"> 
            <h3><span>${fname}  ${lname}</span></h3>
            </div><hr/>
            <span class="about">
            ${about}
            </span>
            <div class="contacts">
              <ul>
                <li>Email :${mail}</li>
                <li>Phone Number : ${pnumber}</li>
                <li>address :${address}</li>
              </ul>
            </div>
            <div class="skil">
             <h4>skills</h4>
             ${skill}
            </div>
        </div>

        <div class="exp_section">
            <div class="experience"> 
            <h3> experience</h3>
            ${experience}<br/>
            ${exp_year} year of experience
            </div>
            <div class="education">
            <h3>Education</h3>
            <h5>${no_edu}</h5>
            <p>${education}</p>
            </div>
        </div>
        </div>
        <button>Download</button>
    `
    document.getElementById("resume_box").appendChild(div)

  }

  return (
    <div className="MakeResume-main">
      <header className="MakeResume-header">
        <h1> Make Resume</h1>

      </header>

      <div class="resume_main_container">

        <div class="MakeResume-form">
          <label>First Name :</label>
          <input type="text" id='fname' /><br />

          <label>Last Name :</label>
          <input type="text" id='lname' /><br />

          <label>Email :</label>
          <input type="mail" id='mail' /><br />

          <label>Contact Number :</label>
          <input type="text" id='pnumber' /><br />

          <label>Address :</label>
          <input type="text" id='address' /><br /><br />

          <label>About :</label>
          <input type="text" id='about' /><br />


          <label>Experience :</label>
          <input type="text" id='experience' /><br />

          <label>Total year of experience :</label>
          <input type="number" id='exp_year' /><br />

          <label>Current monthly salary  :</label>
          <input type="number" id='salary' /><br /><br />


          <label>Highest education :</label>
          <input type="text" id='education' /><br />

          <label>Education institute:</label>
          <input type="text" id='no_edu' /><br />

          <label>skills :</label>
          <input type="text" id='skill' /><br />

          <label>languages known :</label>
          <input type="text" id='lag' /><br />

          <button id='sub-btn' onClick={resume}>submit</button>
        </div>

        <div class="resume_box" id='resume_box'></div>

      </div>



    </div>
  );
}

export default MakeResume;