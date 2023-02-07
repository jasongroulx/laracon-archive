interface IPaginationLink {
    active:boolean
    label:string
    url:string

}

export interface IPaginatedCollection<T> {
    data: Array<T>
    current_page: number
    last_page: number
    per_page: number
    total: number
    from: number
    to: number
    links: IPaginationLink[]
}
