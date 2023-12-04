import { View } from '@gluestack-ui/themed';
import {
  useItemErrorListener,
  useItemFinishListener,
  useItemStartListener,
} from '@rpldy/native-uploady';
import { ReactNode, useCallback } from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

export type FileType = {
  name?: string | null;
  type?: string | null;
  uri: string;
};

type UploadHelperProp = {
  children?: ReactNode;
  onPickFile?: (file: FileType[]) => void;
  onChangeFile?: (uri: string) => void;
};

export const UploadHelper = ({
  children,
  onPickFile,
  onChangeFile,
}: UploadHelperProp) => {
  //   const uploadyContext = useContext(UploadyContext);

  useItemFinishListener((item) => {
    const response = JSON.parse(item.uploadResponse.data);
    console.log(`item ${item.id} finished uploading, response was: `, response);
    onChangeFile?.(response.url);
  });

  useItemErrorListener((item) => {
    console.log(`item ${item.id} upload error !!!! `, item);
  });

  useItemStartListener((item) => {
    console.log(`item ${item.id} starting to upload,name = ${item.file.name}`);
  });

  const pickFile = useCallback(async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
      });

      console.log('res: ', res);
      const { name, type, uri } = res;

      onPickFile?.([
        {
          name,
          type,
          uri: Platform.OS === 'android' ? uri : uri.replace('file://', ''),
        },
      ]);

      // const data = new FormData();
      // data.append('picture', {
      //   name,
      //   type,
      //   uri: Platform.OS === 'android' ? uri : uri.replace('file://', ''),
      // });

      // await authAxios.patch('/users/picture', data, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });

      //   uploadyContext.upload(res as unknown as any);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(
          'User cancelled the picker, exit any dialogs or menus and move on',
        );
      } else {
        throw err;
      }
    }
  }, [onPickFile]);

  return (
    <View>
      <TouchableOpacity onPress={pickFile}>{children}</TouchableOpacity>
    </View>
  );
};
