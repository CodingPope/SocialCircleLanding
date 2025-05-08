import React from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import PhonePreview from '../components/PhonePreview/PhonePreview';
import FeaturesSection from '../components/FeatureSection/FeaturesSection';
import { AiOutlineBars } from 'react-icons/ai';
import { MdGroups } from 'react-icons/md';
import { FaBell, FaCalendarAlt, FaMapMarkerAlt, FaMap } from 'react-icons/fa';
import './Waitlist.css';

const eventCards = [
  { id: 1, title: 'Lorem Ipsum', subtitle: 'Simply dummy text', icon: '🖥️➦' },
  { id: 2, title: 'Lorem Ipsum', subtitle: 'Simply dummy text', icon: '⏱️➕' },
  { id: 3, title: 'Lorem Ipsum', subtitle: 'Simply dummy text', icon: '🎉' },
];

const navIcons = [
  { id: 1, icon: <FaMap /> },
  { id: 2, icon: <AiOutlineBars /> },
  { id: 3, icon: <MdGroups /> },
  { id: 4, icon: '👤' },
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
