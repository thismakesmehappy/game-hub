import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import PlatformIconList from "../components/PlatformIconList.tsx";
import { Platform } from "../hooks/useGames.ts";

interface ComponentPreviewsProps {
  platforms: Platform[];
}

const ComponentPreviews = ({ platforms }: ComponentPreviewsProps) => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/PlatformIconList">
        <PlatformIconList platforms={platforms} />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
