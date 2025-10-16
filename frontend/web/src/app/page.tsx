import { Schema } from "services/shared"

import {Button} from "@heroui/react";


export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className="purple-dark text-foreground bg-background">
      <div className="wrapper">
    <h1 className="text-3xl font-bold p-4">
      Hello world!
    </h1>
         <div className="flex flex-wrap gap-4 items-center">
      <Button color="primary" variant="solid" className="rounded-sm">
        Solid
      </Button>
    </div>
      </div>
    </div>
  );
}
