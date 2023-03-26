import { useMemo } from 'react';
import Card from '../components/common/Card';
import useIntersectHandler from '../hooks/useIntersectHandler';
import useGetWishQuery from '../query/useGetWishQuery';
import * as t from '../style/myWishPage.style';

export default function MyWishPage() {
  const {
    wishQuery: {
      isLoading,
      hasNextPage,
      isFetchingNextPage,
      fetchNextPage,
      isFetching,
      data,
    },
  } = useGetWishQuery();

  const cnt = useMemo(() => data?.pages[0].data.cnt || 0, [data]);
  const wishData = useMemo(
    () => data?.pages.map(page => page?.data?.wishList).flat() || null,
    [data]
  );
  const likeList = useMemo(
    () => wishData?.map(list => list.p_No) || [],
    [wishData]
  );

  const target = useIntersectHandler(() => {
    if (!hasNextPage || isFetchingNextPage) return;
    fetchNextPage();
  });

  if (isLoading) return <p>Loading...</p>;
  return (
    <t.Base>
      <t.Title>
        위시리스트 <t.WishCnt>{cnt}</t.WishCnt>
      </t.Title>
      <t.CardContent>
        {cnt === 0 && <t.DataNull>위시리스트가 없습니다.</t.DataNull>}
        {wishData &&
          wishData.map((list, i: number) => (
            <t.List key={i}>
              <Card isAd={false} product={list} likeList={likeList} />
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
