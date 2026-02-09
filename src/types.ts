/** Ein OSCAL-Parameter, der in Prose-Texte eingesetzt wird */
export interface Param {
  id: string
  label?: string
  values?: string[]
}

/** Ein Teil eines Controls, z.B. "statement" oder "guidance" */
export interface Part {
  id?: string
  name: string
  prose?: string
}

/** Eine einzelne Anforderung (z.B. GC.1.1) */
export interface Control {
  id: string
  title: string
  params?: Param[]
  parts?: Part[]
}

/** Eine Untergruppe (z.B. GC.1 "Grundlagen") */
export interface SubGroup {
  id: string
  title: string
  props?: { name: string; value: string }[]
  controls?: Control[]
}

/** Eine Hauptkategorie (z.B. GC "Governance und Compliance") */
export interface Group {
  id: string
  title: string
  groups?: SubGroup[]
}