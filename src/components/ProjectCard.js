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
            <a href={CodeLink} className="btn viewBtn" target="blank" rel=""><i className="fas fa-eye"></i> View</a>
            <a href={githubLink} className="btn codeBtn" target="blank" rel=""><i className="fas fa-code"></i> Code</a>
          </div>
          </div>
        </div>
      </div>
    </Col>
  )
}