import moment, { now } from "moment";
import { FC, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Space, Statistic } from "antd";
import Logo from "../resources/assets/logo";

const Global = createGlobalStyle`
  body {
    background: #29729d;
    overflow: hidden;
    position: fixed;
  }
`;

const SContainer = styled.div`
  position: fixed;
  top: -10vw;
  left: -10vw;
  right: -10vw;
  bottom: 10vh;
  height: 130%;
  background: linear-gradient(-45deg, #202944, #29729d, #121a34);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes gradient {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

const Shortcut = styled.div`
  height: 50px;
  width: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export const DEADLINE = moment("2021-11-27 19:00");

const Countdown: FC = () => {
  const [finished, isFinished] = useState(DEADLINE.isBefore(now()));
  return finished ? null : (
    <SContainer>
      <Space direction="vertical" align="center">
        <div>
          <Logo />
        </div>
        <Statistic.Countdown
          value={DEADLINE.toLocaleString()}
          onFinish={() => isFinished(true)}
          valueStyle={{ fontSize: "5vw" }}
        />
      </Space>
      <Shortcut onClick={() => isFinished(true)} />
      <Global />
    </SContainer>
  );
};

export default Countdown;
