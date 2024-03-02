export interface User {
    id: number;
    username: string;
}

export interface UserSchema {
    authData?: User;
    _initted: boolean;
}
