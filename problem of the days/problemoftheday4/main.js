const Validate = (uname) => {
  if (uname.length %2 == 0) {
    console.log("User is a Girl");
  } else {
    console.log("User is a Boy");
  }
};

Validate("Alwaleed");
