import gql from 'graphql-tag'

const allCharactersQuery = gql`query AllCharactersQuery{
  characters: allCharacters (
    orderBy: createdAt_ASC
  ){
    id,
    name,
    side,
    weapon{
      type,
      color
    },
    iconName
  }
}
`

const characterQuery = gql`query SingleCharacterQuery($id: ID!){
  character: Character(id: $id) {
    id,
    name,
    side,
    weapon{
      type,
      color
    },
    iconName
  }
}
`

const updateCharacterMutation = gql`
  mutation updateCharacter($charId: ID!) {
    updateCharacter(id: $charId) {
      id,
      name,
      side,
      weapon,
      iconName
    }
  }
`

export default {
  allCharactersQuery,
  characterQuery,
  updateCharacterMutation
}
