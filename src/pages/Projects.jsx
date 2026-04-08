function Projects() {
  return (
    <div className="page">
      <h1>Projects</h1>

      <h2>Current Project</h2>
      <div className="project">
        <h3>Personal Portfolio Website</h3>
        <p>
          A personal website showcasing my projects, skills, and experience.
          Built using React and deployed on Vercel.
        </p>
      </div>

      <h2>Newer Projects</h2>

      <div className="project">
        <h3>GeoGuessr-Inspired Game</h3>
        <p>
          A location-guessing game inspired by GeoGuessr. Users explore locations
          and try to guess where they are.
        </p>

        <a
          href="https://github.com/TheClayFerg/WorldWideWonders"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub
        </a>
      </div>

      <h2>Older Projects</h2>

      <div className="project">
        <h3>Food-as-a-Service</h3>
        <p>
          A DoorDash-inspired platform designed for local businesses to manage
          orders and deliveries.
        </p>

        <a
          href="https://github.com/sorrymint/food-as-a-service"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub
        </a>
      </div>

      <div className="project">
        <h3>Popular Movie API</h3>
        <p>
          A project using a movie API to display popular movies and related
          information.
        </p>

        <a
          href="https://github.com/Lrid04/ByteJamProject"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub
        </a>
      </div>
    </div>
  );
}

export default Projects;