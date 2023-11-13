import { jwtDecode } from 'jwt-decode';

export const revealUserId = (accessToken: string) => {
  const decoded: any = jwtDecode(accessToken);
  return Number(decoded.memberId) || 0;

  //   const decodedObject = JSON.parse(decoded + '');
  //   console.log('decoded obj: ', decodedObject);
  //   return decodedObject.MemberId;
};
