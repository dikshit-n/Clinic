export const getStatus = (status) => {
  if (status === 401) {
    return "Invalid";
  } else if (status === 200) {
    return "Success";
  } else if (status === 404) {
    return "Page Not Found";
  } else {
    return "Something went wrong";
  }
};
