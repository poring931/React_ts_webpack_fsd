import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginstate = (state: StateSchema) => state.loginForm;
