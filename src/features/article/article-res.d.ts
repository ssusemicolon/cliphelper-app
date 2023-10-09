interface ArticleList {
  articles: ArticleListItem[];
}

interface ArticleListItem {
  id: number;
  thumb: string;
  title: string;
  createdAt: Date;
  recentAccessTime: Date;
  tags: Tag[];
}

interface ArticleDetail extends ArticleListItem {
  url: string;
  content: string;
  questions: string;
}

interface Tag {
  id: number;
  title: string;
}
