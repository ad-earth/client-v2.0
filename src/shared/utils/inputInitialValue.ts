interface State {
  val: string;
  msg?: string;
  isCheck?: boolean;
}

interface StateType {
  img: State;
  id: State;
  pwd: State;
  pwdCheck: State;
  name: State;
  gender: State;
  phone: State;
}

export const inputInitialValue: StateType = {
  img: {
    val: '',
    msg: '',
    isCheck: false,
  },
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
