import dp from '../assets/img/longHair.jpg';

export const Education = () => {
    return(
        <div className="eduabout">
            <section className="about" id="about">
                <h2 className="heading"><i className ="fas fa-user-alt"></i> About Me</h2>
                <div className="row">
                    <img src = {dp} alt="DP" />
                    <div className="content">
                        <h3>I'm Md Samir</h3>
                        <span className="sub-tag">Passionate Coder and Web Developer </span>
                        <p>Currently pursuing Bachelor of Technology in Computer Science Engineering from Asansol Engineering College
                        </p>
                        <div className="info-container">
                            <div className="info">
                            <p><span> Age: </span> 21</p>
                            <p><span> College : </span> Asansol Engineering College</p>
                            <p><span> Email : </span> samiralammumtazalam@gmail.com</p>
                            <p><span> Address : </span> Sijua, Dhanbad, Jharkhand - 828121 </p>
                            </div>
                        </div>
                        <div className="resumebtn">
                            <a href="https://drive.google.com/file/d/1e-0fy_dXo4nnVdfl6gTnLcAKXeFG3OyJ/view?usp=sharing" target={"_blank"} className="btn"><span>Resume</span>
                            <i className="fa fa-chevron-circle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="education">
                <h2> <i className='fas fa-book-reader'></i> My Education</h2>
                <div className="box">
                    <a href="http://tatadavsijua.org/">
                        <div className="image">
                            <img src="https://aecwb.edu.in/img/1.jpg" alt="" />        
                        </div>
                        <div className="collegeContent">
                            <h3>Asansol Engineering College (AEC) </h3>
                            <p>Bachelor of Technology <br /> in Computer Science</p>
                            <h4>2020 - 2024</h4>
                        </div>
                    </a> 
                </div>
                <div className="box">
                    <a href="https://www.aecwb.edu.in/">
                        <div className="image">
                            <img src="https://www.yayskool.com/images/school/tata-dav-school-dhanbad-99053643.jpg" alt="" />        
                        </div>
                        <div className="collegeContent">
                            <h3>Tata DAV <br /> Sijua, Dhanbad</h3>
                            <p>11 - 12 | Science</p>
                            <h4>2018 - 2020</h4>
                        </div>
                    </a> 
                </div>
            </section>
        </div>
    )
}
