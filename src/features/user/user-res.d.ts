interface UserProfile {
  userId: 1;
  email: string;
  username: string;
  picture: null;
  enableNotifications: false;
  articleCount: number;
  collectionCount: number;
  followerCount: number;
}

interface AlarmListItem {
  alarmTimeId: number;
  time: '08:30';
}
