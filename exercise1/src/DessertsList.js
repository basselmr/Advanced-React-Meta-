function DessertsList(props) {
  /* let x = 0
    const l1 = props.data.sort((a, b) => {
     x += 1
      
 If the result is negative, a is sorted before b.
 If the result is positive, b is sorted before a.
 If the result is 0, no changes are done with the sort order of the two values.
   
     console.log(x)
     console.log("a values : ", a.calories)
     console.log("b values : ", b.calories)
     console.log(a.calories - b.calories)
     return a.calories - b.calories
   });
   console.log(l1);*/
  /* const l1 = props.data.map(itm => {
     return { 'cal': itm.calories, 'nm': itm.name }
   })
   console.log(l1)
   const l2 = [...l1].sort((a, b) => {
     if (a.nm < b.nm)
       return -1;
     if (a.nm > b.nm)
       return 1;
     return 0;
   })
   console.log(l2)
   const l3 = [...l1].sort((a, b) => {
     if (a.nm > b.nm)
       return -1;
     if (a.nm < b.nm)
       return 1;
     return 0;
   })
   console.log(l3)*/
  const lowCaloriesDesserts = props.data
    .filter((dessert) => {
      return dessert.calories < 500;
    })
    .sort((a, b) => {
      return a.calories - b.calories;
    })
    .map((dessert) => {
      return (
        <li>
          {dessert.name} - {dessert.calories} cal
        </li>
      );
    });
  return <ul>{lowCaloriesDesserts}</ul>;

}

export default DessertsList;
