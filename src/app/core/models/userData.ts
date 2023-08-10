export class UserData {
    #key: string;
    #value: unknown;

    constructor() {
        this.#key = '';
        this.#value = '';
      }

    public get key(): string {
        return this.#key;
    }
    public set key(key: string) {
        this.#key = key;
    }
    public get value(): unknown {
        return this.#value;
    }
    public set value(value: unknown) {
        this.#value = value;
    }

}