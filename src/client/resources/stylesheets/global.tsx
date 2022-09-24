import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const Global = createGlobalStyle`
  body{
    background: ${theme.colors.background};
    color: ${theme.colors.text};
  }
  .ant-btn {
    border-color: ${theme.colors.border};
  }
  .ant-card {
    background: ${theme.colors.element};
  }
  .ant-card-head {
    border-color: ${theme.colors.border};
  }
  .ant-card-bordered {
    border-color: ${theme.colors.border};
  }
  .ant-list-split .ant-list-item {
    border-color: ${theme.colors.border};
  }
  .ant-input-affix-wrapper {
    background: ${theme.colors.element};
    border-color: ${theme.colors.border};
  }
  .ant-btn-text {
    border-color: transparent;
  }
  .ant-dropdown-menu, .ant-select-dropdown {
    background: ${theme.colors.element};
    border: ${theme.dimensions.border};
    box-shadow: none;
  }
`;

export default Global;
