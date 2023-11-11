interface UserProfile {
  userId: 1;
  email: string;
  username: string;
  picture?: string;
  enableNotifications: false;
  articleCount: number;
  collectionCount: number;
  followerCount: number;
}

interface AlarmListItem {
  alarmTimeId: number;
  time: '08:30';
}
