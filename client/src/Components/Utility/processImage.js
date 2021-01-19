export const processImage = (file, callback) => {
  if (file) {
    let fd = new FileReader();
    fd.readAsDataURL(file);
    fd.onload = (e) => {
      callback(e.target.result);
      console.log(e.target.result);
    };
  } else {
    callback(null);
  }
};
