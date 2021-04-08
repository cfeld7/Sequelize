async function windowActions() {
  const request = await fetch('/api/dining');
  dining = await request.json();
  console.log(dining);
}

router.route('/wholeMeal')
  .get(async(req, res) => {
    const meals = await db.Meals.findall();
    const macros = await db.Macros.findall();
    const wholeMeals = meals.map((meal) => {
      const macroEntry = macros.find((macro) => macro.meal_id === meal.meal_id);
      console.log('meal', meal.dataValues);
      return {
        ...meal.dataValues,
        ...macroEntry.dataValues
      };
    });
  });

async function getMeals() {
  console.log('data request');
  const diningRequest = await fetch('/api/wholeMeal');
  const diningData = 
}

window.onload = windowActions;
console.log('window loaded');