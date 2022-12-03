export const formatStringHook = (string: string) => {
    const titleFormatted = string
      .split(" ")
      .map((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      })
      .join(" ");

    return titleFormatted;
  };