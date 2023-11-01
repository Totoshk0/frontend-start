const createHoursArray = () => {
  const hours = [];
  for (let i = 0; i < 24; i++) {
    hours.push(0);
  }
  return hours;
}

const print = (hours) => {
  return `hours: ${hours}`;
}

const getUser = () => {
  const inTime = Math.floor(Math.random() * 10);
  const outTime = inTime + Math.floor(Math.random() * 10) + 1;
  return [inTime, outTime];
}

const getUserList = (count) => {
  const list = [];
  for (let i = 0; i < count; i++) {
    list.push(getUser());
  }
  return list;
}

const printUserList = (userList) => {
  let result = '';
  for (const user of userList) {
    result += `${user[0]} - ${user[1]}\n`;
  }
  return result;
}

const main = () => {
  const hours = createHoursArray();
  console.log(print(hours));
  const userList = getUserList(3);
  console.log(printUserList(userList));

}

main();