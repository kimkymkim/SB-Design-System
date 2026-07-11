import { Avatar, Button, FloatingSheet, RiverBackground, SheetHeader, StatusBar } from "../components";

/**
 * Welcome screen: river background with the welcome FloatingSheet
 * hovering over it, per the first Sketchbook frame.
 */
export function WelcomeScreen({ onAddArt, onViewArt }: { onAddArt?: () => void; onViewArt?: () => void }) {
  return (
    <RiverBackground className="h-full w-full">
      <StatusBar />
      <div className="flex justify-center pt-[118px]">
        <FloatingSheet>
          <Avatar width={130} height={180} className="-rotate-6" />
          <SheetHeader
            title="Welcome to your Sketchbook"
            description="Add art to. Learn more about you."
          />
          <div className="flex w-full flex-col gap-3">
            <Button onClick={onAddArt}>Add art</Button>
            <Button variant="link" onClick={onViewArt}>
              View art
            </Button>
          </div>
        </FloatingSheet>
      </div>
    </RiverBackground>
  );
}
