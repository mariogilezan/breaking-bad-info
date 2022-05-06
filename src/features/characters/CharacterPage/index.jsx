import { useParams } from 'react-router-dom';
import { useGetCharacterByNameQuery } from '../../api/apiSlice';

import Spinner from '../../../components/Spinner';
import { PageWrapper } from './CharacterPageStyles';

export default function CharacterPage() {
  const { characterName } = useParams();
  const { data: character, isLoading } =
    useGetCharacterByNameQuery(characterName);

  return isLoading ? (
    <Spinner />
  ) : (
    <PageWrapper>
      <div className='imgWrapper'>
        <img src={character[0].img} alt='character' />
      </div>
      <div className='details'>
        <h2>{character[0].name}</h2>
        <small>Portrayed by: {character[0].portrayed}</small>
        <ul>
          <li>
            <h3>Nickname</h3>
            <p>{character[0].nickname}</p>
          </li>
          <li>
            <h3>Birthday</h3>
            <p>{character[0].birthday}</p>
          </li>
          <li>
            <h3>Occupation</h3>
            {character[0].occupation?.map((occupation) => (
              <p key={occupation}>{occupation}</p>
            ))}
          </li>

          <li>
            <h3>Status</h3>
            <p>{character[0].status}</p>
          </li>
          <li>
            <h3>Breaking Bad Apperance</h3>
            {character[0].appearance.length > 0 ? (
              character[0].appearance.map((appearance) => (
                <p key={appearance}>Season {appearance}</p>
              ))
            ) : (
              <p>None</p>
            )}
          </li>
          <li>
            <h3>Better Call Saul Apperance</h3>
            {character[0].better_call_saul_appearance.length > 0 ? (
              character[0].better_call_saul_appearance.map((appearance) => (
                <p key={appearance}>Season {appearance}</p>
              ))
            ) : (
              <p>None</p>
            )}
          </li>
        </ul>
      </div>
    </PageWrapper>
  );
}
