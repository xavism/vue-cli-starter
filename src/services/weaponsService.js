import gql from 'graphql-tag'

const allWeaponsQuery = gql`query AllWeaponsQuery{
  weapons: allWeapons (
    orderBy: createdAt_ASC
  ){
    id,
    type,
    color
  }
}
`

export default {
  allWeaponsQuery
}
