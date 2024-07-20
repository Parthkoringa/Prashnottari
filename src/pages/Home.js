import hero from "../assets/images/hero.svg";
import Button from "../components/Button";
import "./home.css";
import Header  from "../components/Header";

function Home(params) {
  return (
    <div>
      <Header />

      <img src={hero} alt="Question Mark" />
      <div class="card" style={{ width: "30rem" }}>
        <div class="card-body">
          <h1 class="card-title">Welcome to the world Of Questions!</h1>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Button children="Contribute" fill={true} />
          &nbsp; &nbsp; &nbsp;
          <Button children="Solve Questions" fill={false} />
        </div>
      </div>
    </div>
  );
}

export default Home;
