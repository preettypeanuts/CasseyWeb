import { ReactNode } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

type InfiniteScrollBarProps = {
    children: ReactNode;
    dataLength: number;
    fetchData: () => void;
    hasMore: boolean;
    refreshFunction?: () => void;
    pullDownToRefresh?: boolean;
    pullDownToRefreshThreshold?: number;
    pullDownToRefreshContent?: ReactNode;
    releaseToRefreshContent?: ReactNode;
    endMessage?: ReactNode;
    loader?: ReactNode;
};

export const InfiniteScrollBar = ({
    children,
    dataLength,
    fetchData,
    hasMore,
    refreshFunction,
    pullDownToRefresh,
    pullDownToRefreshThreshold,
    pullDownToRefreshContent,
    releaseToRefreshContent,
    endMessage,
    loader,
}: InfiniteScrollBarProps) => {
    return (
        <InfiniteScroll
            dataLength={dataLength}
            next={fetchData}
            hasMore={hasMore}
            loader={loader || <h4>Loading...</h4>}
            endMessage={endMessage || <p style={{ textAlign: 'center' }}>Yay! You have seen it all</p>}
            refreshFunction={refreshFunction}
            pullDownToRefresh={pullDownToRefresh}
            pullDownToRefreshThreshold={pullDownToRefreshThreshold}
            pullDownToRefreshContent={pullDownToRefreshContent}
            releaseToRefreshContent={releaseToRefreshContent}
        >
            {children}
        </InfiniteScroll>
    );
};
