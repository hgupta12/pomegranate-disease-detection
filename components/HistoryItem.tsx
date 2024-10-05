import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Image, View } from 'react-native';

type HistoryItemProps = {
  item : {
    id: string,
    type: string,
    location: string,
    time: Date
  },
  backgroundColor: string,
}

const HistoryItem = ({item, backgroundColor}: HistoryItemProps) => {
  return (
    <ThemedView style={styles.container}>
    <View style={{...styles.item, backgroundColor: backgroundColor}}>
        <Image source={require("../assets/images/pomegranate.jpg")} style={styles.image}/>
        <ThemedText>{item.type}</ThemedText>
        <View style={styles.info}>
        <Ionicons name="locate-outline" size={10}/>
        <ThemedText>{item.location}</ThemedText>
        </View>
        <ThemedText>{item.time.toLocaleDateString()}</ThemedText>
    </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: "90%",
    },
    info: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
    },
    image: {
      height: 100,
      width: 100,
      borderRadius: 10
    }
  });

export default HistoryItem