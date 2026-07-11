import { useState } from "react";
import { Button, FloatingSheet, RiverBackground, SheetHeader, Sketchbook, StatusBar } from "../components";

/**
 * Welcome screen: river background with the welcome FloatingSheet
 * hovering over it, per the first Sketchbook frame. The sketchbook
 * opens when tapped (screens 1 → 2 of the design).
 */
export function WelcomeScreen({ onAddArt, onViewArt }: { onAddArt?: () => void; onViewArt?: () => void }) {
  const [book, setBook] = useState<"closed" | "open">("closed");
  return (
    <RiverBackground className="h-full w-full">
      <StatusBar />
      <div className="flex justify-center pt-[118px]">
        <FloatingSheet>
          <Sketchbook
            state={book}
            width={140}
            onClick={() => setBook(book === "closed" ? "open" : "closed")}
          />
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
