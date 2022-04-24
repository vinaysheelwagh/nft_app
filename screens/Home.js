import { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { COLORS, NFTData } from "../constants";
import { NFTCard, FocussedStatusBar, HomeHeader } from "../components";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    console.log(value);
    if (!value.length) return setNftData(NFTData);
    const filteredData = NFTData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    console.log(filteredData);
    if (filteredData.length) setNftData(filteredData);
    else setNftData(NFTData);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocussedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={({ id }) => id}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, zIndex: -1 }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
