import { Dimensions, StatusBar } from "react-native";

const Constants = {
    FULLVIEW_HEIGHT :Dimensions.get('screen').height - StatusBar.currentHeight,
    FULLVIEW_WIDTH :Dimensions.get('screen').width,
    LOGIN_SCREEN:'Login',
    REGISTER_SCREEN:'Register',
    FORGOT_SCREEN:'Forgot',
    VERIFY_SCREEN:'Verify'
};

const Data = [
    {
      country: "India",
      countryImage: "https://source.unsplash.com/800x600/?India",
      hotels: [
        {
          name: "Taj Lake Palace",
          location: "Udaipur, Rajasthan",
          rating: 4.9,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?taj-lake-palace",
        },
        {
          name: "The Oberoi Amarvilas",
          location: "Agra, Uttar Pradesh",
          rating: 4.8,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?oberoi-amarvilas",
        },
        {
          name: "Rambagh Palace",
          location: "Jaipur, Rajasthan",
          rating: 4.7,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?rambagh-palace",
        },
        {
          name: "Wildflower Hall, Shimla",
          location: "Shimla, Himachal Pradesh",
          rating: 4.8,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?wildflower-hall",
        },
        {
          name: "The Leela Palace",
          location: "Chennai, Tamil Nadu",
          rating: 4.6,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?leela-palace",
        },
      ]
    },
    {
      country: "United States",
      countryImage: "https://source.unsplash.com/800x600/?usa",
      hotels: [
        {
          name: "The Ritz-Carlton",
          location: "New York, NY",
          rating: 4.9,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?ritz-carlton",
        },
        {
          name: "Four Seasons Hotel",
          location: "Beverly Hills, CA",
          rating: 4.8,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?four-seasons-hotel",
        },
        {
          name: "Waldorf Astoria",
          location: "Chicago, IL",
          rating: 4.7,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?waldorf-astoria",
        },
        {
          name: "The Plaza",
          location: "New York, NY",
          rating: 4.7,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?the-plaza",
        },
        {
          name: "The Venetian Resort",
          location: "Las Vegas, NV",
          rating: 4.6,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?venetian-resort",
        },
      ]
    },
    {
      country: "Japan",
      countryImage: "https://source.unsplash.com/800x600/?japan",
      hotels: [
        {
          name: "Aman Tokyo",
          location: "Tokyo",
          rating: 4.9,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?aman-tokyo",
        },
        {
          name: "The Ritz-Carlton",
          location: "Osaka",
          rating: 4.8,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?ritz-carlton-osaka",
        },
        {
          name: "Park Hyatt Tokyo",
          location: "Tokyo",
          rating: 4.7,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?park-hyatt-tokyo",
        },
        {
          name: "Hoshinoya Tokyo",
          location: "Tokyo",
          rating: 4.8,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?hoshinoya-tokyo",
        },
        {
          name: "Andaz Tokyo",
          location: "Tokyo",
          rating: 4.6,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?andaz-tokyo",
        },
      ]
    },
    {
      country: "France",
      countryImage: "https://source.unsplash.com/800x600/?france",
      hotels: [
        {
          name: "Four Seasons Hotel George V",
          location: "Paris",
          rating: 4.9,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?four-seasons-paris",
        },
        {
          name: "Le Meurice",
          location: "Paris",
          rating: 4.8,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?le-meurice",
        },
        {
          name: "Ritz Paris",
          location: "Paris",
          rating: 4.7,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?ritz-paris",
        },
        {
          name: "Hotel Plaza Athenee",
          location: "Paris",
          rating: 4.7,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?plaza-athenee",
        },
        {
          name: "Château de Berne",
          location: "Provence",
          rating: 4.6,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?chateau-de-berne",
        },
      ]
    },
    {
      country: "Italy",
      countryImage: "https://source.unsplash.com/800x600/?italy",
      hotels: [
        {
          name: "Belmond Hotel Caruso",
          location: "Ravello",
          rating: 4.9,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?hotel-caruso",
        },
        {
          name: "Il San Pietro di Positano",
          location: "Positano",
          rating: 4.8,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?san-pietro-positano",
        },
        {
          name: "Hotel Splendido",
          location: "Portofino",
          rating: 4.7,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?hotel-splendido",
        },
        {
          name: "Villa d'Este",
          location: "Como",
          rating: 4.7,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?villa-deste",
        },
        {
          name: "Borgo Egnazia",
          location: "Savelletri di Fasano",
          rating: 4.6,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?borgo-egnazia",
        },
      ]
    },
    {
      country: "Switzerland",
      countryImage: "https://source.unsplash.com/800x600/?switzerland",
      hotels: [
        {
          name: "Badrutt's Palace Hotel",
          location: "St. Moritz",
          rating: 4.9,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?badrutts-palace",
        },
        {
          name: "The Dolder Grand",
          location: "Zurich",
          rating: 4.8,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?dolder-grand",
        },
        {
          name: "Bürgenstock Hotel",
          location: "Lucerne",
          rating: 4.7,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?burgenstock-hotel",
        },
        {
          name: "Kulm Hotel",
          location: "St. Moritz",
          rating: 4.7,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?kulm-hotel",
        },
        {
          name: "The Chedi Andermatt",
          location: "Andermatt",
          rating: 4.6,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?chedi-andermatt",
        },
      ]
    },
    {
      country: "Maldives",
      countryImage: "https://source.unsplash.com/800x600/?maldives",
      hotels: [
        {
          name: "Gili Lankanfushi",
          location: "Lankanfushi Island",
          rating: 4.9,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?gili-lankanfushi",
        },
        {
          name: "Six Senses Laamu",
          location: "Laamu Atoll",
          rating: 4.8,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?six-senses-laamu",
        },
        {
          name: "Cheval Blanc Randheli",
          location: "Noonu Atoll",
          rating: 4.7,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?cheval-blanc-randheli",
        },
        {
          name: "One&Only Reethi Rah",
          location: "North Malé Atoll",
          rating: 4.7,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?one-and-only-reethi-rah",
        },
        {
          name: "Velaa Private Island",
          location: "Noonu Atoll",
          rating: 4.6,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?velaa-private-island",
        },
      ]
    },
    {
      country: "Spain",
      countryImage: "https://source.unsplash.com/800x600/?spain",
      hotels: [
        {
          name: "Hotel Arts Barcelona",
          location: "Barcelona",
          rating: 4.8,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?hotel-arts-barcelona",
        },
        {
          name: "Mandarin Oriental",
          location: "Barcelona",
          rating: 4.7,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?mandarin-oriental",
        },
        {
          name: "Gran Hotel Miramar",
          location: "Malaga",
          rating: 4.6,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?gran-hotel-miramar",
        },
        {
          name: "Hotel Maria Cristina",
          location: "San Sebastian",
          rating: 4.7,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?hotel-maria-cristina",
        },
        {
          name: "Abadia Retuerta LeDomaine",
          location: "Sardon de Duero",
          rating: 4.8,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?abadia-retuerta-le-domaine",
        },
      ]
    },
    {
      country: "Thailand",
      countryImage: "https://source.unsplash.com/800x600/?thailand",
      hotels: [
        {
          name: "Mandarin Oriental",
          location: "Bangkok",
          rating: 4.9,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?mandarin-oriental-bangkok",
        },
        {
          name: "Four Seasons Resort Chiang Mai",
          location: "Chiang Mai",
          rating: 4.8,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?four-seasons-chiang-mai",
        },
        {
          name: "Amanpuri",
          location: "Phuket",
          rating: 4.7,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?amanpuri-phuket",
        },
        {
          name: "The Peninsula",
          location: "Bangkok",
          rating: 4.7,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?the-peninsula-bangkok",
        },
        {
          name: "Six Senses Yao Noi",
          location: "Phang Nga",
          rating: 4.6,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?six-senses-yao-noi",
        },
      ]
    },
    {
      country: "Australia",
      countryImage: "https://source.unsplash.com/800x600/?australia",
      hotels: [
        {
          name: "Qualia",
          location: "Hamilton Island, Queensland",
          rating: 4.8,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/hamilton-island",
        },
        {
          name: "Southern Ocean Lodge",
          location: "Kangaroo Island, South Australia",
          rating: 4.8,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?southern-ocean-lodge",
        },
        {
          name: "The Langham",
          location: "Sydney, New South Wales",
          rating: 4.7,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?the-langham-sydney",
        },
        {
          name: "Saffire Freycinet",
          location: "Coles Bay, Tasmania",
          rating: 4.7,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?saffire-freycinet",
        },
        {
          name: "The Darling",
          location: "Gold Coast, Queensland",
          rating: 4.6,
          priceRange: "$$$",
          hotelImage: "https://source.unsplash.com/800x600/?the-darling-gold-coast",
        },
      ]
    }
]; 

