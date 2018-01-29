import { Spacecraft, IContainership } from "./base-ships";
import { MillenniumFalcon } from "./starfighter";

import * as _ from "lodash";
console.log(_.pad("typescript Examples", 40, "="));

let ship: Spacecraft = new Spacecraft("hyperdrive");
ship.jumpIntoHyperspace();

let falcon: MillenniumFalcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace();

let goodForTheJob: (ship: IContainership) => boolean = (ship: IContainership) => ship.cargoContainers > 2;
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? "yes" : "no"}`);