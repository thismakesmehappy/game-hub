import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import PlatformIconList from "../components/PlatformIconList.tsx";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/PlatformIconList">
        <PlatformIconList />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
