import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Nav from "../../components/Nav";

const CoffeeStore = () => {
  const router = useRouter();
  console.log("router", router);
  return (
    <div>
      <Nav />
      Coffee Store
      <Link
        href="/"
        scroll={true} // this a prop that will prevent the page from scrolling to the top when the link is clicked
      >
        back
      </Link>
      
    </div>
  );
};

export default CoffeeStore;
