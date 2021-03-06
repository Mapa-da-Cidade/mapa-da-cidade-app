import { User } from '../models/user/user.model';

export class Security {

    public static set(user: User, token: string) {
        const data = JSON.stringify(user);
        localStorage.setItem('user', btoa(data));
        localStorage.setItem('token', token);
    }

    public static setUser(user: User) {
        const data = JSON.stringify(user);
        localStorage.setItem('user', btoa(data));
    }

    public static setToken(token: string) {
        localStorage.setItem('token', token);
    }

    public static getUser(): User {
        const data = localStorage.getItem('user');
        if (data)
            return JSON.parse(atob(data));
        else
            return null;
    }

    public static getToken(): string {
        const data = localStorage.getItem('token');
        if (data)
            return data;
        else
            return null;
    }

    public static hasToken(): boolean {
        if (this.getToken())
            return true;
        else
            return false;
    }

    public static clear() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }


}
