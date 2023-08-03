import React, { useEffect, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Button, Col } from "react-bootstrap";
import listWords from "../Words";

export default function Game() {
  const { number, minute, spy: spyParam } = useParams();
  const [word, setWord] = useState("");
  const [spyNumbers, setSpyNumbers] = useState(0);
  const [notsee, setNotsee] = useState(0);
  const [time, setTime] = useState(0);
  const [show, setShow] = useState(false);

  const spy = useMemo(() => {
    const spies = [];
    for (let index = 0; index < spyNumbers; index++) {
      const randomNum = Math.floor(Math.random() * Number(number)) + 1;
      spies.push(randomNum);
    }
    return spies;
  }, [number, spyNumbers]);

  useEffect(() => {
    setWord(listWords[Math.floor(Math.random() * listWords.length)]);
    setSpyNumbers(Number(spyParam));
    setNotsee(Number(number));
    setTime(Number(minute) * 60);
  }, [spyParam, number, minute]);

  useEffect(() => {
    const updateTimer = async () => {
      if (notsee === 0 && time !== 0) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setTime((prevTime) => prevTime - 1);
      }
    };
    updateTimer();
  }, [notsee, time]);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  const decrementNotseeAndToggleShow = () => {
    setNotsee((prev) => prev - 1);
    toggleShow();
  };

  return (
    <Container fluid style={{ height: "100vh", backgroundColor: "brown" }}>
      <Row className="h-100 align-items-center justify-content-center">
        {notsee !== 0 && !show && (
          <Col xs={6} className="d-grid gap-2">
            <Button
              onClick={toggleShow}
              variant="secondary"
              size="lg"
              style={{ borderColor: "white" }}
            >
              show
            </Button>
          </Col>
        )}

        {notsee !== 0 && show && (
          <Col xs={6} className="d-grid gap-2">
            <Button
              variant="secondary"
              size="lg"
              style={{ borderColor: "white" }}
              disabled
            >
              {spy.find((item) => item === notsee) ? "spy" : word}
            </Button>
            <Button
              onClick={decrementNotseeAndToggleShow}
              variant="secondary"
              size="lg"
              style={{ borderColor: "white" }}
            >
              hide
            </Button>
          </Col>
        )}

        {notsee === 0 && time !== 0 && (
          <Col xs={6} className="d-grid gap-2">
            <Button
              variant="secondary"
              size="lg"
              style={{ borderColor: "white" }}
            >
              {time}
              <sub>s</sub>
            </Button>
          </Col>
        )}

        {time === 0 && notsee === 0 && (
          <Col xs={6} className="d-grid gap-2">
            <Button
              variant="secondary"
              size="lg"
              style={{ borderColor: "white" }}
              disabled
            >
              {"The end"}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              style={{ borderColor: "white" }}
            >
              <Link
                to="/config"
                style={{ color: "white", textDecoration: "none" }}
              >
                Restart
              </Link>
            </Button>
          </Col>
        )}
      </Row>
    </Container>
  );
}