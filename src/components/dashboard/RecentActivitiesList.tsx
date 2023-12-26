// components/dashboard/RecentActivitiesList.tsx
import React from 'react';

interface RecentActivity {
  id: number;
  type: string;
  details: string;
}

interface RecentActivitiesListProps {
  activities: RecentActivity[];
}

const RecentActivitiesList: React.FC<RecentActivitiesListProps> = ({ activities }) => {
  return (
    <ul className="list-none">
      {activities.map((activity) => (
        <li key={activity.id} className="mb-2">
          <span className="font-semibold">{activity.type}:</span> {activity.details}
        </li>
      ))}
    </ul>
  );
};

export default RecentActivitiesList;
