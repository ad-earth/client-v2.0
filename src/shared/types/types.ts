export type TMainResponse = {
  Best: IProductCard[];
  New: IProductCard[];
};

export interface IListResponse {
  cnt: number;
  products: IProductCard[];
  userLike: number[];
}

export interface IAdResponse extends IListResponse {
  adProducts: IProductCard[];
}

export interface IDetailResponse {
  k_No: number;
  userLike: boolean;
  product: IProductDetail;
}

export interface IReviewsResponse {
  p_review: number;
  reviews: TReviews;
}

export type TError = { errorMessage: string };

export interface IProduct {
  a_Brand: string;
  p_No: number;
  p_Category: string;
  p_Cost: number;
  p_Thumbnail: string[];
  p_Name: string;
  p_Sale: boolean;
  p_Discount: number;
}

export interface IProductCard extends IProduct {
  p_Best: boolean;
  p_Option: TOption[];
  p_Soldout: boolean;
  p_New: boolean;
  p_Desc: string;
  p_Like: number;
  p_Review: number;
}

export interface IProductDetail extends IProductCard {
  p_Cnt: number;
  p_Content: string;
}

export type TOption = [string, string, string, number, number];
export type TUserOption = [string, string, string, number, number, number];

export interface IReview {
  createdAt: string;
  r_Content: string;
  r_No: number;
  r_Score: number;
  u_Id: string;
}
export type TReviews = IReview[];

//마이페이지
export interface IMyProduct extends IProduct {
  o_Status: string;
  p_Cnt: number;
  p_Price: number;
  r_Status: boolean;
  p_Status: boolean;
  k_No: null;
}

export interface IList {
  o_Date: string;
  o_No: number;
  o_Price: number;
  products: IMyProduct[];
}
export interface IAPIResOrder {
  cnt: number;
  orderList: IList[];
}
interface IAPIResCancel {
  cnt: number;
  cancelList: IList[];
}
//마이페이지 - 주문조회,취소조회
export type TMyAPIResOrder = IAPIResOrder | IAPIResCancel;

interface IUser {
  u_Name: string;
  u_Phone: string;
  u_Address1: string;
  u_Address2: string;
  u_Address3: string;
}
export interface IUserLogin extends IUser {
  u_Idx: number;
  u_Id: string;
  u_Gender: string;
  u_Img: string;
  token: string;
}
export interface ILoginResponse {
  userInfo: IUserLogin;
  cartStatus: number;
}
export interface IIdSearchResponse {
  u_Id: string;
}
export interface IPwdSearchResponse {
  u_Idx: number;
}
interface IAddress {
  d_Name: string;
  d_Phone: string;
  d_Address1: string;
  d_Address2: string;
  d_Address3: string;
}
interface IAddressList extends IAddress {
  d_No: number;
  u_Idx: number;
}
export interface ICompleteResponse extends IAddress {
  o_No: number;
  cartStatus: number;
}
export interface IProductPayCart extends IProduct {
  p_Option: TUserOption[];
  k_No: number;
  p_Price: number;
  p_Cnt: number;
}
export interface ICartResponse {
  cartList: IProductPayCart[];
  o_Price: number;
}
export interface IPaymentResponse {
  userInfo: IUser;
  addressList: IAddressList[];
  products: IProductPayCart[];
  o_Price: number;
}
