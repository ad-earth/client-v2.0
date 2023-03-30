import * as t from '../../style/menuDrop.style';

type TCategory = {
  id: number;
  cate: string;
  path: string;
};
export interface IProps {
  width?: string;
  top?: string;
  left?: string;
  radius?: string;
  fcColor?: string;
  bgColor?: string;
  cateData?: TCategory[];
  isDropped?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

function MenuDrop(props: IProps) {
  return (
    <t.MenuContainer {...props}>
      <ul>
        {props.cateData.map(data => (
          <a href={data.path} key={data.id}>
            <li>{data.cate}</li>
          </a>
        ))}
      </ul>
    </t.MenuContainer>
  );
}

export default MenuDrop;

export function SideMenuDrop(props: IProps) {
  return <t.MenuContainer {...props}>{props.children}</t.MenuContainer>;
}
