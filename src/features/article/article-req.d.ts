interface ArticleAppendForm {
  url: string;
  title: string;
  description?: string;
  memo: string;
  tags: string[];
}

interface TagAppendForm {
  title: string;
}
