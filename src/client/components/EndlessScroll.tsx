import Loader from "src/client/components/Loader";
import { ReactNode } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface EndlessScrollProps {
  loadMore: () => void;
  hasMore: boolean;
  length: number;
  children: ReactNode;
}

const EndlessScroll = ({
  loadMore,
  hasMore,
  length,
  children,
}: EndlessScrollProps) => (
  <InfiniteScroll
    next={loadMore}
    loader={<Loader />}
    dataLength={length}
    hasMore={hasMore}
  >
    {children}
  </InfiniteScroll>
);

export default EndlessScroll;
