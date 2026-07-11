import type { ReactNode } from "react";

export type MenuItemSpec = {
  label: string;
  /** Optional trailing symbol/icon (e.g. a lucide icon) */
  symbol?: ReactNode;
  onSelect?: () => void;
  destructive?: boolean;
};

type MenuProps = {
  items: MenuItemSpec[];
  /** Width in px (Figma quick-action menus are 105–250) */
  width?: number;
  className?: string;
};

/**
 * Contextual menu (Home-Screen quick-action style): frosted glass
 * container, 44px rows, hairline dividers, optional trailing symbols.
 * Use inside or alongside a FloatingSheet.
 */
export function Menu({ items, width = 250, className = "" }: MenuProps) {
  return (
    <div
      className={`glass overflow-hidden rounded-[13px] ${className}`}
      style={{ width }}
      role="menu"
    >
      {items.map((item, i) => (
        <button
          key={item.label}
          role="menuitem"
          onClick={item.onSelect}
          className={`flex h-11 w-full items-center justify-between px-4 text-left font-sans text-[15px] transition-colors duration-(--motion-fast) hover:bg-ink/5 focus-visible:bg-ink/5 focus-visible:outline-none active:bg-ink/10 ${
            item.destructive ? "text-red-600" : "text-ink"
          } ${i > 0 ? "border-t border-ink/10" : ""}`}
        >
          <span>{item.label}</span>
          {item.symbol && <span aria-hidden="true">{item.symbol}</span>}
        </button>
      ))}
    </div>
  );
}
