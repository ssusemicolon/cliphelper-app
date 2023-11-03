interface ArticleList {
  articles: ArticleListItem[];
}

interface ArticleListItem {
  id: number;
  thumb?: string;
  title: string;
  content: string;
  createdAt: string;
  recentAccessTime: string;
  tags: string[];
}

interface ArticleDetail extends ArticleListItem {
  url: string;
  questions?: string;
}
