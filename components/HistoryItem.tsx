import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { connectToDatabase, deleteHistoryRecord } from '@/db/db';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Image, View, Pressable } from 'react-native';

type HistoryItemProps = {
  item: {
    id?: string,
    type: string,
    location: string,
    time: number,
    imagePath: string,
  },
  backgroundColor: string,
  setData: React.Dispatch<React.SetStateAction<ImageType[]>>
}

const HistoryItem = ({ item, backgroundColor, setData }: HistoryItemProps) => {

  const date = new Date(item.time).toLocaleDateString();

  const handleDelete = async () => {
    if (!item.id) return;
    try {
      const db = await connectToDatabase();
      await deleteHistoryRecord(db, item.id);
      setData((prev) => prev.filter((record) => record.id !== item.id));
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <ThemedView style={styles.container}>
      <View style={{ ...styles.item, backgroundColor: backgroundColor }}>
        <Image source={{ uri: item.imagePath }} style={styles.image} />
        <ThemedText>{item.type}</ThemedText>
        <View style={styles.info}>
          <Ionicons name="locate-outline" size={20} />
          <ThemedText>{item.location}</ThemedText>
        </View>
        <View style={styles.info}>
          <Ionicons name="calendar-outline" size={20} />
          <ThemedText>{date}</ThemedText>
        </View>
        <Pressable onPress={handleDelete}>
          <Ionicons name="trash-outline" size={20} />
        </Pressable>
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