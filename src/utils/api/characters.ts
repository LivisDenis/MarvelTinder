import { api } from './api';
import { CharacterDataWrapper, EventsParameters } from '../../types';

export interface GetCharactersParams {
  params?: EventsParameters;
  // config?: AxiosRequestConfig;
}

export const getCharacters = async ({ params }: GetCharactersParams = {}) => {
  const { data } = await api.get<CharacterDataWrapper>(``, { params });
  return data.data;
};
