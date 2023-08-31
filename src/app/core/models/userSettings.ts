export class UserSettings {
    #theme: string;
    #language: string;
    #currency: string;
    #role: string;

    constructor() {
        this.#theme = '';
        this.#language = '';
        this.#currency = '';
        this.#role = '';
    }

    public get theme(): string {
        return this.#theme;
    }
    public set theme(value: string) {
        this.#theme = value;
    }

    public get language(): string {
        return this.#language;
    }
    public set language(value: string) {
        this.#language = value;
    }

    public get currency(): string {
        return this.#currency;
    }
    public set currency(value: string) {
        this.#currency = value;
    }

    public get role(): string {
        return this.#role;
    }
    public set role(value: string) {
        this.#role = value;
    }

    public toJSON(): any {
        return {
          theme: this.theme,
          language: this.language,
          currency: this.currency,
          role: this.role
        };
      }
}