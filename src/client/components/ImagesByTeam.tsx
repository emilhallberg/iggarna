import { Image, List } from "antd";
import EndlessScroll from "src/client/components/EndlessScroll";
import useGetImagesByTeam from "src/client/service/useGetImagesByTeam";
import { Image as ImageInterface, Team } from "src/constants/interfaces";
import { FC } from "react";
import Link from "next/link";
import { images as route } from "../routes/routes";

export const createImage = ({ id, alt, src, date }: ImageInterface) => (
  <List.Item key={id} extra={<Link href={`${route.path}/${id}`}>Visa</Link>}>
    <List.Item.Meta
      title={alt}
      description={date}
      avatar={
        <Image width={100} src={src} alt={alt} preview={{ mask: "Visa" }} />
      }
    />
  </List.Item>
);

interface Props {
  id: Team["id"];
}

const ImagesByTeam: FC<Props> = ({ id }: Props) => {
  const { images, loading, hasMore, loadMore, length } = useGetImagesByTeam(id);
  return (
    <EndlessScroll loadMore={loadMore} hasMore={hasMore} length={length}>
      <List loading={loading} dataSource={images} renderItem={createImage} />
    </EndlessScroll>
  );
};

export default ImagesByTeam;
