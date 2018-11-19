import { Text, View, TouchableHighlight } from 'react-native'
import styles from '../styles/todoItemStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

const TodoItem = ({ item, index, onPressRemove }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {item.title}
    </Text>
    <TouchableHighlight onPress={() => onPressRemove(index)}>
      <Icon name='remove' size={30} color='#d75452' />
    </TouchableHighlight>
  </View>
)
export default TodoItem
