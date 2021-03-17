/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */

import {WodActorSheet} from "/systems/wod/module/actor/actor-sheet.js";
import {WtaChat} from "../controllers/chat.js";
import {WtaMetamorphosis} from "../controllers/metamorphosis.js";

export class WtaWerewolfSheet extends WodActorSheet {

    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["wod", "sheet", "actor", "werewolf"],
            template: "modules/wod-wta/templates/actor/werewolf-sheet.hbs",
            width: 850,
            height: 600,
            tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "main"}]
        });
    }


    /* -------------------------------------------- */

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);

        html.find('.metamorphosis').click(this._onToggleMetamorphosis.bind(this));
        html.find('.tb-toggle-link').click(ev => {
            ev.preventDefault();
            console.log(ev);
            $("#tb-menu").slideToggle('fast');
        });
    }


    /* -------------------------------------------- */
    _onToggleMetamorphosis(event){
        event.preventDefault();
        const btn = $(event.currentTarget);
        const id = btn.data("itemId");
        let actorData = this.getData().actor.data;
        if(id === "homid") actorData = WtaMetamorphosis.homid(actorData);
        else if(id === "glabro") actorData = WtaMetamorphosis.glabro(actorData);
        else if(id === "crinos") actorData = WtaMetamorphosis.crinos(actorData);
        else if(id === "hispo")  actorData = WtaMetamorphosis.hispo(actorData);
        else if(id === "lupus")  actorData = WtaMetamorphosis.lupus(actorData);

        WtaChat.metamorphosisNotification(this.actor, id);
        return this.actor.update(actorData);
    }
    /* -------------------------------------------- */

    /** @override */
    getData(options){
        const data = super.getData(options);
        console.log(data);
        data.forms = data.data.resources.forms;
        data.breed = data.items.find(item => item.type === "breed");
        data.auspice = data.items.find(item => item.type === "auspice");
        data.tribe = data.items.find(item => item.type === "tribe");
        data.gifts = data.items.filter(item => item.type === "gifts");
        data.rites = data.items.filter(item => item.type === "rite");

        return data;
    }
}
