let nextTodoId = 0;
export const addTodo = text => ({
  type: 'ADD_PLAYER',
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = id => ({
  type: 'TOGGLE_PLAYER',
  id
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_PAST',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
