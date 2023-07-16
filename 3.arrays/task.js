function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
}

return arr1.every((value, index) => value === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  const filteredUsers = users.filter(user => user.gender === gender);
  const totalAge = filteredUsers.reduce((sum, user) => sum + user.age, 0);
  const averageAge = filteredUsers.length > 0 ? totalAge / filteredUsers.length : 0;
  return averageAge;
}