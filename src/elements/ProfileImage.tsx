import { DEFAULTIMAGE } from '../constants';
import * as t from '../style/profileImage.style';

interface IProps {
  image: string;
  name: string;
  id?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

export default function ProfileImage(props: IProps) {
  return (
    <t.Container>
      <t.UserImg
        src={props.image ? props.image : `${DEFAULTIMAGE}`}
        alt={props.name}
        {...props}
      />
      {props.id && (
        <p>
          <strong>{props.name}</strong>[{props.id}]
        </p>
      )}
    </t.Container>
  );
}
