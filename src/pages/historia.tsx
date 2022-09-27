import Controls from "src/client/components/Controls";
import Episode from "src/client/components/Episode";
import Landing from "src/client/components/Landing";
import HistoryContext from "src/client/contexts/HistoryContext";
import Page from "src/client/layout/Page";
import { episodes } from "src/client/mock/episodes";
import { p } from "src/client/utils/utils";
import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import media from "../client/resources/stylesheets/media";

const SHistory = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  @media (${media.phone}) {
    overflow: hidden;
  }
`;

const HistoryPage: NextPage = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [start, haveStarted] = useState(false);

  const paginate = (i: number) => {
    const v = page + i;
    if (v < 0) {
      haveStarted(false);
      return i;
    }
    if (v > episodes.length - 1) return i;
    setPage([v, i]);
    return i;
  };

  const goToPage = (i: number) => {
    setPage([i, i < page ? -1 : 1]);
    return i;
  };

  const value = {
    page,
    direction,
    length: episodes.length,
    paginate,
    goToPage,
  };

  const handleKeyPress = useCallback(({ key }: KeyboardEvent) => {
    if (key === "ArrowLeft") {
      setPage(([i, d]) => (i === 0 ? [i, d] : [i - 1, -1]));
    }
    if (key === "ArrowRight") {
      setPage(([i, d]) => (i === episodes.length - 1 ? [i, d] : [i + 1, 1]));
    }
  }, []);

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener("keydown", handleKeyPress);
    }
    return () => {
      if (window !== undefined) {
        window.removeEventListener("keydown", handleKeyPress);
      }
    };
  }, [handleKeyPress]);

  if (!start) return <Landing onClick={() => haveStarted(true)} />;

  return (
    <Page title="Historia">
      <HistoryContext.Provider value={value}>
        <SHistory>
          <Episode>
            <Episode.Title>{`${episodes[page].year} -`}</Episode.Title>
            <Episode.SubTitle>{episodes[page].title}</Episode.SubTitle>
            <Episode.Text>{p(episodes[page].text)}</Episode.Text>
            <Episode.Images data={episodes[page].images} />
          </Episode>
          <Controls />
        </SHistory>
      </HistoryContext.Provider>
    </Page>
  );
};

export default HistoryPage;
