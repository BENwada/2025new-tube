"use client";

import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    console.log("where am I rendered?");
  }, []);
  return <div>Feed page</div>;
};

export default page;
