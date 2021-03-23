import React from "react";
import Button from "react-bootstrap/Button";
import "./NoMatch.css";
import { useHistory } from "react-router-dom";

function NoMatch() {
  let history = useHistory();

  return (
    <div className="no-match">
      <h5>Oopsie! Something's missing...</h5>
      <h6>
        The page you were looking for doesn't exit , isn't available or was
        loading incorrectly.
      </h6>
      <Button variant="success" onClick={() => history.push("/Todo")}>
        Home
      </Button>
    </div>
  );
}

export default NoMatch;
