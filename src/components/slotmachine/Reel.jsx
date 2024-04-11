import FruitImage from "./FruitImage";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import "./reel.css";

function Reel({ spinReel, isSpinning }) {
  const [fruit, setFruit] = useState("");

  // Set up interval to call spinReel function
  useEffect(() => {
    if (isSpinning) {
      const intervalId = setInterval(() => {
        setFruit(spinReel());
      }, 100);
      return () => clearInterval(intervalId);
    }
  }, [isSpinning, spinReel]);

  return (
    <div className="reel">
      {fruit ? (
        <FruitImage fruit={fruit} />
      ) : (
        <div>
          <Container>
            <Row>
              <Col xs={10} md={10}>
                <Image src={`./apple.png`} alt="fruit" thumbnail />
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
}

export default Reel;

Reel.propTypes = {
  spinReel: PropTypes.func.isRequired,
  isSpinning: PropTypes.bool.isRequired,
};

////////////////////////////////////////////////////////////////
