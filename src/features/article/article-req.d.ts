interface ArticleAppendForm {
  url: string;
  content: string;
  tags: TagAppendForm[];
}

interface TagAppendForm {
  title: string;
}
