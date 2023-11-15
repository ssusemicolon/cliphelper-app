interface SignInResponse {
  type: 'Bearer';
  accessToken: string;
  refreshToken: string;
  userId: number;
}
