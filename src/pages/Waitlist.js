import React from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import PhonePreview from '../components/PhonePreview/PhonePreview';
import FeaturesSection from '../components/FeatureSection/FeaturesSection';
import { AiOutlineBars } from 'react-icons/ai';
import { MdGroups } from 'react-icons/md';
import { IoPersonCircle } from 'react-icons/io5';
import { FaBell, FaCalendarAlt, FaMapMarkerAlt, FaMap } from 'react-icons/fa';
import './Waitlist.css';

const eventCards = [
  {
    id: 1,
    rating: '4.5',
    user: 'John Doe',
    title: 'Pick Up Volleyball',
    description: 'All levels welcome — casual 5v5 game at the park',
    profilePicture: 'https://randomuser.me/api/portraits/men/32.jpg',
    attendance: 25,
    timeOfEvent: 'Tomorrow at 5 PM',
  },
  {
    id: 2,
    rating: '4.7',
    user: 'Jane Smith',
    title: 'Yoga in the Park',
    description: 'Join us for a relaxing yoga session in the park',
    profilePicture: 'https://randomuser.me/api/portraits/women/44.jpg',
    attendance: 10,
    timeOfEvent: 'Tomorrow at 8 AM',
  },
  {
    id: 3,
    rating: '4.9',
    user: 'Alice Johnson',
    title: 'Hiking Trip',
    description: 'Medium difficulty hike with beautiful views',
    profilePicture: 'https://randomuser.me/api/portraits/women/68.jpg',
    attendance: 30,
    timeOfEvent: 'Sunday at 9 AM',
  },
  {
    id: 4,
    rating: '4.6',
    user: 'Michael Brown',
    title: 'Sunday Morning Run',
    description: 'Join us for a refreshing 5k run around the lake',
    profilePicture: 'https://randomuser.me/api/portraits/men/75.jpg',
    attendance: 18,
    timeOfEvent: 'Sunday at 7 AM',
  },
  {
    id: 5,
    rating: '4.8',
    user: 'Emily Davis',
    title: 'Book Club Meetup',
    description: 'Discussing the latest bestseller at the local cafe',
    profilePicture: 'https://randomuser.me/api/portraits/women/55.jpg',
    attendance: 12,
    timeOfEvent: 'Friday at 6 PM',
  },
  {
    id: 6,
    rating: '4.4',
    user: 'David Wilson',
    title: 'Outdoor Movie Night',
    description: 'Watch a classic movie under the stars',
    profilePicture: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendance: 40,
    timeOfEvent: 'Saturday at 8 PM',
  },
  {
    id: 7,
    rating: '4.7',
    user: 'Sophia Martinez',
    title: 'Art Walk',
    description: 'Explore local galleries and street art',
    profilePicture: 'https://randomuser.me/api/portraits/women/33.jpg',
    attendance: 20,
    timeOfEvent: 'Saturday at 3 PM',
  },
];

const navIcons = [
  { id: 1, icon: <FaMap /> },
  { id: 2, icon: <AiOutlineBars /> },
  { id: 3, icon: <MdGroups /> },
  { id: 4, icon: <IoPersonCircle /> },
];

const features = [
  {
    Icon: FaBell,
    title: 'Stay in the Loop',
    copy: 'Get updates on new meets, invites, and your friends’ plans.',
  },
  {
    Icon: FaCalendarAlt,
    title: 'Discover Events',
    copy: 'Gaming.  Hiking. Art. Cars. Books. Food. Dogs. Drinks. You name it - it’s happening around you.',
  },
  {
    Icon: FaMapMarkerAlt,
    title: 'Find Your People',
    copy: 'Hang with locals who actually get you. Interests matched.',
  },
];

export default function WaitlistLandingPage() {
  return (
    <div className='container'>
      <Header />
      <div className='hero-phone-wrapper'>
        <HeroSection />
        <PhonePreview eventCards={eventCards} navIcons={navIcons} />
      </div>
      <FeaturesSection features={features} />
    </div>
  );
}
