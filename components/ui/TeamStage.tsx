import type { TeamStageProps } from "@/types";

import { CodeScene } from "./team-scenes/CodeScene";
import { OfficeScene } from "./team-scenes/OfficeScene";
import { PhotoScene } from "./team-scenes/PhotoScene";
import { PresentationScene } from "./team-scenes/PresentationScene";
import { StrategyScene } from "./team-scenes/StrategyScene";
import { StudioScene } from "./team-scenes/StudioScene";

function renderScene(scene: TeamStageProps["scene"]) {
  switch (scene) {
    case "scene-studio":
      return <StudioScene />;
    case "scene-strategy":
      return <StrategyScene />;
    case "scene-code":
      return <CodeScene />;
    case "scene-presentation":
      return <PresentationScene />;
    case "scene-photo":
      return <PhotoScene />;
    case "scene-office":
      return <OfficeScene />;
  }
}

export function TeamStage({ scene, isActive }: TeamStageProps) {
  return (
    <div className={isActive ? "ts-stage is-active" : "ts-stage"}>
      {renderScene(scene)}
    </div>
  );
}
