export class LoginData {
    #userName: string;
    #password: string;

    constructor() {
        this.#userName = '';
        this.#password = '';
    }

    public get userName(): string {
        return this.#userName;
    }
    public set userName(userName: string) {
        this.#userName = userName;
    }

    public get password(): string {
        return this.#password;
    }
    public set password(password: string) {
        this.#password = password;
    }
}