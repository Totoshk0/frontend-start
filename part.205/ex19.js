const getMax1 = (x, y, z) => {
  let max;
  if (x > y) {
    // max = x;
    if (x > z) {
      max = x;
    } else {
      max = z;
    }
  } else {
    // max = y;
    if (y > z) {
      max = y;
    } else {
      max = z;
    }
  }
  return max;
}

const getMax2 = (x, y, z) => {
  let max;
  if (x > y) {
    max = x;
  } else {
    max = y;
  }

  if (z > max) {
    max = z;
  }

  return max;
}

const getMax3 = (x, y, z) => {
  let max;

  if (x > y && x > z) {
    max = x;
  } else {
    if (y > z) {
      max = y;
    }
    else {
      max = z;
    }
  }
  return max;
}

const getMax4 = (x, y, z) => {
  if (x > y && x > z) {
    return x;
  } else {
    if (y > z) {
      return y;
    }
    else {
      return z;
    }
  }
}

// ! Так писать не нужно
const getMax5 = (x, y, z) => x > y && x > z ? x : y > z ? y : z;


let x = 3;
let y = 2;
let z = 1;
let result = getMax3(x, y, z);
console.log(result);

x = 3;
y = 1;
z = 2;
result = getMax3(x, y, z);
console.log(result);

x = 1;
y = 3;
z = 2;
result = getMax3(x, y, z);
console.log(result);

x = 2;
y = 3;
z = 1;
result = getMax3(x, y, z);
console.log(result);

x = 1;
y = 2;
z = 3;
result = getMax3(x, y, z);
console.log(result);

x = 2;
y = 1;
z = 3;
result = getMax3(x, y, z);
console.log(result);
