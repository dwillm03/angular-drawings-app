export interface IDrawingRequest {
    id: number,
    name: string,
    date: Date,
    time: string,
    price: number,
    imageUrl: string,
    location?: {
        address: string
        city: string
        country: string
    }
    onlineUrl?: string,
    sessions: ISession[]
}
export interface ISession {
    id: number
    name: string
    duration: number
    level: string
    abstract: string
}
