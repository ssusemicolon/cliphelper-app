interface CollectionListItem {
  collectionId: 1;
  title: string;
  thumbnail?: string;
  description: string;
  articles?: ArticleListItem[];
  articleCount: number;
  userId: number;
  user?: UserProfile;
  isPublic: boolean;
  isBookmarked: boolean;
}

interface CollectionDetail extends CollectionListItem {
  articles: ArticleListItem[];
}
