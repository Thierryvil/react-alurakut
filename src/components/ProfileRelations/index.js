import styled from "styled-components";
import Box from "../Box";

function SeeAllLink(lenghtOfList, target) {
  if (lenghtOfList > 6) {
    return (
      <a href={`${target}`}>
        <span>Ver Todos</span>
      </a>
    );
  }
}

export function ProfileRelationsBox(props) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        <span>{props.title} </span>
        <a href={props.target}>
          <span>({props.items.length})</span>
        </a>
      </h2>

      <ul>
        {props.items
          .slice(0, 6)
          .map((relation) => {
            return (
              <li key={relation.id ? relation.id : relation.login}>
                <a
                  href={
                    relation.html_url ? relation.html_url : relation.htmlUrl
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={
                      relation.avatar_url
                        ? relation.avatar_url
                        : relation.avatarUrl
                    }
                    alt={relation.login ? relation.login : relation.title}
                  />
                  <span>
                    {relation.login ? relation.login : relation.title}
                  </span>
                </a>
              </li>
            );
          })}
      </ul>
      {SeeAllLink(props.items.length, props.target)}
    </ProfileRelationsBoxWrapper>
  );
}

export const ProfileRelationsBoxWrapper = styled(Box)`
  ul {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr;
    max-height: 220px;
    list-style: none;
  }
  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  ul li a {
    display: inline-block;
    height: 102px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    span {
      color: #ffffff;
      font-weight: bold;
      font-size: 10px;
      position: absolute;
      left: 0;
      bottom: 5px;
      z-index: 2;
      padding: 0 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 1;
      background-image: linear-gradient(0deg, #00000073, transparent);
    }
  }
`;
