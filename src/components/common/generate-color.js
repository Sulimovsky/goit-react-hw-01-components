const generateColor = () => {
  const red = Math.round(Math.random() * (255 - 1) + 1);
  const green = Math.round(Math.random() * (255 - 1) + 1);
  const blue = Math.round(Math.random() * (255 - 1) + 1);

  return `rgb(${red}, ${green}, ${blue})`;
};

export default generateColor;
