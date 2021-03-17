/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {

    // Define template paths to load
    const templatePaths = [
        "modules/wod-wta/templates/actor/werewolf-sheet.hbs",
        "modules/wod-wta/templates/actor/parts/werewolf-details.hbs",
        "modules/wod-wta/templates/actor/parts/werewolf-toolbar.hbs",
        "modules/wod-wta/templates/actor/parts/werewolf-main.hbs"
    ];

    // Load the template parts
    return loadTemplates(templatePaths);
};
