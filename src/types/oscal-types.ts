type UUID = string;
type DateTime = string;
type MarkupLine = string;
type MarkupMultiline = string;

export type catalog = {
    uuid: UUID;
    metadata: Metadata
    groups: Group[]
};

type Property = {
    name: string;
    value: string;
    ns?: string; // Namespace URI
    class?: string;
};

type Link = {
    href: string;
    rel?: string;
    media_type?: string;
    text?: string;
};

type Metadata = {
    title: MarkupLine;
    published?: DateTime;
    last_modified: DateTime;
    version: string;
    oscal_version: string;
    revisions?: Array<{
        title?: MarkupLine;
        published?: DateTime;
        last_modified?: DateTime;
        version: string;
        remarks?: MarkupMultiline;
    }>;
    props?: Property[];
    links?: Link[];
};

type Part = {
    id?: string;
    name: string; // z.B. "statement", "objective", "guidance"
    ns?: string;
    class?: string;
    title?: MarkupLine;
    prose?: MarkupMultiline;
    parts?: Part[];
};

type Parameter = {
    id: string;
    class?: string;
    props?: Property[];
    links?: Link[];
    label?: string;
    usage?: string;
    values?: string[];
    select?: {
        how_many?: 'one' | 'one-or-more';
        choice: string[];
    };
};

type Control = {
    id: string;
    class?: string;
    title: MarkupLine;
    params?: Parameter[];
    props?: Property[];
    links?: Link[];
    parts?: Part[];
    controls?: Control[];
};

export type Group = {
    id?: string;
    class?: string;
    title: MarkupLine;
    params?: Parameter[];
    props?: Property[];
    links?: Link[];
    parts?: Part[];
    groups?: Group[];
    controls?: Control[];
};
