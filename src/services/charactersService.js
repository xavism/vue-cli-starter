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
      id
    },
    iconName
  }
}
`

const updateCharacterMutation = gql`
  mutation updateCharacter{
    updateCharacter(
      id: $charId,
      name: $name,
      side: $side,
      weapon: $weapon,
      iconName: $iconName
    ) {
      id,
      name,
      side,
      weapon{
        id
      },
      iconName
    }
  }
`

export default {
  allCharactersQuery,
  characterQuery,
  updateCharacterMutation
}
