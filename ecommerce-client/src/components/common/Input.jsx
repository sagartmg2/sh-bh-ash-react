import React from "react";

export default function Input({name,type="text"}) {
  return (
    <div className="form-group">
      <label htmlFor="" className="form-label">
        {name}
      </label>
      <input className="form-control" type={type} placeholder={name}/>
    </div>
  );
}
