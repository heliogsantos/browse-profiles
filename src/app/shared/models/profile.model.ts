export interface Profile {
    id?: string,
    name: string,
    area: string,
    contract: string,
    skills: string[],
    description: object,
    imageURL?: string,
    hour: number,
    address: object,
    about: string,
    experience?: object
}