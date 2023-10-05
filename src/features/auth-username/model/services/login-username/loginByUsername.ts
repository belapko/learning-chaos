import { User } from '@/entities/user';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface LoginByUsernameProps {
	username: string;
	password: string;
}

// third generic can be used to override what thunkAPI returns, for example the error comes as an object with error code and message or just a string
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
	'login/loginByUsername',
	async ({ username, password }, thunkAPI) => {
		try {
			const response = await axios.post<User>('http://localhost:8000/login', { username, password });

			if (!response.data) {
				throw new Error();
			}

			return response.data;
		} catch (e) {
			console.log(e);
			return thunkAPI.rejectWithValue('error');
		}
	}
);
