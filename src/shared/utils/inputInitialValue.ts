const userInfo = JSON.parse(localStorage.getItem('userInfo'));
interface State {
  val: string;
  msg?: string;
  isCheck?: boolean;
  genderCheck?: number;
}

interface SignupStateType {
  id: State;
  pwd: State;
  pwdCheck: State;
  name: State;
  gender: State;
  phone: State;
}

interface InfoStateType {
  name: State;
  gender: State;
  phone: State;
}

interface PwdStateType {
  pwd: State;
  pwdCheck: State;
}

export const signupInitial: SignupStateType = {
  id: {
    val: '',
    msg: '',
    isCheck: false,
  },
  pwd: {
    val: '',
    msg: '',
    isCheck: false,
  },
  pwdCheck: {
    val: '',
    msg: '',
    isCheck: false,
  },
  name: {
    val: '',
    isCheck: false,
  },
  gender: {
    val: '',
    msg: '',
    isCheck: false,
  },
  phone: {
    val: '',
    msg: '',
    isCheck: false,
  },
};

export const InfoInitial: InfoStateType = {
  name: {
    val: `${userInfo?.u_Name ? userInfo?.u_Name : ''}`,
    isCheck: false,
  },
  gender: {
    val: `${userInfo?.u_Gender ? userInfo?.u_Gender : ''}`,
    msg: '',
    isCheck: false,
    genderCheck: userInfo?.u_Gender === '남성' ? 1 : 2,
  },
  phone: {
    val: `${userInfo?.u_Phone ? userInfo?.u_Phone : ''}`,
    msg: '',
    isCheck: false,
  },
};

export const NewPwdInitial: PwdStateType = {
  pwd: {
    val: '',
    msg: '',
    isCheck: false,
  },
  pwdCheck: {
    val: '',
    msg: '',
    isCheck: false,
  },
};
