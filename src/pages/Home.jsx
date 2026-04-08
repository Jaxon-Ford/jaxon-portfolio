import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>Jaxon Ford</h1>
      <h2>Aspiring Software Engineer</h2>

      <p>
        Passionate developer skilled in Python, Java, and C#. I enjoy building
        applications, learning new technologies, and solving real-world problems
        through software development.
      </p>

      <p>
        Currently pursuing an Associate of Applied Science in Computer Software
        Development at Indian Hills Community College.
      </p>

      <div className="home-buttons">
        <Link to="/projects">View Projects</Link>
        <Link to="/about">About Me</Link>
      </div>
    </div>
  );
}

export default Home;