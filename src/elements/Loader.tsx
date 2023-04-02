import React from 'react';
import { useIsFetching, useIsMutating } from 'react-query';
import { FadeLoader } from 'react-spinners';
import theme from '../shared/style/theme';
import * as t from '../style/loader.style';

function Loader() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const display = isFetching || isMutating ? 'inherit' : 'none';
  return (
    <t.Display display={display}>
      <FadeLoader
        color={theme.fc15}
        height={15}
        width={5}
        radius={2}
        margin={2}
      ></FadeLoader>
    </t.Display>
  );
}

export default Loader;
