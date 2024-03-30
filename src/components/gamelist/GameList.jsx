import { useState } from "react";

import "./gameList.css";
import games from "../../../game-data.json";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function GameList() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGames = games.filter((game) => {
    return (
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.providerName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="title-games-list">Games List</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              style={{ padding: "10px", margin: "10px 0", width: "20%" }}
              type="text"
              className="form-control"
              placeholder="Search Games...🔍"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="game-card">
          {filteredGames.map((game) => (
            <Col key={game.id} xs={12} md={6} lg={4} xl={3}>
              <div className="game-list-card">
                <Image src={game.thumb?.url} fluid />
                <h4>{game.title}</h4>
                <br />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default GameList;
