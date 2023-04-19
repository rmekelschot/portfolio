import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Home Page
      <ul>
        <li>
          <Link to="./About">About</Link>
        </li>
        <li>
          <Link to="./projects">Projects</Link>
        </li>
        <li>
          <Link to="./contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
