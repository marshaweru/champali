import{ useState } from 'react'
import { 
  View, Text, TouchableOpacity, FlatList, ActivityIndicator 
} from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import  PopularJobsCard from '../../common/cards/popular/PopularJobCard';
//import { colors } from '@material-ui/core'
import useFetch from '../../../hook/useFetch'


const Popularjobs = () => {
  const router = useRouter();
  
  const { data, isLoading, error } = useFetch 
  ('search', {
    query: 'React developer',
    num_pages: 1
  })

  //console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text styles={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <view style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) :error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4]}
            renderItem={({ item }) => {
              <PopularJobsCard 
                item={item}
              />
            }}
            keyExtractor={item => item?.job_id}
            contentContainerStyle = {{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </view>
    </View>
  )
}

export default Popularjobs