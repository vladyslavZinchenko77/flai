import { create } from 'zustand'

export const useUserStore = create((set) => ({
  user: {
    country: 'Canada',
    followedRecommendations: 2,
    isOfficial: true,
    isPremium: false,
    name: 'User',
    songs: [
      {
        bitrate: 320,
        duration: '00:45',
        genre: 'Melodic',
        isTranding: true,
        type: 'original',
        title: 'Khabane Lame',
        placeInTheCountry: 5,
        placeInTheWorld: 43,
        soundAudience: [
          { title: 'Beauty', percent: 40 },
          { title: 'Music', percent: 31 },
          { title: 'Travel', percent: 22 },
          { title: 'Show', percent: 14 },
          { title: 'Sport', percent: 12 },
          { title: 'Health', percent: 9 },
          { title: 'Other', percent: 6 },
        ],
        keywords: [
          'Whispering breeze',
          'Wandering soul',
          'Crimson dawn',
          'Echoes of silence',
        ],
      },
    ],
  },
}))

export const useRecomendationsList = create((set) => ({
  recomendations: [
    {
      isOpen: true,
      main: '02:15 Recommendations for your song',
      id: 0,
    },
    {
      isOpen: true,
      main: 'Duration for segments of your sound promo',
      secondary: [
        'Duration for segments of your sound promo',
        'Duration for segments of your sound promo',
      ],
      id: 1,
    },
    {
      isOpen: false,
      main: 'Release day',
      id: 2,
    },
    {
      isOpen: true,
      main: 'Promotion',
      id: 3,
    },
    {
      isOpen: false,
      main: 'Duet',
      id: 4,
    },
    {
      isOpen: false,
      main: 'The best location for the potential of your sound',
      id: 5,
    },
  ],
}))
