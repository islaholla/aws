import React, { useEffect } from "react"
import "./detailBlog.css"
import Back from "../common/back/Back"
import Awrapper from "./Awrapper"
import { useLocation } from "react-router-dom"

const DetailBlog = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Back title='Success Story' />
      <Awrapper/>
    </>
  )
}

export default DetailBlog
