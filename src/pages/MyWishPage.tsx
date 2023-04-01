import Card from '../components/common/Card';
import useIntersectHandler from '../hooks/useIntersectHandler';
import useWish from '../query/useWish';
import * as t from '../style/myWishPage.style';

export default function MyWishPage() {
  const {
    wishQuery: {
      isLoading,
      hasNextPage,
      isFetchingNextPage,
      fetchNextPage,
      isFetching,
    },
    wishCnt,
    wishData,
    wishLike,
  } = useWish();

  const target = useIntersectHandler(() => {
    if (!hasNextPage || isFetchingNextPage) return;
    fetchNextPage();
  });

  if (isLoading) return <p>Loading...</p>;
  return (
    <t.Base>
      <t.Title>
        위시리스트 <t.WishCnt>{wishCnt}</t.WishCnt>
      </t.Title>
      <t.CardContent>
        {wishCnt === 0 && <t.DataNull>위시리스트가 없습니다.</t.DataNull>}
        {wishData &&
          wishData?.map((list, i: number) => (
            <t.List key={i}>
              <Card isAd={false} product={list} likeList={wishLike} />
            </t.List>
          ))}
      </t.CardContent>
      {isFetching && !isFetchingNextPage ? (
        'Loading more...'
      ) : (
        <div ref={target}></div>
      )}
    </t.Base>
  );
}
