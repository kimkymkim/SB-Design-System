import type { ReactNode } from "react";

type FloatingSheetProps = {
  children: ReactNode;
  className?: string;
};

type SheetHeaderProps = {
  title: string;
  description?: string;
};

/**
 * Floating modal sheet (welcome card). White, 24px radius, soft drop
 * shadow, generous padding — content stacks vertically with a 24px gap.
 */
export function FloatingSheet({ children, className = "" }: FloatingSheetProps) {
  return (
    <div
      className={`flex w-[336px] flex-col items-center gap-6 rounded-sheet bg-paper px-7 pb-[27px] pt-9 shadow-sheet ${className}`}
    >
      {children}
    </div>
  );
}

export function SheetHeader({ title, description }: SheetHeaderProps) {
  return (
    <div className="flex w-full flex-col gap-1 text-center">
      <p className="font-sans text-[18px] font-medium leading-[18px] tracking-[0.32px] text-ink">
        {title}
      </p>
      {description && (
        <p className="font-sans text-[12.5px] leading-[18px] tracking-[-0.21px] text-ink">
          {description}
        </p>
      )}
    </div>
  );
}
