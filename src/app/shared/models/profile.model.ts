export interface Profile {
    id?: string,
    name: string,
    area: string,
    contract: string,
    level: string,
    email: string,
    skills: ProfileSkillLevel,
    description: ProfileDescription,
    imageURL?: string,
    hour: number,
    address: ProfileAddres,
    about: string,
    experience?: ProfileExperience,
    networks: ProfileNetworks
}

interface ProfileAddres {
    street: string,
    city: string,
    neighborhood: string
}

interface ProfileSkillLevel {
    name: string,
    level: number
}

interface ProfileDescription {
    formation: string,
    age: number,
    contract: string
}

interface ProfileExperience {
    companyName: string,
    skills: string[],
    dateInit: string,
    dateEnd?: string,
    current?: boolean
}

export interface ProfileNetworks {
    linkeDInUrl: string,
    facebookUrl: string,
    twitterUrl: string,
    githubUrl: string
}