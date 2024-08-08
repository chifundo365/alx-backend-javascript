export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'Succes' });
    else reject(new Error('The fake API ins not working currently'));
  });
}
