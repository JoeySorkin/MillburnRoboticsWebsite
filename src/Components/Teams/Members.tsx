export interface Name {
  first: string;
  last: string;
}
export interface User {
  photo: string;
  name: Name;
  bio: string;
  roles: String[];
}
export interface Team {
  league: "VEX-AI" | "VEX";
  name: string;
  description: string;
  members: User[];
  captains: User[];
}

export const FakeUser: User = {
  photo: "./placeholder.png",
  name: { first: "Dummy", last: "User" },
  bio:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada urna vel orci sollicitudin dapibus. Proin congue sodales est, viverra tincidunt sapien accumsan a. Donec eu arcu at dui finibus tristique. Nunc quis leo eu justo imperdiet viverra. Vestibulum dignissim elit in lacus suscipit laoreet. Suspendisse potenti. Curabitur vel lacus sodales, ultrices urna a, vestibulum massa",
  roles: ["Dummy Role", "Dummy Team"],
};
