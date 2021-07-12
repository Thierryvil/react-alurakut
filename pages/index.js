import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(props) {
  return (
    <Box>
      <img src={`https://github.com/${props.userName}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

function WelcomeMessage(props) {
  return (<h1 className="title">
    Bem-vindo(a), {props.userName}
  </h1>)
}

export default function Home() {
  const myGitHubUserName = 'thierryvil';

  const gitHubDevelopers = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar userName={myGitHubUserName} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <WelcomeMessage userName={myGitHubUserName} />

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              <span>Desenvolvedores </span>
              <a href={`/friends`}>
                <span>({gitHubDevelopers.length})</span>
              </a>
            </h2>

            <ul>
              {gitHubDevelopers.map((userName) => {
                return (

                  <li>
                    <a href={`/users/${userName}`} key={userName}>
                      <img src={`https://github.com/${userName}.png`} />
                      <span>{userName} (0)</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}