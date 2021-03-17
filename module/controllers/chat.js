import {WodChat} from "/systems/wod/module/controllers/chat.js";

export class WtaChat {
    static metamorphosisNotification(actor, key){
        if(!game.settings.get("wod", "disableScoreUpdateNotifications")){
            const label = game.i18n.localize(`WOD.forms.${key}`);
            // WodChat.message(actor, `<h2>${game.i18n.localize("WOD.notifications.metamorphosis")}`, `<strong>${label}</strong></h2>`, CONFIG.sounds.combat);
            WodChat.message(actor, `<h2>${game.i18n.localize("WOD.notifications.metamorphosis")}`, `<strong>${label}</strong></h2>`);
        }
    }
}