export interface CardProfile {
  id?: string,
  name: string,
  area: string,
  contract: string,
  skills: string[],
  description: string,
  imageURL?: string,
  hour: number,
  about: string
}

export interface Skills {
  level: number,
  skill: string
}