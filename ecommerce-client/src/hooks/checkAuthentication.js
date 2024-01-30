import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function checkAuthentication() {
  let user = useSelector((store) => store.user.value);
  return (callback) => {
    if (user) {
      callback();
    } else {
      toast.error("Login required.");
    }
  };
}

// export default function useState() {
//   return [initialValiu,()=>{}]
// }
