import 'react-multi-carousel/lib/styles.css';
import "../components/skills1.css";

export const Skills = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 5
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 3
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 2
  //   }
  // };

  return (
    <section className="skill" id="skills">
        <div className="skill-title"><i class="fa-solid fa-screwdriver-wrench"></i> Skills</div>
        <div className="container">
            <div className="skill-card one"><i class="fa fa-brands fa-java"></i> <br /> JAVA</div>
            <div className="skill-card two"><i class="fa fa-brands fa-js"></i><br /> JAVASCRIPT</div>
            <div className="skill-card three"><i class="fa fa-html5"></i> <br /> HTML</div>
            <div className="skill-card four"><i class="fa fa-css3"></i><br /> CSS</div>
            <div className="skill-card five"><i class="fa fa-brands fa-react"></i> <br /> REACTJS</div>
            <div className="skill-card six"><i class="fa fa-brands fa-node"></i> <br /> NODEJS</div>
            <div className="skill-card seven"><i class="fa fa-brands fa-node-js"></i> <br /> EXPRESSJS</div>
            <div className="skill-card eight"><i class="fa fa-solid fa-database"></i> <br /> MONGODB</div>
            <div className="skill-card nine"> <i class="fa fa-solid fa-fire"></i><br /> FireBase</div>
            <div className="skill-card ten"><i class="fa fa-brands fa-bootstrap"></i> <br /> BootStrap</div>
        </div>
    </section>
  )
}