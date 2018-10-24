
/**
 * 
 * Personalized greeting
 * 
 * Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
 * Use conditionals to return the proper message: 
 *  if name is equal to owner, return Hello boss
 *  if name is not owner , return Hello guest
 */




// My Solution 
function greet (name, owner) {
    if (name === owner) {
      return 'Hello boss'
      }
      else
      return 'Hello guest' 
  };




  // Best Solution:
  function greet (name, owner) {
    return name === owner ? 'Hello boss' :   'Hello guest';
  }