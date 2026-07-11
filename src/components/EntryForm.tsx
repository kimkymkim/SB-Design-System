import { useState } from "react";
import { ImagePlus } from "lucide-react";
import { Button } from "./Button";
import { FloatingSheet, SheetHeader } from "./FloatingSheet";
import { TextArea, TextField } from "./TextField";

type EntryFormProps = {
  onSave?: (entry: { title: string; date: string; notes: string; tag: string }) => void;
  onCancel?: () => void;
  className?: string;
};

/**
 * Input sheet for logging an art entry: upload slot (the palette is
 * sampled from the image automatically once uploaded), title, date,
 * tag, and notes.
 */
export function EntryForm({ onSave, onCancel, className = "" }: EntryFormProps) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [tag, setTag] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <FloatingSheet className={className}>
      <SheetHeader title="Log an art entry" description="The palette is sampled from your image." />
      <button
        type="button"
        aria-label="Upload artwork"
        className="flex h-[120px] w-full flex-col items-center justify-center gap-2 rounded-photo border border-dashed border-border-strong bg-grey-100 text-grey-500 transition-colors duration-(--motion-fast) hover:bg-grey-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/20"
      >
        <ImagePlus size={22} strokeWidth={1.6} />
        <span className="font-sans text-[12.5px]">Add a photo of your work</span>
      </button>
      <div className="flex w-full flex-col gap-3">
        <TextField label="Title" placeholder="“The Toulippe”" value={title} onChange={(e) => setTitle(e.target.value)} />
        <div className="flex gap-3">
          <TextField label="Date" type="date" className="flex-1" value={date} onChange={(e) => setDate(e.target.value)} />
          <TextField label="Tag" placeholder="bookshop" className="flex-1" value={tag} onChange={(e) => setTag(e.target.value)} />
        </div>
        <TextArea label="Notes" placeholder="Where were you? What sparked it?" value={notes} onChange={(e) => setNotes(e.target.value)} />
      </div>
      <div className="flex w-full flex-col gap-3">
        <Button onClick={() => onSave?.({ title, date, notes, tag })}>Save entry</Button>
        <Button variant="link" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </FloatingSheet>
  );
}
