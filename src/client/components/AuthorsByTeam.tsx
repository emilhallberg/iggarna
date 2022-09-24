import { Avatar, List } from "antd";
import useGetAuthorsByTeam from "src/client/service/useGetAuthorsByTeam";
import { getInitials, stringToColor } from "src/client/utils/utils";
import { Author, Team } from "src/constants/interfaces";
import { FC } from "react";
import Link from "next/link";
import { authors as route } from "../routes/routes";

export const createAuthor = ({ id, name, amount }: Author) => (
  <List.Item key={id} extra={<Link href={`${route.path}/${id}`}>Visa</Link>}>
    <List.Item.Meta
      title={<Link href={`${route.path}/${id}`}>{name}</Link>}
      description={`har skrivit ${amount} st`}
      avatar={
        <Avatar size="large" style={{ backgroundColor: stringToColor(name) }}>
          {getInitials(name)}
        </Avatar>
      }
    />
  </List.Item>
);

interface Props {
  id: Team["id"];
}

const AuthorsByTeam: FC<Props> = ({ id }: Props) => {
  const { authors, loading } = useGetAuthorsByTeam(id);
  return (
    <List loading={loading} dataSource={authors} renderItem={createAuthor} />
  );
};

export default AuthorsByTeam;
