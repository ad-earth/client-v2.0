import MainBanner from '../components/main/MainBanner';
import MainLinks from '../components/main/MainLinks';
import MainProducts from '../components/main/MainProducts';
import useMain from '../query/useMain';

export default function MainPage() {
  const { bestList, newList } = useMain();

  return (
    <>
      <MainBanner />
      <MainProducts list={bestList}>
        <span>#BEST</span>
        제로 웨이스트 입문자도
        <br />
        어려움 없이 사용할 수 있는
        <br />
        베스트 제품!
      </MainProducts>
      <MainLinks />
      <MainProducts list={newList}>
        <span>#NEW</span>
        광고지구샵만의 꼼꼼한 기준으로 입고된
        <br />
        새로운 제로웨이스트 제품을 만나보세요!
      </MainProducts>
    </>
  );
}
