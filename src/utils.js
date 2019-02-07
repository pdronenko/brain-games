// Random number generator
// minNumber used for avoid zero in randomFunction result
export default (min, max) => Math.floor(Math.random() * (max - min) + min);
