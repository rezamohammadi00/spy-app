import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Guide() {
  return (
    <Container fluid style={{ height: "100vh", backgroundColor: "brown" }}>
      <Row className="h-100 align-items-center justify-content-center">
        <Col xs={6} style={{ color: "white", textAlign: "right" }}>
          <h1>روش بازی</h1>
          <br />
          <p>
            ابتدا تعداد بازیکنان و زمان بازی را مشخص کنید. سپس بازی را شروع کنید.
            بعد از اینکه نفر اول کلمه را دید، دستگاه را به نفر بعدی می‌دهد. این
            کار را به همین نحو انجام دهید تا همه نوبت خود را ببینند. سپس از همان
            فردی که اول دید، بازی شروع می‌شود. فرد اول از نفر کناری خود سوالی
            درباره کلمه می‌پرسد. شخص دوم از شخص سوم تا آخر. بعد از اینکه نفر آخر
            از نفر اول سوال کرد، نفر اول می‌تواند از هر کسی که دوست دارد سوالی
            بپرسد. سپس آن شخص نیز می‌تواند از هر کسی که دوست دارد سوال بپرسد.
            سوالات به صورت دو جوابی است. این روند تا جایی که جاسوس پیدا شود یا زمان به
            پایان برسد ادامه دارد.
          </p>
        </Col>
      </Row>
    </Container>
  );
}