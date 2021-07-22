export interface Item {
    id: String,
    name: String,
    status: Boolean
}

export interface ItemList {
    total: Number,
    data: Item[]
}
