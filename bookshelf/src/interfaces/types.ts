
export interface BookType {
    title: string, 
    author?: string, 
    id: number,
    subjects: string[],
}

export interface BookshelfState {
    booklist: { title: string, author?: string, id: number, subjects: string[]}[],
}

export interface Subjects {
    [key: string]: number,
}

export interface JSONResponse {
        id: number,
        title: string,
        subjects: string[],
        authors: {
            "birth_year": number | null,
            "death_year": number | null,
            "name": string,
        }[],
        translators: {
            "birth_year": number | null,
            "death_year": number | null,
            "name": string,
        }[],
        bookshelves: string[],
        languages: string[],
        copyright: boolean | null,
        media_type: string,
        download_count: number,
}