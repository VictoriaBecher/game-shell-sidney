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
