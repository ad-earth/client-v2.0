import * as t from '../../style/productCard.style';

export interface PropsType {
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Option: Array<
    [
      string | null,
      string | null,
      string | null,
      number | null,
      number | null,
      number | null
    ]
  >;
}
export default function ProductCard(props: PropsType) {
  return (
    <t.ProductInfoBox>
      <t.ProductImg src={props.p_Thumbnail[0]} />
      <t.ProductInfo>
        <t.ProducName>
          [{props.a_Brand}] {props.p_Name}
        </t.ProducName>
        {props.p_Option.map((option, i: number) => (
          <t.ProducOptionBox key={i}>
            <t.ProducOption>
              {`${option[0] !== null ? option[0] : ''}  `}
              {`${option[2] !== null && option[0] !== null ? '/' : ''}`}
              {`${option[2] !== null ? option[2] : ''}  `}
            </t.ProducOption>
            <t.ProducPrice>
              {option[5]}원 / {option[4]}개
            </t.ProducPrice>
          </t.ProducOptionBox>
        ))}
      </t.ProductInfo>
    </t.ProductInfoBox>
  );
}
