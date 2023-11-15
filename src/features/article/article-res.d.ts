interface ArticleListItem {
  articleId: number;
  url?: string;
  fileUrl?: string;
  thumbnail?: string;
  title: string;
  description: string;
  memo: string;
  createdAt: string;
  recentAccessTime: string;
  tags: string[];
  userId: number;
}

interface ArticleDetail extends ArticleListItem {
  url: string;
  questions?: string;
}
