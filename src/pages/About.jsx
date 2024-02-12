import about from "../assets/about.png";

const About = () => {
  return (
    <section className="about-section">
        <div className="about-container">
          <img src={about} alt="" className="about" />
          <div className="about-content">
            <h1>About Us</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
            </p>
            <button>
                <a href="#">Read More</a>
            </button>
          </div>
        </div>
    </section>
  )
}
export default About