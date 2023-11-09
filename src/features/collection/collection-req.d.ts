interface CollectionAppendForm {
  title: string;
  description: string;
  isPublic: boolean;
  articles?: number[];
}

interface CollectionModifyForm {
  title: string;
  description: string;
  isPublic: boolean;
}
