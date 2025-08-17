// this.be/src/be.js

// Define the be function
function Be(theObject, theBeObject) {
  // Check if both arguments are objects
  if (typeof theObject !== 'object' || typeof theBeObject !== 'object') {
    throw new Error('Both parameters must be objects.');
  }

  // Iterate over the properties of theBeObject
  for (const [key, value] of Object.entries(theBeObject)) {
    // Compare or assign the value to theObject
    theObject[key] = value;
  }

  // Return the modified theObject
  return theObject;
}

export default Be;