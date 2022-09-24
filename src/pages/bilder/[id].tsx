import { Image, Space } from "antd";
import Loader from "src/client/components/Loader";
import Page from "src/client/layout/Page";
import type { GetServerSideProps, NextPage } from "next";
import Header from "../../client/components/Header";
import useGetImage from "../../client/service/useGetImage";

interface Props {
  id: string;
}

const ImagePage: NextPage<Props> = ({ id }: Props) => {
  const { image, loading, error } = useGetImage(id);

  const isError = error && <p>Error</p>;
  const isLoading = loading && <Loader />;
  const isContent = image && (
    <Space direction="vertical">
      <Header back>{image.alt}</Header>
      <Image
        width={100}
        src={image.src}
        alt={image.alt}
        preview={{ mask: "Visa" }}
      />
    </Space>
  );

  return <Page title="Bild">{isError || isLoading || isContent}</Page>;
};

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: { id: context.query.id },
});

export default ImagePage;
