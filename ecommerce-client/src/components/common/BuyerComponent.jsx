import React from "react";
import { useSelector } from "react-redux";
import { BUYER } from "../../constants/role";

export default function BuyerComponent(props) {
  let user = useSelector((store) => store.user.value);
  if (user?.role == BUYER) {
    return <>{props.children}</>;
  }

  return null;
}
