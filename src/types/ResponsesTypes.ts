type ServiceResponseErrorType = 'INVALID_DATA' | 'NOT_FOUND' | 'UNAUTHORIZED';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: { message: string },
};

export type ServiceResponseSucess<T> = {
  status: 'OK',
  data: T,
};

export type ServiceResponse<T> = ServiceResponseSucess<T> | ServiceResponseError;