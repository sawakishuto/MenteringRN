import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-600 mb-4">Home Screen</Text>
      <TouchableOpacity
        className="bg-blue-500 px-4 py-2 rounded-lg"
        onPress={() => router.push("/detail")}
      >
        <Text className="text-white font-semibold">Go to Detail</Text>
      </TouchableOpacity>
    </View>
  );
}
