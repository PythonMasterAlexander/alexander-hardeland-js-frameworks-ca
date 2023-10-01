import style from "styled-components";
import { Link } from "react-router-dom";
export const UnorderedListLinkContainer = style.ul`
`;
export const LinkListItem = style.li`
  display: inline-block;
  padding-right: 0.75rem; 
`;
export const LinkStyle = style(Link)`
  color: hsla(0, 100%, 100%, 1);
  font-size: 1.25rem;
  text-decoration: none;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 100px;
  background: hsla(220, 36%, 21%, 1);
  &:hover {
    background: hsla(220, 36%, 21%, 0.8);
    text-decoration: underline;
  }
`;
