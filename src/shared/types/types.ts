export type MainResponseType = {
  Best: ProductType[];
  New: ProductType[];
};

export interface ListResponseType {
  cnt: number;
  products: ProductType[];
  userLike: number[];
}

export interface AdResponseType extends ListResponseType {
  adProducts: ProductType[];
}

export interface DetailResponseType {
  k_No: number;
  userLike: boolean;
  product: ProductDetailType;
}

export interface ReviewsResponseType {
  p_review: number;
  reviews: ReviewsType;
}

export type ErrorType = { errorMessage: string };

export interface ProductType {
  p_No: number;
  p_Category: string;
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Cost: number;
  p_Sale: boolean;
  p_Discount: number;
  p_Option: OptionType[];
  p_Soldout?: boolean;
  p_Best: boolean;
  p_New: boolean;
  p_Like?: number;
  p_Review?: number;
  p_Desc?: string;
}

export interface ProductDetailType extends ProductType {
  p_Cnt: number;
  p_Content: string;
}

export type OptionType = [string, string, string, number, number];
export interface ReviewType {
  createdAt: string;
  r_Content: string;
  r_No: number;
  r_Score: number;
  u_Id: string;
}
export type ReviewsType = ReviewType[];

//마이페이지
export interface MyProductType extends ProductType {
  o_Status: string;
  p_Cnt: number;
  p_Price: number;
  r_Status: boolean;
  p_Status: boolean;
  k_No: null;
}

export interface ListType {
  o_Date: string;
  o_No: number;
  o_Price: number;
  products: MyProductType[];
}
export interface APIResOrderType {
  cnt: number;
  orderList: ListType[];
}
interface APIResCancelType {
  cnt: number;
  cancelList: ListType[];
}
//마이페이지 - 주문조회,취소조회
export type MyAPIResOrder = APIResOrderType | APIResCancelType;
