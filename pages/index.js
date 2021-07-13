import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBox, ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(props) {
  return (
    <Box>
      <img
        src={`https://github.com/${props.githubUser}.png`}
        style={{ borderRadius: '8px' }}
        alt={props.gitHubUser}
      />

      <hr />
      <p>
        <a href={`https://github.com/${props.gitHubUser}`} className='boxLink'>
          @{props.githubUser}
        </a>
      </p>
      <br />
      <AlurakutProfileSidebarMenuDefault />
    </Box >
  )
}

function WelcomeMessage(props) {
  return (
    <h1 className="title">
      Bem-vindo(a), {props.githubUser}
    </h1>)
}

export default function Home() {
  const githubUser = 'thierryvil';

  const gitHubDevelopers = [
    {
      name: 'juunegreiros',
      image: 'https://github.com/juunegreiros.png',
      url: 'https://github.com/juunegreiros',
    },
    {
      name: 'omariosouto',
      image: 'https://github.com/omariosouto.png',
      url: 'https://github.com/omariosouto',
    },
    {
      name: 'peas',
      image: 'https://github.com/peas.png',
      url: 'https://github.com/peas',
    },
    {
      name: 'rafaballerini',
      image: 'https://github.com/rafaballerini.png',
      url: 'https://github.com/rafaballerini',
    },
    {
      name: 'marcobrunodev',
      image: 'https://github.com/marcobrunodev.png',
      url: 'https://github.com/marcobrunodev',
    },
    {
      name: 'felipefialho',
      image: 'https://github.com/felipefialho.png',
      url: 'https://github.com/felipefialho',
    },
    {
      name: 'guilhermesilveira',
      image: 'https://github.com/guilhermesilveira.png',
      url: 'https://github.com/guilhermesilveira',
    },
  ]

  const communityMock = [
    {
      name: 'Alura',
      image: 'https://www.alura.com.br/assets/img/alura-share.1617727198.png',
      url: 'https://www.alura.com.br/'
    },
    {
      name: 'Queria sorvete, mas era feijão',
      image: 'https://img10.orkut.br.com/community/c54e54e5db93fcfd279da011f95e019f.jpg',
      url: 'https://github.com/guilhermesilveira',
    },
    {
      name: 'Eu nunca terminei uma borracha',
      image: 'https://img10.orkut.br.com/community/9514b17c3b4784691b08a21219eec915.jpg',
      url: 'https://github.com/guilhermesilveira',
    },
    {
      name: 'Eu odeio acordar cedo ',
      image: 'https://img10.orkut.br.com/community/52cc4290facd7fa700b897d8a1dc80aa.jpg',
      url: 'https://github.com/guilhermesilveira',
    },
  ]

  const [community, setCommunity] = React.useState(communityMock)

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <WelcomeMessage githubUser={githubUser} />

            <OrkutNostalgicIconSet legal={3} />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCreateCommunity(event) {
              event.preventDefault();

              const dataFormCommunity = new FormData(event.target);

              const newCommunity = {
                id: new Date().toISOString(),
                name: dataFormCommunity.get('communityName'),
                image: dataFormCommunity.get('communityImage'),
                url: dataFormCommunity.get('communityURL')
              }

              setCommunity([newCommunity, ...community])
            }}>
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
              <button>
                Criar Comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBox title='Desenvolvedores' arrayRelations={gitHubDevelopers} target='/amigos' />
          <ProfileRelationsBox title='Comunidades' arrayRelations={community} target='/comunidades' />
        </div>
      </MainGrid>
    </>
  )
}