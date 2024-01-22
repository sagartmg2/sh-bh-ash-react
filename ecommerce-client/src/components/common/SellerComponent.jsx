import React from "react";
import { useSelector } from "react-redux";

export default function SellerComponent(props) {
  let user = useSelector((store) => store.user.value);
  if (user?.role == "seller") {
    return <>{props.children}</>;
  }

  return null;
}
