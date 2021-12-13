var input;
var userName;
input = 5;
input = 'oioi';
if (typeof input === 'string') {
    userName = input;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('caraca maluco!', 899);
