export class UserData {
    #userName: string;
    #rol: string;

    constructor() {
        this.#userName = '';
        this.#rol = '';
      }

    public get userName(): string {
        return this.#userName;
    }
    public set userName(userName: string) {
        this.#userName = userName;
    }
    public get rol(): string {
        return this.#rol;
    }
    public set rol(rol: string) {
        this.#rol = rol;
    }

}