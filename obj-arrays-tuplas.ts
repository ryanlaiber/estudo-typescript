const AUTHOR = 1;
const USER = 2;

enum Role {AUTHOR, USER};

const person: {
  name: string
  age: number
  hobbies: string[]
  role: [number, string]
} = {
  name: 'Ryan',
  age: 28,
  hobbies: ['sports', 'gamming'],
  role: [Role.AUTHOR, 'author'],
}

console.log(person.name);
