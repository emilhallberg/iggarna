import { createContext } from "react";
import styled from "styled-components";

const HistoryContext = createContext({
  page: 0,
  direction: 0,
  length: 0,
  paginate: (d: number): number => d,
  goToPage: (i: number): number => i,
});

export default HistoryContext;
