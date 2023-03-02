import * as t from '../../style/menuDrop.style';

export interface MenuDropType {
  width?: string;
  top?: string;
  left?: string;
  radius?: string;
  fcColor?: string;
  bgColor?: string;
  cateData: {
    id: number;
    cate: string;
    path: string;
  }[];
  isDropped?: boolean;
}

const MenuDrop = (props: MenuDropType) => {
  return (
    <t.MenuContainer {...props}>
      <ul>
        {props.cateData.map((data, i: number) => (
          <a href={data.path} key={i}>
            <li>{data.cate}</li>
          </a>
        ))}
      </ul>
    </t.MenuContainer>
  );
};

export default MenuDrop;
