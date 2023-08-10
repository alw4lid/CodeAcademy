const Validate = (uname) => {
  if (uname.length <= 9) {
    console.log("User is a Boy");
  } else {
    console.log("User is a Girl");
  }
};

Validate("Alwaleed");
