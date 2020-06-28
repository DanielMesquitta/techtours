import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 30px 0 20px;
  border-bottom-width: 4px;
  border-bottom-color: #eee;
`

export const Title = styled.Text`
  font-size: 20px;
  color: #444;
  padding: 0 20px;
  margin-bottom: 15px;
`

export const Bold = styled.Text`
  font-weight: bold;
`

export const List = styled.FlatList`
  padding: 0 20px;
`

export const ListItem = styled.View`
  margin-right: 15px;
`

export const Thumbnail = styled.Image`
  width: 200px;
  height: 120px;
  resize-mode: cover;
  border-radius: 2px;
`

export const Comapany = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
`

export const Price = styled.Text`
  font-size: 15px;
  color: #999;
  margin-top: 5px;
`
