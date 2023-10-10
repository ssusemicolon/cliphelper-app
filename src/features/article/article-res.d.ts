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
  tags: TagItem[];
}

interface ArticleDetail extends ArticleListItem {
  url: string;
  content: string;
  questions: string;
}

interface TagItem {
  id: number;
  title: string;
}
