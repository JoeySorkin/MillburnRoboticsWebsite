export interface Name{
    first: string
    last: string
}
export interface User{
    photo: string
    name: Name
    grade: 'Freshman' | 'Sophmore' | 'Junior' | 'Senior'
    bio : string
    roles: String[]
}
export interface Team{
    league: 'VEXAI' | 'VEX'
    name: string
    description: string
    members: User[]
}

export const FakeUser:User = {
    photo: './placeholder.png',
    name: {first: "Joey", last: "Sorkin"},
    grade: 'Freshman',
    bio: 'I make websites lmao',
    roles: ['Programmer']
}