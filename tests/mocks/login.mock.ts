const noUserValid = { 
  username: '',
  password: 'test123',
};

const noPasswordValid = {
  username: 'test',
  password: '',
};

const noExistUser = {
  username: 'test_teste',
  password: 'test123',
};

const noExistPassword = {
  username: 'test',
  password: 'test123_test',
};


export default {
  noUserValid,
  noPasswordValid,
  noExistUser,
  noExistPassword,
};