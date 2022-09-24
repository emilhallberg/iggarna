import { List } from "antd";
import Page from "src/client/layout/Page";
import type { NextPage } from "next";
import useGetImages from "../../client/service/useGetImages";
import EndlessScroll from "../../client/components/EndlessScroll";
import { createImage } from "../../client/components/ImagesByTeam";
import Header from "../../client/components/Header";

const ImagesPage: NextPage = () => {
  const { images, loading, hasMore, loadMore, length } = useGetImages();

  return (
    <Page title="Bilder">
      <Header>Bilder</Header>
      <EndlessScroll loadMore={loadMore} hasMore={hasMore} length={length}>
        <List loading={loading} dataSource={images} renderItem={createImage} />
      </EndlessScroll>
    </Page>
  );
};

export default ImagesPage;
