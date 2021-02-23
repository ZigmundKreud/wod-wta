// Import Modules
import {DataLoader} from "./data.js";

/**
 * Ready hook loads tables, and override's foundry's entity link functions to provide extension to pseudo entities
 */

Hooks.once("ready", async () => {

    // console.debug("Importing data");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "archetypes");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "auspices");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "backgrounds");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "breeds");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "deformities");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "derangements");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "fetishes");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "gifts");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "merits-flaws");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "rites");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "talens");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "tribes");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "equipment");

    console.info("WTA Module Initialized.");
});
