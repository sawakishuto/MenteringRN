import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  // ↓がやることをいっぱいぶち込める箱みたいなもの
  const [todo, setTodo] = useState<{ id: number; title: string }[]>([]);

  // 画面が表示されたときに色々できる場所
  useEffect(() => {
    // 実際に仮のやることを箱の中に入れている
    setTodo([{ id: 1, title: "タスクをスクロールできるようにしよう" }]);
  }, []);

  return (
    <View className="flex-1 items-center  bg-white border-6 border-red-500 gap-4 top-[60px] ">
      <Text className="text-yellow-500 text-3xl font-bold border-2 border-blue-500">
        TODOアプリ
      </Text>
      <View className="flex-row gap-4">
        <View className=" bg-white border-red-500 border-2 p-2">
          <Text className="">この辺に入力バーができたら神</Text>
        </View>
        <View className=" bg-white border-6 border-red-500 border-2 p-2">
          <Text>ボタンはここ</Text>
        </View>
      </View>

      {/* やることを並べている */}
      <View className="items-center w-full bg-white border-2 border-red-500 gap-4 p-4">
        {todo.map((todo) => (
          <Text
            key={todo.id}
            className="text-blue-500 text-xl font-bold border-2 border-red-500 w-full text-center p-2"
          >
            {todo.title}
          </Text>
        ))}
      </View>

      {/* ボタンを押したら画面遷移する */}
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
