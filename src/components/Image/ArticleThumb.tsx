import { Image } from '@gluestack-ui/themed';

const ArticleThumb = ({ src }: { src: string }) => {
  return (
    <Image
      source={{ uri: src }}
      alt="blog thumbnail image"
      minWidth={'$full'}
    />
  );
};

export default ArticleThumb;
