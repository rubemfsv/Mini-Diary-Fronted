/* eslint-disable camelcase */
export interface NaverProps {
  id?: string;
  user_id?: string;
  text: string;
}

export interface FormProps {
  title: string;
  naverData?: NaverProps;
  onSubmit(body: object): void;
}

export interface ResponseProps {
  id: string;
  user_id: string;
  text: string;
}

export interface AuthContextData {
  loged: boolean;
  handleAuth(value: boolean): void | null;
}

export interface NotificationProps {
  title: string;
  message: string;
}

export interface DeleteProps {
  id: string;
  handleDeleteNaver(id?: string | number): Promise<void>;
}
