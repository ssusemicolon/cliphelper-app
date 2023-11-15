import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { errorHandler } from '~/utils/errorHandler';
import { collectionKeys } from '../collection/collection.hooks';
import {
  appendAlarm,
  enableAlarm,
  fetchUserAlarm,
  fetchUserProfile,
  modifyAlarm,
  modifyProfile,
  removeAlarm,
} from './user.api';

export const userKeys = {
  all: 'user',
  profile: () => [...userKeys.all, 'profile'],
  alarm: () => [...userKeys.all, 'alarm'],
};

/** fetch user profile */
export const useUserProfile = () => {
  return useQuery(userKeys.profile(), () => fetchUserProfile());
};

/** modify user name */
export const useProfileModifyMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(modifyProfile, {
    onSuccess: () => {
      queryClient.invalidateQueries(userKeys.profile());
      queryClient.invalidateQueries(collectionKeys.list());
    },
    onError: errorHandler,
  });
};

/** fetch alarm list */
export const useAlarm = () => {
  return useQuery(userKeys.alarm(), () => fetchUserAlarm());
};

/** enable alarm */
export const useEnableAlarmMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(enableAlarm, {
    onSuccess: () => {
      queryClient.invalidateQueries(userKeys.profile());
    },
    onError: errorHandler,
  });
};

/** append alarm */
export const useAppendAlarmMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(appendAlarm, {
    onSuccess: () => {
      queryClient.invalidateQueries(userKeys.alarm());
    },
    onError: errorHandler,
  });
};

/** remove alarm */
export const useRemoveAlarmMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(removeAlarm, {
    onSuccess: () => {
      queryClient.invalidateQueries(userKeys.alarm());
    },
    onError: errorHandler,
  });
};

/** modify alarm */
export const useModifyAlarmMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(modifyAlarm, {
    onSuccess: () => {
      queryClient.invalidateQueries(userKeys.alarm());
    },
    onError: errorHandler,
  });
};
