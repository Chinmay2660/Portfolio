import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <GitHubCalendar
        username="Chinmay2660"
        blockSize={15}
        blockMargin={5}
        color="#7f5af0"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
