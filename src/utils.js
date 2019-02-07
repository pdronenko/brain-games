// Random number generator
// minNumber used for avoid zero in randomFunction result
export default (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
