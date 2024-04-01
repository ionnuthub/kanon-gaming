import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";

import "./fruitImage.css";

function FruitImage({ fruit }) {
  return (
    <div className="fruit-image">
      <Container>
        <Row>
          <Col xs={10} md={10}>
            <Image src={`./${fruit}.png`} alt="fruit" thumbnail />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

FruitImage.propTypes = {
  fruit: PropTypes.string.isRequired,
};

export default FruitImage;
