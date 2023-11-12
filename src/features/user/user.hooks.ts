import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  appendAlarm,
  enableAlarm,
  fetchUserAlarm,
  fetchUserProfile,
  modifyAlarm,
  modifyUsername,
  removeAlarm,
} from './user.api';
import { collectionKeys } from '../collection/collection.hooks';

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
export const useUsernameModifyMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(modifyUsername, {
    onSuccess: () => {
      queryClient.invalidateQueries(userKeys.profile());
      queryClient.invalidateQueries(collectionKeys.list());
    },
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
  });
};

/** append alarm */
export const useAppendAlarmMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(appendAlarm, {
    onSuccess: () => {
      queryClient.invalidateQueries(userKeys.alarm());
    },
  });
};

/** remove alarm */
export const useRemoveAlarmMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(removeAlarm, {
    onSuccess: () => {
      queryClient.invalidateQueries(userKeys.alarm());
    },
  });
};

/** modify alarm */
export const useModifyAlarmMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(modifyAlarm, {
    onSuccess: () => {
      queryClient.invalidateQueries(userKeys.alarm());
    },
  });
};
