import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#1d70b7")};
  background-color: ${(props) => (props.border ? "transparent" : "#1d70b7")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#ee4d2d")};
    border: 1px solid #1d70b7;
    color: ${(props) => (props.border ? "#1d70b7" : "#fff")};
  }
`;

