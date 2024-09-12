import React from "react";

import { ButtonBack, LinkButtonFront } from "./index";

const LinkButton = (props) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>
    {props.children}
    <LinkButtonFront
      alt={props.alt}
      href={props.href}
      target={props.target}
      disabled={props.disabled || false}
    >
      {props.children}
    </LinkButtonFront>
  </ButtonBack>
);

export default LinkButton;
