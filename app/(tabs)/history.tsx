import { StyleSheet, FlatList, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HistoryItem from '@/components/HistoryItem';
import { useTheme } from '@react-navigation/native';
import { Colors } from '@/constants/Colors';

const DATA = [
  {
    id: "1",
    type: 'Bacterial',
    location: "NITK Surathkal",
    time: new Date("2024-09-01T10:00:00Z"),
  },
  {
    id: "2",
    type: 'Bacterial',
    location: "NITK Surathkal",
    time: new Date("2024-09-01T10:00:00Z"),
  },
  {
    id: "3",
    type: 'Bacterial',
    location: "NITK Surathkal",
    time: new Date("2024-09-01T10:00:00Z"),
  },
  {
    id: "4",
    type: 'Viral',
    location: "Bangalore",
    time: new Date("2024-09-02T12:00:00Z"),
  },
  {
    id: "5",
    type: 'Fungal',
    location: "Mangalore",
    time: new Date("2024-09-03T08:30:00Z"),
  },
  {
    id: "6",
    type: 'Parasitic',
    location: "Mysore",
    time: new Date("2024-09-04T15:00:00Z"),
  },
  {
    id: "7",
    type: 'Bacterial',
    location: "Hubli",
    time: new Date("2024-09-05T09:15:00Z"),
  },
  {
    id: "8",
    type: 'Viral',
    location: "Belgaum",
    time: new Date("2024-09-06T11:45:00Z"),
  },
  {
    id: "9",
    type: 'Fungal',
    location: "NITK Surathkal",
    time: new Date("2024-09-07T07:00:00Z"),
  },
  {
    id: "10",
    type: 'Parasitic',
    location: "Bangalore",
    time: new Date("2024-09-08T13:30:00Z"),
  },
  {
    id: "11",
    type: 'Bacterial',
    location: "Mangalore",
    time: new Date("2024-09-09T14:20:00Z"),
  },
  {
    id: "12",
    type: 'Viral',
    location: "Mysore",
    time: new Date("2024-09-10T10:50:00Z"),
  },
  {
    id: "13",
    type: 'Fungal',
    location: "Hubli",
    time: new Date("2024-09-11T16:40:00Z"),
  },
  {
    id: "14",
    type: 'Parasitic',
    location: "Belgaum",
    time: new Date("2024-09-12T09:00:00Z"),
  },
  {
    id: "15",
    type: 'Bacterial',
    location: "NITK Surathkal",
    time: new Date("2024-09-13T08:15:00Z"),
  },
  {
    id: "16",
    type: 'Viral',
    location: "Bangalore",
    time: new Date("2024-09-14T12:10:00Z"),
  },
  {
    id: "17",
    type: 'Fungal',
    location: "Mangalore",
    time: new Date("2024-09-15T15:30:00Z"),
  },
  {
    id: "18",
    type: 'Parasitic',
    location: "Mysore",
    time: new Date("2024-09-16T07:45:00Z"),
  },
  {
    id: "19",
    type: 'Bacterial',
    location: "Hubli",
    time: new Date("2024-09-17T14:30:00Z"),
  },
  {
    id: "20",
    type: 'Viral',
    location: "Belgaum",
    time: new Date("2024-09-18T10:00:00Z"),
  }
];



export default function History() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={{backgroundColor: Colors[colorScheme ?? "light"].background}}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <HistoryItem item={item} backgroundColor={Colors[colorScheme ?? "light"].itemBackground} />}
        numColumns={2}
        keyExtractor={item => item.id}

      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
