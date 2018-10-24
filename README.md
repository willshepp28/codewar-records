#CodeWar Records

----

**What is this?** 

A list of all my code war solutions.

---





## Embarrasing Moment

```


/**
 * 
 * Date: 10/24/18
 * 
 * Invert values
 * 
 * Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
 * 
 *  Example: 
    invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
    invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
    invert([]) == []
 * 
 *
 */






// My Solution
function invert(array) {
    var invertedNums = [];

    // checks if array is empty
    // if so return the empty array
    if (array.length < 1) {
        return invertedNums;
    };

    // Runs through each number in the array
    // if the number is greater than 0, we invert it then push it to the inverednums array
    // if the number is 0, just push it in the array
    array.forEach((number) => {
        if (number) {
            invertedNums.push(Math.abs(number) == number ? -Math.abs(number) : Math.abs(number));
        }
        else {
            invertedNums.push(number);
        }

    });

    return invertedNums;
}



// Better Solution: 
// They did this in one line. Iam am so embarrased
function invert(array) {
    return array.map( x => x === 0 ? x : -x);
 }

 ```