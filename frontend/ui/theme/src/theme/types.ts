export interface ThemeSpace extends Array<number> {
  xs?: number
  s?: number
  n?: number
  m?: number
  l?: number
  xl?: number
  '2xl'?: number
  '3xl'?: number
  '4xl'?: number
}

export interface ThemeFontWeights extends Array<number> {
  light?: number
  normal?: number
  medium?: number
  semibold?: number
  bold?: number
  black?: number
}

export interface ThemeFontSizes extends Array<number> {
  xs?: number
  s?: number
  n?: number
  m?: number
  l?: number
  xl?: number
  '2xl'?: number
  '3xl'?: number
}

export interface ThemeBorderRadius extends Array<number> {
  s?: number
  n?: number
  m?: number
}

export interface ThemeLineHeights extends Array<number> {
  body?: number
}
