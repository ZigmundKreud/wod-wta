// Import Modules
import {DataLoader} from "./data.js";
import {WTA} from "./config.js";
import {WtaWerewolfSheet} from "./actor/werewolf-sheet.js";
import {preloadHandlebarsTemplates} from "./templates.js";

Hooks.once("init", async () => {
    console.debug("WTA Module Initialization...");
    game.wod.config.characterTemplates["werewolf"] = WTA.characterTemplates.werewolf;
    game.wod.config.characterTemplates["spirit"] = WTA.characterTemplates.spirit;

    // Register actor sheets
    Actors.registerSheet("wod", WtaWerewolfSheet, {
        makeDefault: true,
        label: "WTA.sheet.werewolf"
    });

    preloadHandlebarsTemplates();
});

Hooks.once("ready", async () => {

    // console.debug("Importing data");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "archetypes");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "auspices");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "backgrounds");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "breeds");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "deformities");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "derangements");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "equipment");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "fetishes");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "gifts");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "maneuvers");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "merits-flaws");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "rites");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "talens");
    // DataLoader.loadData("wod-wta", "/modules/wod-wta/data/json/fr", "tribes");

    console.info("WTA Module ready.");
});
