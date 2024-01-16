import React from "react";
import {Link} from "react-router-dom"

export default function BreadCrumb({title,links}) {
  /* 

*/
  return (
    <div className="bg-primary-light-10 py-[38.08px] md:py-[55.3px] lg:py-[66.36px] xl:py-[79.63px] 2xl:py-[95.55px]">
      <div className="container">
        <p className="header-sm">{title}</p>
        {
            links.map((link,index) =>{
                return  <Link className={`mr-3 ${index+1 == links.length ?"text-secondary" : ""}`} to={link.url}>{link.title}</Link>
            })
        }
        {/* <Link to="/">Home</Link>
        <Link to="/">products</Link>
        <Link to="/">nike</Link> */}
      </div>
    </div>
  );
}
