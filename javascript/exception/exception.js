// try-catch

// try {
//   notDefindedFn();
// } catch (e) {
//   console.dir(e);
//   console.log(e);
//   console.error(e);
//   console.error('에러발생');
// } finally {
//   console.log('Done');
//}

// throw
// function login(id, passwd) {
//   if (id === 'admin' && passwd === 'passwd') {
//     return true;
//   } else {
//     throw new Error('login failed')
//   }
// }

// try {
//   login('admin', '123');
// } catch (e) {
//   console.error(e);
//   console.error('do not match password'); // 사용자에게 노출되는 부분
// } finally {
//   console.info('로그인 시도')
// }


// trace
// try {
//   notDefindedFn();
//   x();
// } catch (e) {
//   console.error(e.stack); // e.stack
// }

// custom-error
class LoginError extends Error {
  constructor(message) {
    super(message);

    this.name = 'Login Error';
  }
}

function login(id, passwd) {
  if (id === 'admin' && passwd === 'passwd') {
    return true;
  } else {
    throw new LoginError('login failed')
  }
}

try {
  login('admin', '123');
} catch (e) {
  console.error(e);
  if (e instanceof LoginError) {
    console.log('로그인 에러입니다.');
  } else {
    console.log('에러입니다.');
  }
} finally {
  console.info('로그인을 시도 했음')
}