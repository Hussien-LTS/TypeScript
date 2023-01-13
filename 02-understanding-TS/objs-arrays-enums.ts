// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   // const person = {
//   name: "hussein",
//   age: 29,
//   hobbies: ["sports", "eating"],
//   role: [2, "author"],
// };
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const person = {
  name: "hussein",
  age: 29,
  hobbies: ["sports", "eating"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;
// person.role = [1,"string","error"]

let favActivities: string[];
favActivities = ["sleeping"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log("is admin");
    
}
