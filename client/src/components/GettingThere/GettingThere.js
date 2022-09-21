import "./FindUs.css";
import Container from "react-bootstrap/Container";
import FindUs from "./FindUs";

const GettingThere = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Container>
          <div className="row">
          <FindUs></FindUs>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default GettingThere;
