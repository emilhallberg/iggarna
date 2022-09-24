import { FC } from "react";
import { Avatar, Tooltip } from "antd";
import { Team } from "../../constants/interfaces";
import { stringToColor } from "../utils/utils";

interface TeamAvatarProps {
  name: Team["name"];
}

const TeamAvatar: FC<TeamAvatarProps> = ({ name }) => (
  <Tooltip title={name}>
    <Avatar size="large" style={{ backgroundColor: stringToColor(name) }}>
      {name.length > 3 ? name.charAt(0) + name.charAt(name.length - 1) : name}
    </Avatar>
  </Tooltip>
);

export default TeamAvatar;
