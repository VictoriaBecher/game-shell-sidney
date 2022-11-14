const initialState = {
  user: {
    fisrtName: '',
    lastName: '',
    email: '',
    avatar: '',
    id: '',
    name: '',
  },
  established: true, //change to false
  authenticated: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'auth/setUser':
      // explicit
      const newState = {
        user: payload,
        authenticated: true,
        established: state.established,
      };

      return newState;

    case 'auth/unsetUser':
      return {
        // shallow copy
        ...initialState,
      };

    default:
      return state;
  }
};
