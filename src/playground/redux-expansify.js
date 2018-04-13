import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
  // console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount:100 , createAt: -21000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffeee', amount:300 , createAt: -33000 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter('rentratte1'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1600));




// const demoState = {
//   expenses: [{
//     id: 'ddddfa',
//     description: 'January Rent',
//     note: 'This was the final payment for that address',
//     amount: 54500,
//     createdAT: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', //date or armount
//     startDate: undefined,
//     endDate: undefined
//   }
// };

// console.log("hay my name is martin");