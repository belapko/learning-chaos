export interface User {
	id: string;
	username: string;
}

export interface UserSchema {
	authData?: User; // if undefined User is not authorized else authorized
}
