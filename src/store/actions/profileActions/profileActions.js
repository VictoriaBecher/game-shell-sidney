import { client } from '../../../api/users';
import { unsetUser } from '../authActions';

export const setCreatureColors = (colorsObject) => {
  return {
    type: 'profile/setCreatureColors',
    payload: colorsObject,
  };
};

export const setCreatureColor = (targetKey, colorValue) => {
  return {
    type: 'profile/setCreatureColor',
    payload: {
      targetKey,
      colorValue,
    },
  };
};

export const createUserProfile = (id) => {
  return async (_, getState) => {
    const state = getState();
    const { profile } = state;

    const { data } = await client.post(`/profiles`, {
      id,
      creature: profile.creature,
    });

    return data;
  };
};

export const readUserProfile = (id) => {
  return async () => {
    const { data } = await client.get(`/profiles/${id}`);

    return data;
  };
};

export const updateUserProfile = (id, creature) => {
  return async () => {
    // const payload = {
    //   creature: creature
    // }
    const { data } = await client.patch(`/profiles/${id}`, { creature });

    return data;
  };
};

export const deleteUserProfile = (id) => {
  return async (dispatch, getState) => {
    const { auth } = getState();
    const { user, authenticated } = auth;

    if (!authenticated) {
      return;
    }

    const id = user.id;

    const profilePromise = client.delete(`/profiles/${id}`);
    const userPromise = client.delete(`/users/${id}`);

    await Promise.all([profilePromise, userPromise]);

    dispatch(unsetUser());
  };
};
