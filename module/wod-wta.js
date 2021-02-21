// Import Modules
import {DataLoader} from "./data.js";

/**
 * Ready hook loads tables, and override's foundry's entity link functions to provide extension to pseudo entities
 */

Hooks.once("init", async () => {

    console.debug("Importing data");
//     DataLoader.loadData("archetypes");
//     DataLoader.loadData("auspices");
//     DataLoader.loadData("backgrounds");
//     DataLoader.loadData("breeds");
//     DataLoader.loadData("deformities");
//     DataLoader.loadData("derangements");
//     DataLoader.loadData("fetishes");
//     DataLoader.loadData("gifts");
//     DataLoader.loadData("merits-flaws");
//     DataLoader.loadData("rites");
//     DataLoader.loadData("talens");
//     DataLoader.loadData("tribes");

    console.info("WTA Module Initialized.");
});
