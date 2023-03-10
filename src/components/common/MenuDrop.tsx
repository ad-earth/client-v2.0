import * as t from '../../style/menuDrop.style';

export interface MenuDropType {
  width?: string;
  top?: string;
  left?: string;
  radius?: string;
  fcColor?: string;
  bgColor?: string;
  cateData?: {
    id: number;
    cate: string;
    path: string;
  }[];
  isDropped?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const MenuDrop = (props: MenuDropType) => {
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
};

export default MenuDrop;

export const SideMenuDrop = (props: MenuDropType) => {
  return <t.MenuContainer {...props}>{props.children}</t.MenuContainer>;
};
