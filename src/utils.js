const getNumber = (min = 0, max = 100, n = 1) => Math.floor(Math.random() * max - min + n);

export default getNumber;