const topPlaces = {
  India: {
    place: "Taj Mahal, Agra",
    review: "The Taj Mahal is an architectural marvel, symbolizing love and beauty.",
    image: "https://source.unsplash.com/800x600/?Taj-mahal"
  },
  America: {
    place: "Grand Canyon, Arizona",
    review: "The Grand Canyon is a breathtaking natural wonder, offering stunning views.",
    image: "https://source.unsplash.com/800x600/?grand-canyon"
  },
  Spain: {
    place: "Sagrada Família, Barcelona",
    review: "Sagrada Família is a masterpiece of Antoni Gaudí, a must-see in Barcelona.",
    image: "https://source.unsplash.com/800x600/?sagrada-familia"
  },
  Maldives: {
    place: "Bora Bora, Maldives",
    review: "Bora Bora is a tropical paradise with crystal clear waters and overwater bungalows.",
    image: "https://source.unsplash.com/800x600/?bora-bora"
  },
  Australia: {
    place: "Great Barrier Reef, Queensland",
    review: "The Great Barrier Reef is a vibrant underwater ecosystem, perfect for diving.",
    image: "https://source.unsplash.com/800x600/?great-barrier-reef"
  },
  France: {
    place: "Eiffel Tower, Paris",
    review: "The Eiffel Tower is an iconic landmark, offering stunning views of Paris.",
    image: "https://source.unsplash.com/800x600/?eiffel-tower"
  },
  Italy: {
    place: "Colosseum, Rome",
    review: "The Colosseum is an ancient Roman amphitheater, a testament to history.",
    image: "https://source.unsplash.com/800x600/?colosseum"
  },
  Japan: {
    place: "Mount Fuji, Honshu",
    review: "Mount Fuji is a sacred volcano, an iconic symbol of Japan's natural beauty.",
    image: "https://source.unsplash.com/800x600/?mount-fuji"
  },
  Switzerland: {
    place: "Matterhorn, Zermatt",
    review: "The Matterhorn is a majestic peak, offering breathtaking views of the Alps.",
    image: "https://source.unsplash.com/800x600/?matterhorn"
  },
  Thailand: {
    place: "Phi Phi Islands, Krabi",
    review: "The Phi Phi Islands are a tropical paradise with crystal clear waters and stunning beaches.",
    image: "https://source.unsplash.com/800x600/?phi-phi-islands"
  }
};

