let input: unknown;
let userName: string;

input = 5;
input = 'oioi';

if (typeof input === 'string') {
  userName = input;
}

function generateError(message: string, code: number) {
  throw {message, errorCode: code};
}

generateError('caraca maluco!', 899);
