import {
  IAccessToken,
  IAuthRes,
  ILoginProps,
  IRefreshToken,
  IResetPasswordProps,
  ISetPasswordProps,
} from '@/types/types';

class AuthServiceApi {
  private BASE_URL = 'https://auth-qa.qencode.com/v1/auth';

  accessToken(data: IAccessToken): Promise<IAuthRes> {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/access-token`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.detail) {
          throw Error(data.detail);
        }
        return data;
      });
  }

  refreshToken(data: IRefreshToken): Promise<IAuthRes> {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/refresh-token`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.detail) {
          throw Error(data.detail);
        }
        return data;
      });
  }

  login({ data, signal }: ILoginProps): Promise<IAuthRes> {
    const options = {
      signal,
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/login`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.detail) {
          throw Error(data.detail);
        }
        return data;
      });
  }

  resetPassword(data: IResetPasswordProps): Promise<void> {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/password-reset`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.detail) {
          throw Error(data.detail);
        }
        return data;
      });
  }

  setPassword(data: ISetPasswordProps): Promise<void> {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${this.BASE_URL}/password-set`, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.detail) {
          throw Error(data.detail);
        }
        return data;
      });
  }
}

const authServiceApi = new AuthServiceApi();

export default authServiceApi;
