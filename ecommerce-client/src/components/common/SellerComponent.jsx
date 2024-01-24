import React from "react";
import { useSelector } from "react-redux";
import { SELLER } from "../../constants/role";

export default function SellerComponent(props) {
  let user = useSelector((store) => store.user.value);
  if (user?.role == SELLER) {
    return <>{props.children}</>;
  }

  return null;
}
