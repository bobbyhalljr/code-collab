// pages/UserProfilesPage.tsx
import React from 'react';
import UserProfileList from '../components/profile/UserProfileList';

const UserProfilesPage: React.FC = () => {
  // Dummy data for user profiles
  const userProfiles = [
    {
      id: '1',
      avatar: 'https://example.com/avatar1.jpg',
      username: 'john_doe',
      bio: 'Passionate developer exploring new technologies.',
      preferredLanguages: 'JavaScript, Python, Java',
      showcasedAchievements: ['Code Master', 'Syntax Wizard'],
    },
    {
      id: '2',
      avatar: 'https://example.com/avatar2.jpg',
      username: 'jane_smith',
      bio: 'Full-stack developer with a love for design.',
      preferredLanguages: 'JavaScript, Ruby, CSS',
      showcasedAchievements: ['UI/UX Guru', 'Problem Solver'],
    },
    {
      id: '3',
      avatar: 'https://example.com/avatar3.jpg',
      username: 'dev_guru',
      bio: 'Enthusiastic about open-source contributions and community building.',
      preferredLanguages: 'Python, TypeScript, Go',
      showcasedAchievements: ['Open Source Hero', 'Community Builder'],
    },
    {
      id: '4',
      avatar: 'https://example.com/avatar4.jpg',
      username: 'coding_ninja',
      bio: 'Mastering the art of algorithms and data structures.',
      preferredLanguages: 'Java, C++, Python',
      showcasedAchievements: ['Algorithm Maestro', 'Data Structure Virtuoso'],
    },
    {
      id: '5',
      avatar: 'https://example.com/avatar5.jpg',
      username: 'tech_enthusiast',
      bio: 'Always excited to learn and share knowledge in the tech space.',
      preferredLanguages: 'JavaScript, Python, PHP',
      showcasedAchievements: ['Continuous Learner', 'Knowledge Sharer'],
    },
    {
      id: '6',
      avatar: 'https://example.com/avatar6.jpg',
      username: 'design_code',
      bio: 'Blending design and code to create delightful user experiences.',
      preferredLanguages: 'JavaScript, HTML, CSS',
      showcasedAchievements: ['Design-Coder Fusion', 'User Experience Wizard'],
    },
  ];

  return (
    <div className=''>
      <header>
        {/* Include your site header or navigation if needed */}
      </header>
      <main>
        <UserProfileList profiles={userProfiles} />
      </main>
      <footer>
        {/* Include your site footer if needed */}
      </footer>
    </div>
  );
};

export default UserProfilesPage;
