import React from "react";
import { useSelector } from "react-redux";

export default function ProtectedComponent({ role, children }) {
    let user = useSelector((store) => store.user.value);
    if (user?.role == role) {
      return <>{children}</>;
    }
    return null;
}
