import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { dataAnime } from "@/service/api";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, View } from "react-native";
import MoviesCard from "../components/MoviesCard";
import SearchInput from "../components/SearchInput";

// ✅ Define interface untuk anime data
interface AnimeData {
  mal_id: number;
  images: {
    jpg: {
      image_url: string;
    };
  };
  title: string;
  score: number;
  year: number;
}

export default function Index() {
  const [dataMovie, setDataMovie] = useState<AnimeData[]>([]);

  const router = useRouter();

  const handleFetch = async () => {
    const data = await dataAnime();
    setDataMovie(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    // header///

    <View className="flex-1 bg-primary h-full">
      <Image source={images.bg} className="absolute w-full z-0 " />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
        className="flex-1 px-5 "
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        {/* search bar*/}

        <View className=" mt-5 ">
          <SearchInput onPress={() => router.push("/search")} />
        </View>

        <View className=" flex-row flex-wrap flex-1 mt-[10%] justify-center  ">
          {dataMovie.map((para) => (
            <MoviesCard
              key={para.mal_id}
              src={{ uri: para.images.jpg.image_url }}
              title={para.title}
              ratings={para.score}
              year={para.year}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
