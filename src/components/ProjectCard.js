import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubLink, CodeLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt = "" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <div className="desc">
            <p>{description}</p>
            <div className="btns">
            <a href={githubLink} className="btn viewBtn" target="_blank" rel=""><i className="fas fa-eye"></i> View</a>
            <a href={CodeLink} className="btn codeBtn" target="_blank" rel=""><i className="fas fa-code"></i> Code</a>
          </div>
          </div>
        </div>
      </div>
    </Col>
  )
}

{/* <div class="box tilt">
      <img draggable="false" src="./assests/images/projects/portfolio1.jpg" alt="" />
      <div class="content">
        <div class="tag">
        <h3>Portfolio Website</h3>
        </div>
        <div class="desc">
          <p>Personal portfolio website. Don't need much info about it, just scroll down. You're here only!</p>
          <div class="btns">
            <a href="https://sauravmukherjee44.github.io/Portfolio-Saurav-Mukherjee/" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="https://github.com/SauravMukherjee44/Portfolio-Saurav-Mukherjee" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div> */}