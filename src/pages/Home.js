import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Container fluid style={{ height: "100vh",backgroundColor:"brown" }}>
        {/* <Row className="justify-content-center h-25" style={{backgroundColor:"pink",color:"brown"}}>
          <Col xs={6}><span className="text-center  h-25" style={{backgroundColor:"blue",color:"brown"}}>SPY</span></Col>
        </Row> */}
        <Row className="h-100 align-items-center justify-content-center">
          <Col xs={6}>
            <div className="d-grid gap-2">
              <Button variant="secondary" size="lg" style={{borderColor:"white"}}>
                <Link
                  to="/config"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  START
                </Link>
              </Button>
              <Button variant="secondary" size="lg" style={{borderColor:"white"}}>
                <Link
                  to="/guide"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  GUIDE
                </Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
