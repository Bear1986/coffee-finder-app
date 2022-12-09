import React from "react";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";
import { useRouter } from "next/router";
import Back from "../../components/Back";
import Share from "../../components/Share";


const CoffeeStore = () => {
  const router = useRouter();
  console.log("router", router);
  return (
    <div>
      <div>
      <h1 className="text-center text-[2.5rem] pt-4">Coffee store page</h1>
      </div>
      <Tooltip content="back to stores" placement="right" color="invert">
        <Link
        href="/"
        scroll={true} // this a prop that will prevent the page from scrolling to the top when the link is clicked
        >
          <div className="mb-4">
      <Back
        ToolTipText="back"
            ToolTipDirection="right"
            ButtonText="back"
            title="back"
            description="back"
            />
          </div>
        </Link>
      </Tooltip>
      <div className="flex justify-center">
        <Share />
      </div>
    </div>
  );
};

export default CoffeeStore;
