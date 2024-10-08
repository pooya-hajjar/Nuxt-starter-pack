import type { DefaultColors } from "./colors";

enum Sizes {
  sm,
  md,
  base,
  lg,
  xl,
  "2xl",
  "3xl",
}

enum BtnVariant {
  "filled",
  "elevated",
  "text",
  "outlined",
}

enum TextFieldVariant {
  "outlined",
  "underlined",
  "flat",
}

enum TextAreaVariant {
  "outlined",
  "flat",
}

enum TextFieldType {
  "text",
  "email",
  "number",
  "password",
}

enum LinkTarget {
  "",
  "_blank",
  "_self",
  "_parent",
  "_top",
}

enum TextFieldInputMode {
  "text",
  "email",
  "numeric",
  "tel",
  "decimal",
  "url",
}

enum Cursors {
  "auto",
  "crosshair",
  "default",
  "e-resize",
  "help",
  "move",
  "n-resize",
  "ne-resize",
  "nw-resize",
  "pointer",
  "progress",
  "s-resize",
  "se-resize",
  "sw-resize",
  "text",
  "w-resize",
  "wait",
}

enum Currencies {
  "toman",
  "rial",
}

export interface DPDates {
  start: string
  finish: string
}

export interface DPYear {
  value:number
}

export interface DPMonth {
  name: string
  value: number
  startWeekDay: number
  countOfDays: number
}

export interface DPDate{
  isSet: boolean
  YYYY: number
  MM: number
  DD: number
  unix: number
}


export type ColorsUnion = keyof typeof DefaultColors;
export type SizesUnion = keyof typeof Sizes;
export type RoundedUnion = SizesUnion | "none" | "full";
export type StrokeUnion = "0" | "1" | "2" | "base" | "4" | "8" | "inset";
export type WidthAndHeightUnion =
  | number
  | "auto"
  | `${number}rem`
  | `${number}px`
  | `${number}%`;
export type BtnVariantUnion = keyof typeof BtnVariant;
export type TextFieldVariantUnion = keyof typeof TextFieldVariant;
export type TextFieldTypeUnion = keyof typeof TextFieldType;
export type LinkTargetUnion = keyof typeof LinkTarget;
export type TextFieldModeUnion = keyof typeof TextFieldInputMode;
export type TextAreaVariantUnion = keyof typeof TextAreaVariant
export type CursorsUnion = keyof typeof Cursors;
export type CurrencyUnion = keyof typeof Currencies;
