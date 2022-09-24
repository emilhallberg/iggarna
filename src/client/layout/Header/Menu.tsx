import styled from "styled-components";
import { FC, useState } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu as AntMenu } from "antd";
import Link from "next/link";
import routes, { Route } from "../../routes/routes";
import media from "../../resources/stylesheets/media";

const MenuButton = styled(Button)`
  grid-area: menu;
  width: calc(${({ theme }) => theme.dimensions.header.height} / 2);
  height: calc(${({ theme }) => theme.dimensions.header.height} / 2);
  z-index: 2;
  @media (${media.phone}) {
    justify-self: end;
  }
`;

const OpenButtonIcon = styled(MenuOutlined)`
  font-size: calc(${({ theme }) => theme.dimensions.header.height} / 5);
`;

const CloseButtonIcon = styled(CloseOutlined)`
  font-size: calc(${({ theme }) => theme.dimensions.header.height} / 5);
`;

const SMenu = styled(AntMenu)`
  width: 30vw;
  @media (${media.phone}) {
    width: 90vw;
  }
`;

const SMenuItem = styled(AntMenu.Item)`
  height: calc(${({ theme }) => theme.dimensions.header.height} / 2);
`;

const Menu: FC = () => {
  const [open, isOpen] = useState(false);

  const createItem = ({ id, path, title }: Route) => (
    <SMenuItem key={id} onClick={() => isOpen(false)}>
      <Link href={path} passHref>
        {title}
      </Link>
    </SMenuItem>
  );

  const menu = <SMenu>{Object.values(routes).map(createItem)}</SMenu>;

  return (
    <Dropdown overlay={menu} placement="bottomRight" open={open}>
      <MenuButton
        shape="circle"
        icon={open ? <CloseButtonIcon /> : <OpenButtonIcon />}
        onClick={() => isOpen((v) => !v)}
      />
    </Dropdown>
  );
};

export default Menu;
