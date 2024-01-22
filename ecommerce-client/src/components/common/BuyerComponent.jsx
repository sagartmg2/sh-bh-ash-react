import React from "react";
import { useSelector } from "react-redux";

export default function BuyerComponent(props) {
  let user = useSelector((store) => store.user.value);
  if (user?.role == "buyer") {
    return <>{props.children}</>;
  }

  return null;
}
