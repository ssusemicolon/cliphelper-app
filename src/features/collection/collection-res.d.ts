interface CollectionList {
  collections: CollectionListItem[];
}

interface CollectionListItem {
  title: string;
  description: string;
  likeCount: number;
  user?: UserProfile;
}

interface CollectionDetail extends CollectionListItem {
  articles: ArticleListItem[];
}

type CollectionType = 'MY' | 'OTHER';
