export const validateUser = (password) => {
  switch (password) {
    case "trungtrinh":
      return true;
    case "28899":
      return true;
    case "dumbotran":
      return true;
    case "otcmember":
      return true;
    default:
      return false;
  }
};
