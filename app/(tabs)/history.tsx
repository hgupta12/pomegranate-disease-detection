import { StyleSheet, FlatList, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HistoryItem from '@/components/HistoryItem';
import { Colors } from '@/constants/Colors';
import { useCallback, useState } from 'react';
import { connectToDatabase, getHistoryRecords } from '@/db/db';
import { useFocusEffect } from 'expo-router';

export default function History() {
  const colorScheme = useColorScheme();
  const [data, setData] = useState<ImageType[]>([]);

  const getData = useCallback(async () => {
    const db = await connectToDatabase();
    const history = await getHistoryRecords(db);
    console.log(history);
    setData(history);
  }, []);

  useFocusEffect(useCallback(() => {
    getData();
  }, []))
  
  return (
    <SafeAreaView style={{ backgroundColor: Colors[colorScheme ?? "light"].background }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <HistoryItem item={item} backgroundColor={Colors[colorScheme ?? "light"].itemBackground} setData={setData}/>}
        numColumns={2}
        keyExtractor={item => item.id!}

      />
    </SafeAreaView>
  );
}
