export class GeneralAccountData {
    #aksCount: string;
    #bidsCount: string;
    #winRatio: number;
    #rAverage: number;
    #bestOperation: number;
    #worseOperation: number;
    #maxDrawdown: number;
    #risk: number;

    constructor() {
        this.#aksCount = '0 / 0';
        this.#bidsCount = '0 / 0';
        this.#winRatio = 0;
        this.#rAverage = 0;
        this.#bestOperation = 0;
        this.#worseOperation = 0;
        this.#maxDrawdown = 0;
        this.#risk = 0;

      }

    public get aksCount(): string {
        return this.#aksCount;
    }
    public set aksCount(aksCount: string) {
        this.#aksCount = aksCount;
    }
    public get bidsCount(): string {
        return this.#bidsCount;
    }
    public set bidsCount(bidsCount: string) {
        this.#bidsCount = bidsCount;
    }
    public get winRatio(): number {
        return this.#winRatio;
    }
    public set winRatio(winRatio: number) {
        this.#winRatio = winRatio;
    }
    public get rAverage(): number {
        return this.#rAverage;
    }
    public set rAverage(rAverage: number) {
        this.#rAverage = rAverage;
    }
    public get bestOperation(): number {
        return this.#bestOperation;
    }
    public set bestOperation(bestOperation: number) {
        this.#bestOperation = bestOperation;
    }
    public get worseOperation(): number {
        return this.#worseOperation;
    }
    public set worseOperation(worseOperation: number) {
        this.#worseOperation = worseOperation;
    }
    public get maxDrawdown(): number {
        return this.#maxDrawdown;
    }
    public set maxDrawdown(maxDrawdown: number) {
        this.#maxDrawdown = maxDrawdown;
    }
    public get risk(): number {
        return this.#risk;
    }
    public set risk(risk: number) {
        this.#risk = risk;
    }

}