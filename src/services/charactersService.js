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
  mutation updateCharacter($id: ID!, $name: String!, $side: String!, $weaponId: ID!, $iconName: String){
    updateCharacter(
      id: $id,
      name: $name,
      side: $side,
      weaponId: $weaponId,
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

const createCharacterMutation = gql`
  mutation createCharacter($name: String!, $side: String!, $weaponId: ID!, $iconName: String){
    createCharacter(
      name: $name,
      side: $side,
      weaponId: $weaponId,
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
  updateCharacterMutation,
  createCharacterMutation
}
