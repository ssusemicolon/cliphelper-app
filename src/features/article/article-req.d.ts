interface ArticleAppendForm {
  articleId?: number;
  url?: string;
  title: string;
  thumbnail?: string;
  description?: string;
  memo: string;
  tags: string[];
  file?: File;
}

interface TagAppendForm {
  title: string;
}
