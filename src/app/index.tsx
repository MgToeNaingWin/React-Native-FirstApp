import ActionCard from '@/components/ActionCard';
import ContactList from '@/components/ContactList';
import ElevatedCard from '@/components/ElevatedCard';
import FancyCard from '@/components/FancyCard';
import FlatCard from '@/components/Flatcard';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCard ></FlatCard>
      <ElevatedCard></ElevatedCard>
      <FancyCard></FancyCard>
      <ActionCard></ActionCard>
      <ContactList></ContactList>
      </ScrollView>
    </SafeAreaView>

  );
}
