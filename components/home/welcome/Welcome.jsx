import { useState } from 'react' 
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] =useState('full-time')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Weru</Text>
        <Text style={styles.welcomeMessage}>Find yur perfect jobs</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput} 
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
      <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          heyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
        />
      </View>
    </View>
  )
}

export default Welcome