// services/exploreService.js

export const getCategories = () => {
  return [
    { name: "Tất cả", active: true },
    { name: "Pop", active: false },
    { name: "Rock", active: false },
    { name: "Hip Hop", active: false },
    { name: "Jazz", active: false },
    { name: "Classical", active: false },
    { name: "Electronic", active: false },
    { name: "R&B", active: false }
  ];
};

export const getFeaturedPlaylists = () => {
  return [
    {
      id: 1,
      title: "Top Hits 2024",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
      description: "Những bài hát được nghe nhiều nhất",
      songs: 50
    },
    {
      id: 2,
      title: "Chill Vibes",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop",
      description: "Thư giãn cùng âm nhạc",
      songs: 35
    },
    {
      id: 3,
      title: "Workout Mix",
      image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop",
      description: "Năng lượng cho buổi tập",
      songs: 42
    },
    {
      id: 4,
      title: "Late Night Jazz",
      image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=300&h=300&fit=crop",
      description: "Jazz cho đêm muộn",
      songs: 28
    },
    {
      id: 5,
      title: "Acoustic Sessions",
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300&h=300&fit=crop",
      description: "Âm nhạc acoustic nhẹ nhàng",
      songs: 30
    },
    {
      id: 6,
      title: "Party Anthems",
      image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=300&h=300&fit=crop",
      description: "Bùng nổ cùng bữa tiệc",
      songs: 45
    },
    {
      id: 7,
      title: "Study Focus",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      description: "Tập trung học tập làm việc",
      songs: 38
    },
    {
      id: 8,
      title: "Road Trip",
      image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=300&h=300&fit=crop",
      description: "Âm nhạc cho chuyến đi",
      songs: 52
    }
  ];
};

export const getTrendingSongs = () => {
  return [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:20",
      plays: "2.5M"
    },
    {
      id: 2,
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      duration: "3:23",
      plays: "2.1M"
    },
    {
      id: 3,
      title: "Save Your Tears",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:35",
      plays: "1.9M"
    },
    {
      id: 4,
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      duration: "2:58",
      plays: "1.8M"
    },
    {
      id: 5,
      title: "Stay",
      artist: "The Kid LAROI, Justin Bieber",
      album: "Single",
      duration: "2:21",
      plays: "1.7M"
    },
    {
      id: 6,
      title: "Peaches",
      artist: "Justin Bieber ft. Daniel Caesar",
      album: "Justice",
      duration: "3:18",
      plays: "1.6M"
    },
    {
      id: 7,
      title: "Montero",
      artist: "Lil Nas X",
      album: "Montero",
      duration: "2:17",
      plays: "1.5M"
    },
    {
      id: 8,
      title: "Kiss Me More",
      artist: "Doja Cat ft. SZA",
      album: "Planet Her",
      duration: "3:28",
      plays: "1.4M"
    },
    {
      id: 9,
      title: "drivers license",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      duration: "4:02",
      plays: "1.3M"
    },
    {
      id: 10,
      title: "Heat Waves",
      artist: "Glass Animals",
      album: "Dreamland",
      duration: "3:58",
      plays: "1.2M"
    }
  ];
};

export const getNewReleases = () => {
  return [
    {
      id: 1,
      title: "Midnight Dreams",
      artist: "Luna Star",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      date: "2024-12-15"
    },
    {
      id: 2,
      title: "Electric Soul",
      artist: "The Neon Band",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop",
      date: "2024-12-14"
    },
    {
      id: 3,
      title: "Summer Breeze",
      artist: "Coastal Waves",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop",
      date: "2024-12-13"
    },
    {
      id: 4,
      title: "Urban Legends",
      artist: "City Lights",
      image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop",
      date: "2024-12-12"
    },
    {
      id: 5,
      title: "Acoustic Sessions",
      artist: "Jake Morrison",
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300&h=300&fit=crop",
      date: "2024-12-11"
    },
    {
      id: 6,
      title: "Neon Nights",
      artist: "Synthwave Collective",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop",
      date: "2024-12-10"
    },
    {
      id: 7,
      title: "Vintage Vinyl",
      artist: "The Retro Boys",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop",
      date: "2024-12-09"
    },
    {
      id: 8,
      title: "Ocean Waves",
      artist: "Blue Horizon",
      image: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=300&h=300&fit=crop",
      date: "2024-12-08"
    }
  ];
};
