/*Given two sets pf elements(, find the sum of all distinct elements from the set.
  In other words find the sum of all elements which are present in either of
  the given set.
  Example:
  Set 1: [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
  Output: 13 (distinct elements 4, 7, 2)
  Give two solutions to this problem using different types of data structure each time.
  */ 


  function addTwoArrays (a, b) {
    let sum = 0;

    for(let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) >= 0) {
            continue
        }
        sum += a[i]
    }
    return sum
}

console.log(addTwoArrays(set1, set2))

//Using the harsh table
function addUniqueElement (a, b) {

  let hash = new Map ()

  for (let i = 0; i < a.length; i++) {
      if (hash.has(set1[i]))
          hash.set(set1[i], 1 + hash.get(set1[i]))
      else
          hash.set(set1[i], 1)
  }
  for (let i = 0; i < b.length; i++) {
      if (hash.has(set2[i]))
          hash.set(set2[i], 1)
      else 
          hash.set(set2[1], 1)
  }

  let sum = 0;

  for (let entry of hash) {
      if (parseInt(entry[i]).toString())
      sum += parseInt(entry[0]).toString()
  }
  
  return sum 

};

console.log(addUniqueElement(set1, set2))