import React, { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

export default function Parent() {
  return (
    <div>
      <ChildA />
      <ChildB />
    </div>
  );
}
