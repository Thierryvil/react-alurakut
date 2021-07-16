import React from "react";
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";
import { ProfileRelationsBox } from "../src/components/ProfileRelations";

function ProfileSidebar(props) {
  return (
    <Box>

      <img
        src={`https://github.com/${props.githubUser}.png`}
        style={{ borderRadius: "8px" }}
        alt={props.githubUser}
      />

      <hr />
      <p>
        <a href={`https://github.com/${props.githubUser}`} className="boxLink">
          @{props.githubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

function WelcomeMessage(props) {
  return <h1 className="title">Bem-vindo(a), {props.githubUser}</h1>;
}

export default function Home() {
  const githubUser = "thierryvil";
  const [githubDevelopers, setGitHubDevelopers] = React.useState([]);
  const [community, setCommunity] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${githubUser}/following`)
      .then(async (response) => await response.json())
      .then((data) => setGitHubDevelopers(data));

    fetch('/api/comunidades', {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(async (response) => await response.json())
      .then((data) => setCommunity(data))
  }, [])

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <WelcomeMessage githubUser={githubUser} />

            <OrkutNostalgicIconSet legal={3} />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form
              onSubmit={function handleCreateCommunity(event) {
                event.preventDefault();

                const dataFormCommunity = new FormData(event.target);

                const newCommunity = {
                  id: new Date().toISOString(),
                  title: dataFormCommunity.get("communityName"),
                  avatarUrl: dataFormCommunity.get("communityImage"),
                  url: dataFormCommunity.get("communityURL"),
                };

                setCommunity([newCommunity, ...community]);
              }}
            >
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="communityName"
                  arial-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>

              <div>
                <input
                  placeholder="Qual vai ser a URL da sua comunidade?"
                  name="communityURL"
                  arial-label="Qual vai ser a URL da sua comunidade?"
                  type="text"
                />
              </div>

              <div>
                <input
                  placeholder="Coloque uma URL para usarmos como capa"
                  name="communityImage"
                  arial-label="Coloque uma URL para usarmos como capa"
                  type="text"
                />
              </div>
              <button>Criar Comunidade</button>
            </form>
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBox
            title="Desenvolvedores"
            items={githubDevelopers}
            target="/amigos"
          />
          <ProfileRelationsBox
            title="Comunidades"
            items={community}
            target="/comunidades"
          />
        </div>
      </MainGrid>
    </>
  );
}
