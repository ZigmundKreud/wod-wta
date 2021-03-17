export class WtaMetamorphosis {

    static stats(actorData){
        console.log(actorData.attributes);
        return {
            str : actorData.attributes.physical.scores.find(s => s.key === "str"),
            dex : actorData.attributes.physical.scores.find(s => s.key === "dex"),
            stam : actorData.attributes.physical.scores.find(s => s.key === "stam"),
            cha : actorData.attributes.social.scores.find(s => s.key === "cha"),
            man : actorData.attributes.social.scores.find(s => s.key === "man"),
            app : actorData.attributes.social.scores.find(s => s.key === "app"),
            per : actorData.attributes.mental.scores.find(s => s.key === "per"),
            int : actorData.attributes.mental.scores.find(s => s.key === "int"),
            wits : actorData.attributes.mental.scores.find(s => s.key === "wits")
        }
    }

    static homid(actorData){
        let stats = this.stats(actorData);
        for(let stat of Object.values(stats)) { stat.temp = null; }

        actorData.resources.forms.homid.active = true;
        actorData.resources.forms.glabro.active = false;
        actorData.resources.forms.crinos.active = false;
        actorData.resources.forms.hispo.active = false;
        actorData.resources.forms.lupus.active = false;
        return actorData
    }
    static glabro(actorData){
        let stats = this.stats(actorData);
        for(let stat of Object.values(stats)) { stat.temp = null; }

        stats.str.temp = stats.str.value + 2;
        stats.stam.temp = stats.stam.value + 2;
        stats.man.temp = stats.man.value - 2;
        stats.app.temp = stats.app.value -1;

        actorData.resources.forms.homid.active = false;
        actorData.resources.forms.glabro.active = true;
        actorData.resources.forms.crinos.active = false;
        actorData.resources.forms.hispo.active = false;
        actorData.resources.forms.lupus.active = false;
        return actorData
    }
    static crinos(actorData){
        let stats = this.stats(actorData);
        for(let stat of Object.values(stats)) { stat.temp = null; }

        stats.str.temp = stats.str.value + 4;
        stats.dex.temp = stats.dex.value + 1;
        stats.stam.temp = stats.stam.value + 3;
        stats.man.temp = stats.man.value - 3;
        stats.app.temp = 0;

        actorData.resources.forms.homid.active = false;
        actorData.resources.forms.glabro.active = false;
        actorData.resources.forms.crinos.active = true;
        actorData.resources.forms.hispo.active = false;
        actorData.resources.forms.lupus.active = false;
        return actorData
    }
    static hispo(actorData){
        let stats = this.stats(actorData);
        for(let stat of Object.values(stats)) { stat.temp = null; }

        stats.str.temp = stats.str.value + 3;
        stats.dex.temp = stats.dex.value + 2;
        stats.stam.temp = stats.stam.value + 3;
        stats.man.temp = stats.man.value - 3;

        actorData.resources.forms.homid.active = false;
        actorData.resources.forms.glabro.active = false;
        actorData.resources.forms.crinos.active = false;
        actorData.resources.forms.hispo.active = true;
        actorData.resources.forms.lupus.active = false;
        return actorData
    }
    static lupus(actorData){
        let stats = this.stats(actorData);
        for(let stat of Object.values(stats)) { stat.temp = null; }

        stats.str.temp = stats.str.value + 1;
        stats.dex.temp = stats.dex.value + 2;
        stats.stam.temp = stats.stam.value + 2;
        stats.man.temp = stats.man.value - 3;

        actorData.resources.forms.homid.active = false;
        actorData.resources.forms.glabro.active = false;
        actorData.resources.forms.crinos.active = false;
        actorData.resources.forms.hispo.active = false;
        actorData.resources.forms.lupus.active = true;
        return actorData
    }
}
