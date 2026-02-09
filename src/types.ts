/** OSCAL-Parameter, der in Prose-Texte eingesetzt wird */
export interface Param {
    id: string
    label?: string
    values?: string[]
}

/** Teil von Control wie "statement" oder "guidance" */
export interface Part {
    id?: string
    name: string
    prose?: string
}

export interface Control {
    id: string
    title: string
    params?: Param[]
    parts?: Part[]
}

export interface SubGroup {
    id: string
    title: string
    props?: { name: string; value: string }[]
    controls?: Control[]
}

export interface Group {
    id: string
    title: string
    groups?: SubGroup[]
}