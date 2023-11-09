interface CollectionListItem {
  collectionId: 1;
  title: string;
  thumbnail?: string;
  description: string;
  articles: number[];
  articleCount: number;
  userId: number;
  user?: {
    username: string;
    thumb: string;
  };
  public: boolean;
}

interface CollectionDetail extends CollectionListItem {
  articles: ArticleListItem[];
}
