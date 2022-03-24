import { ADD_EXPENSE, DELETE_EXPENSE,SEARCH_EXPENSE } from '../actiion-type/action-type';

export const addExpense = (data) => {
  console.log(data);
  return {
    type: ADD_EXPENSE,
    data
  }
}

export const deleteExpense = (data) => {
  return {
    type: DELETE_EXPENSE,
    data,
  }
}

export const searchExpense = (query) => {
  console.log(query);
  return {
    type: SEARCH_EXPENSE,
    query,
  };
};