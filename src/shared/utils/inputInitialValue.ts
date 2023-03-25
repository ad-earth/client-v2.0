const userInfo = JSON.parse(localStorage.getItem('userInfo'));
interface State {
  val: string;
  msg?: string;
  isCheck?: boolean;
  genderCheck?: number;
}

interface ISignupState {
  id: State;
  pwd: State;
  pwdCheck: State;
  name: State;
  gender: State;
  phone: State;
}

interface IInfoState {
  name: State;
  gender: State;
  phone: State;
}

interface IPwdState {
  pwd: State;
  pwdCheck: State;
}

interface IPayInput {
  name: State;
  phone: State;
}

export const signupInitial: ISignupState = {
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

export const InfoInitial: IInfoState = {
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

export const NewPwdInitial: IPwdState = {
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

export const PayInputInitial: IPayInput = {
  name: {
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
