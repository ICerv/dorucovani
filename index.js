const street = prompt('Zadej ulici');
const houseNumber = prompt('Zadej cislo domu');
const city = prompt('Zadej mesto');
const zipCode = prompt('Zadej PSČ');

document.body.innerHTML += `
<address>
  <p>${street} ${houseNumber}</p>
  <p>${zipCode} ${city} </p>
</address>
`;