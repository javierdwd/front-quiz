import { UPDATE_FILTER, UPDATE_Q_FILTER } from './actionTypes';

export const updateFilters = filters => ({
  type: UPDATE_FILTER,
  payload: filters
});

export const updateQFilter = query => ({
  type: UPDATE_Q_FILTER,
  payload: query
});
