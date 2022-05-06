import { useState } from 'react';
import { useGetCharactersQuery } from '../../api/apiSlice';

import Spinner from '../../../components/Spinner';
import CharacterCard from '../CharacterCard';
import { CardsWrapper, FormWrapper } from './CharacterListStyles';

export default function CharacterList() {
  const [searchTerm, setSearchTerm] = useState('');
  const {
    data: characters = [],
    isLoading,
    isSuccess,
  } = useGetCharactersQuery(searchTerm);

  const onChange = (q) => {
    setSearchTerm(q);
  };

  let content;
  if (isLoading) {
    content = <Spinner />;
  } else if (isSuccess) {
    content = (
      <CardsWrapper>
        {characters.map((character) => (
          <CharacterCard key={character.char_id} character={character} />
        ))}
      </CardsWrapper>
    );
  }

  return (
    <>
      <FormWrapper>
        <form>
          <input
            type='text'
            className='form-control'
            placeholder='Search characters'
            value={searchTerm}
            onChange={(e) => onChange(e.target.value)}
          />
        </form>
      </FormWrapper>
      {content}
    </>
  );
}
