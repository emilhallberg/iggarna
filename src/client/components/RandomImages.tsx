import { List, Image, Card } from "antd";
import { Image as ImageInterface } from "src/constants/interfaces";
import { FC } from "react";
import Link from "next/link";
import useGetRandomImages from "../service/useGetRandomImages";
import { images as route } from "../routes/routes";

const createImage = ({ id, alt, src, date }: ImageInterface) => (
  <List.Item key={id}>
    <List.Item.Meta
      title={alt}
      description={date}
      avatar={
        <Image
          height={40}
          width={40}
          src={src}
          alt={alt}
          preview={{ mask: "Visa" }}
        />
      }
    />
  </List.Item>
);

const RandomImages: FC = () => {
  const { images, loading } = useGetRandomImages();

  return (
    <Card
      title="Slumpmässiga bilder"
      loading={loading}
      extra={<Link href={route.path}>Se mer</Link>}
    >
      <List loading={loading} dataSource={images} renderItem={createImage} />
    </Card>
  );
};

export default RandomImages;
