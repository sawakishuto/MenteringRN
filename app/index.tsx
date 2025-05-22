import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white border-6 border-red-500 gap-4">
        <Text className="text-yellow-500 text-3xl font-bold border-2 border-blue-500" >TODOアプリ</Text>
      <TouchableOpacity
        className="bg-blue-500 px-4 py-2 rounded-lg border-2 border-blue-500"
        onPress={() => router.push("/detail")}
      >
        <Text className="text-white font-semibold">Go to Detail</Text>
      </TouchableOpacity>
    </View>
  );
}


// これ見ながらデザイン作っていこう
// https://nerdcave.com/tailwind-cheat-sheet


// useState 
// useEffect