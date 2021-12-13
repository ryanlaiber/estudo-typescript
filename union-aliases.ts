type Combinable = number | string;
type Convergion = 'as-number' | 'as-string';

function combine(n1: Combinable, n2: Combinable, convergion: Convergion) {
  if (typeof n1 === 'number' && typeof n2 === 'number' || convergion === 'as-number') {
    return +n1 + +n2;
  } else {
    return n1.toString() + n2.toString();
  }
};

console.log(combine(1, ' amigo', 'as-string'));