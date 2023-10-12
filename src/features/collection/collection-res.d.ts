interface CollectionList {
  collections: CollectionListItem[];
}

interface CollectionListItem {
  id: number;
  title: string;
  description: string;
  likeCount: number;
  user?: UserProfile;
  isPublic: boolean;
}

interface CollectionDetail extends CollectionListItem {
  articles: ArticleListItem[];
}

type CollectionType = 'MY' | 'OTHER';
