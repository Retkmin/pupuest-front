export class Asset {
    #name: string;
    #operationCount: number;
    #balanceAccount: number;
    #state: number;

    constructor() {
        this.#name = '';
        this.#operationCount = 0;
        this.#balanceAccount = 0;
        this.#state = 0;
      }

    public get name(): string {
        return this.#name;
    }
    public set name(name: string) {
        this.#name = name;
    }
    public get operationCount(): number {
        return this.#operationCount;
    }
    public set operationCount(operationCount: number) {
        this.#operationCount = operationCount;
    }
    public get balanceAccount(): number {
        return this.#balanceAccount;
    }
    public set balanceAccount(balanceAccount: number) {
        this.#balanceAccount = balanceAccount;
    }
    public get state(): number {
        return this.#state;
    }
    public set state(state: number) {
        this.#state = state;
    }

}