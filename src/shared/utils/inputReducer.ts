import { inputInitialValue } from './inputInitialValue';
import { IdCheck, PwdCheck, PhoneCheck } from './regExp';

type ActionType = { type: string; payload?: string; msg?: string };

export function inputReducer(
  state: typeof inputInitialValue,
  action: ActionType
) {
  switch (action.type) {
    case 'img':
      return;
    case 'id':
      if (action.payload === 'err') {
        return {
          ...state,
          [action.type]: {
            val: state.id.val,
            msg: '중복된 아이디입니다.',
            isCheck: false,
          },
        };
      } else {
        return IdCheck(action.payload)
          ? {
              ...state,
              [action.type]: {
                val: action.payload,
                msg: '안전한 아이디 입니다.',
                isCheck: true,
              },
            }
          : {
              ...state,
              [action.type]: {
                val: action.payload,
                msg: '아이디는 영문 소문자와 숫자 포함 5~10자리를 입력해주세요.',
                isCheck: false,
              },
            };
      }

    case 'pwd':
      return PwdCheck(action.payload)
        ? {
            ...state,
            [action.type]: {
              val: action.payload,
              msg: '사용가능한 비밀번호 입니다.',
              isCheck: true,
            },
            pCheck: {
              msg: '',
            },
          }
        : {
            ...state,
            [action.type]: {
              val: action.payload,
              msg: '잘못된 비밀번호(영문,숫자,특수문자 포함(8~20자)',
              isCheck: false,
            },
            pCheck: {
              msg: '',
              isCheck: false,
            },
          };

    case 'pwdCheck':
      return state.pwd.val === action.payload
        ? {
            ...state,
            [action.type]: {
              val: action.payload,
              msg: '비밀번호 일치.',
              isCheck: true,
            },
          }
        : {
            ...state,
            [action.type]: {
              val: action.payload,
              msg: '비밀번호를 다시 확인해주세요.',
              isCheck: false,
            },
          };
    case 'name':
      return action.payload.length > 0
        ? {
            ...state,
            [action.type]: {
              val: action.payload,
              isCheck: true,
            },
          }
        : {
            ...state,
            [action.type]: {
              val: action.payload,
              msg: '성함을 입력해주세요.',
              isCheck: false,
            },
          };
    case 'gender':
      return action.payload.length > 0
        ? {
            ...state,
            [action.type]: {
              val: action.payload,
              isCheck: true,
            },
          }
        : {
            ...state,
            [action.type]: {
              val: action.payload,
              msg: '성별을 선택해주세요.',
              isCheck: false,
            },
          };
    case 'phone':
      if (action.payload === 'err') {
        return {
          ...state,
          [action.type]: {
            val: state.phone.val,
            msg: '중복된 연락처입니다.',
            isCheck: false,
          },
        };
      } else {
        return PhoneCheck(action.payload)
          ? {
              ...state,
              [action.type]: {
                val: action.payload,
                msg: '올바른 연락처 입니다.',
                isCheck: true,
              },
            }
          : {
              ...state,
              [action.type]: {
                val: action.payload,
                msg: '연락처를 다시 확인해주세요.',
                isCheck: false,
              },
            };
      }
    case 'reset':
      return inputInitialValue;
    default:
      throw new Error(`${action.type}`);
  }
}
