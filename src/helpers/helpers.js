export const checkButtonStart = (style, count) => {
  if (count === 1) {
    return [style.buttonDisabled];
  }
  return [style.button];
};

export const checkButtonEnd = (style, count, items) => {
  if (count === items.length) {
    return [style.buttonDisabled];
  }
  return [style.button];
};
