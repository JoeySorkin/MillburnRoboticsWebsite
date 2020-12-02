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
    league: 'VEX-AI' | 'VEX'
    name: string
    description: string
    members: User[]
}

export const FakeUser:User = {
    photo: './placeholder.png',
    name: {first: "Dummy", last: "User"},
    grade: 'Freshman',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada urna vel orci sollicitudin dapibus. Proin congue sodales est, viverra tincidunt sapien accumsan a. Donec eu arcu at dui finibus tristique. Nunc quis leo eu justo imperdiet viverra. Vestibulum dignissim elit in lacus suscipit laoreet. Suspendisse potenti. Curabitur vel lacus sodales, ultrices urna a, vestibulum massa',
    roles: ['Dummy Role', 'Dummy Team']
}

export const TeamInfo: Map<string, Team | null> = new Map([
    ['7405K', {
        league: 'VEX',
        name: '7405K',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        members: [FakeUser,FakeUser,FakeUser,FakeUser,FakeUser]
    }],
        ['7405R', {
        league: 'VEX',
        name: '7405R',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        members: [FakeUser,FakeUser, FakeUser]
    }],
        ['7405M', {
        league: 'VEX',
        name: '7405M',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        members: [FakeUser,FakeUser,FakeUser]
    }],
        ['7405N', {
        league: 'VEX',
        name: '7405N',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        members: [FakeUser,FakeUser,FakeUser,FakeUser]
    }],
        ['7405X', {
        league: 'VEX-AI',
        name: '7405X',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        members: [FakeUser,FakeUser]
    }]
])