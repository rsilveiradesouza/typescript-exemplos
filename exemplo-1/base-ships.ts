class Spacecraft {
    constructor(public propulsor: string) { }

    jumpIntoHyperspace(): void {
        console.log(`Entering hyperspace with ${this.propulsor}`);
    }
}

interface IContainership {
    cargoContainers: number;
}

export { Spacecraft, IContainership };