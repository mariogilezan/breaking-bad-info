import { CardLinkWrapper } from './CharacterCardStyles';

export default function CharacterCard({ character }) {
  return (
    <CardLinkWrapper to={`character/${character.name}`}>
      <div>
        <img src={character.img} alt='character' />
      </div>
      <div className='title'>
        <h4>{character.name}</h4>
      </div>
    </CardLinkWrapper>
  );
}
