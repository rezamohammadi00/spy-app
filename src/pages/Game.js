import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Button, Col } from "react-bootstrap";

import listWords from "../Words";
import { useMemo } from "react";

export default function Game() {
  const { number, minute, spy: s } = useParams();

  const word = useState(
    listWords[Math.floor(Math.random() * listWords.length)]
  )[0];

  // console.log(s)

  const spyNumbers = useState(Number(s))[0];
  // const [spy, setSpy] = useState([]);
  const [notsee, setNotsee] = useState(Number(number));

  const [time, setTime] = useState(Number(minute) * 60);

  const [show, setShow] = useState(false);

  const spy = useMemo(() => {
    const spies = [];
    for (let index = 0; index < spyNumbers; index++) {
      const randomNum = Math.floor(Math.random() * Number(number)) + 1;
      spies.push(randomNum);
    }

    return spies;
  }, [number,spyNumbers]);

  // useEffect(() => {
  //   const spies = [];
  //   for (let index = 0; index < spyNumbers; index++) {
  //     const randomNum = Math.floor(Math.random() * Number(number)) + 1;
  //     spies.push(randomNum);
  //   }
  //   setSpy(spies);
  // }, [number,spyNumbers]);

  useEffect(() => {
    const updateTimer = async () => {
      if (notsee === 0 && time !== 0) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setTime((prevTime) => prevTime - 1);
      }
    };

    updateTimer();
  }, [notsee, time]);

  return (
    <>
      <Container fluid style={{ height: "100vh", backgroundColor: "brown" }}>
        <Row className="h-100 align-items-center justify-content-center">
          {notsee !== 0 && !show && (
            <Col xs={6} className="d-grid gap-2">
              <Button
                onClick={() => setShow((pre) => !pre)}
                variant="secondary"
                size="lg"
                style={{ borderColor: "white" }}
              >
                show
              </Button>
            </Col>
          )}

          {notsee !== 0 && show && (
            <>
              <Col xs={6} className="d-grid gap-2">
                <Button
                  variant="secondary"
                  size="lg"
                  style={{ borderColor: "white" }}
                  disabled
                >
                  {spy.find((item) => item === notsee) && "spy"}
                  {spy.find((item) => item !== notsee) && word}
                </Button>
                <Button
                  onClick={() => {
                    setNotsee((p) => p - 1);
                    setShow((pre) => !pre);
                  }}
                  variant="secondary"
                  size="lg"
                  style={{ borderColor: "white" }}
                >
                  hide
                </Button>
              </Col>
            </>
          )}

          {notsee === 0 && time !== 0 && (
            <>
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
            </>
          )}

          {time === 0 && notsee === 0 && (
            <>
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
            </>
          )}
        </Row>
      </Container>
    </>
  );
}
