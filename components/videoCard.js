import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import * as Icon from "react-native-feather";
import { formatViews } from '../utils/numbers';

export default function VideoCard({ video }) {
  const [isPlaying, setIsPlaying] = useState(false); // State to track if the video is playing
  const thumbnailUrl = video.thumbnail[0]?.url;
  const channelThumbnailUrl = video.channelThumbnail[0]?.url;

  return (
    <View>
      <Pressable onPress={() => setIsPlaying(!isPlaying)}>
      <Image source={{ uri: thumbnailUrl }} style={{ height: 200, borderRadius: 10 , marginLeft: 15 , marginRight: 15 }} />
      </Pressable>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 8, marginBottom: 5, marginTop: -6 }}>
        <View style={{ backgroundColor: 'black', borderRadius: 3, paddingHorizontal: 2 }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>
            {video.lengthText}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5, marginHorizontal: 8 }}>
        <Image source={{ uri: channelThumbnailUrl }} style={{ height: 36, width: 36, borderRadius: 18 }} />
        <View style={{ flex: 1, marginLeft: 8 }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            {video.title}
          </Text>
          <Text style={{ color: '#c0c0c0', fontSize: 12 }}>
            {video.channelTitle.length > 20 ? `${video.channelTitle.slice(0, 20)}...` : video.channelTitle} • {formatViews(video.viewCount)} views • {video.publishedText}
          </Text>
        </View>
        <View>
          <Icon.MoreVertical color="white" strokeWidth={2} height={15} />
        </View>
      </View>
    </View>
  );
}