const testimonialsData = [
  {
      name: "John Doe",
      review: "Had an amazing experience with the tour. The guides were knowledgeable and the sights were breathtaking. Definitely a trip to remember!",
      avatarUrl: "https://source.unsplash.com/200x200/?male" // Replace with actual image URL
  },
  {
      name: "Jane Smith",
      review: "This tour exceeded all my expectations. The accommodations were top-notch, and the itinerary was well-planned. I can't wait to book another trip!",
      avatarUrl: "https://source.unsplash.com/200x200/?person" // Replace with actual image URL
  },
  {
      name: "Mixy Johnson",
      review: "I've been on many tours, but this one stood out. The attention to detail and personalized service made all the difference. Highly recommended!",
      avatarUrl: "https://source.unsplash.com/200x200/?female" // Replace with actual image URL
  }
];

const tourNotifications = [
  {
    imageUrl: require('../assets/Images/avatar.jpg'),
    notificationText: "Your tour to Paris has been confirmed!",
    dateTime: "20 Dec 2023 at 12:35 AM"
  },
  {
    imageUrl: require('../assets/Images/avatar.jpg'),
    notificationText: "Reminder: Don't forget your passport and tickets!",
    dateTime: "22 Dec 2023 at 08:00 AM"
  },
  {
    imageUrl: require('../assets/Images/avatar.jpg'),
    notificationText: "New recommendation: Try the local cuisine at Le Bistro.",
    dateTime: "25 Dec 2023 at 06:45 PM"
  },
  {
    imageUrl: require('../assets/Images/avatar.jpg'),
    notificationText: "Weather Alert: Rain expected in Paris tomorrow.",
    dateTime: "27 Dec 2023 at 09:20 AM"
  },
  {
    imageUrl: require('../assets/Images/avatar.jpg'),
    notificationText: "Your tour guide's contact: +33-123-456-789.",
    dateTime: "28 Dec 2023 at 03:30 PM"
  },
  {
    imageUrl: require('../assets/Images/avatar.jpg'),
    notificationText: "Reminder: Group meeting at the hotel lobby at 7 AM.",
    dateTime: "30 Dec 2023 at 06:00 AM"
  },
  {
    imageUrl: require('../assets/Images/avatar.jpg'),
    notificationText: "Last day in Paris! Make the most of it.",
    dateTime: "02 Jan 2024 at 10:00 AM"
  },
  {
    imageUrl: require('../assets/Images/avatar.jpg'),
    notificationText: "Tour feedback form: Please share your experience.",
    dateTime: "03 Jan 2024 at 04:15 PM"
  },
  {
    imageUrl: require('../assets/Images/avatar.jpg'),
    notificationText: "Thank you for using our tour planner app!",
    dateTime: "05 Jan 2024 at 09:50 AM"
  }
];


export {tourNotifications,Data,topPlaces,testimonialsData};
export default Constants;