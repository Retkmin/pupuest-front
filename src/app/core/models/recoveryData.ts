export class RecoveryData {
    #user: string;

    constructor() {
        this.#user = '';
    }

    public get user(): string {
        return this.#user;
    }
    public set user(user: string) {
        this.#user = user;
    }
}