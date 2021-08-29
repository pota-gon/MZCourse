/*:
 * @target MZ
 * @plugindesc 装飾品を増やすプラグイン
 * @author 自分のアカウント名
 * @help 装飾品を増やすプラグインです。
 * @url 
 */
(() => {
    'use strict';

    const _Game_Actor_equipSlots = Game_Actor.prototype.equipSlots;
    Game_Actor.prototype.equipSlots = function() {
        const slots = _Game_Actor_equipSlots.apply(this, arguments);
        slots.push(5);
        slots.push(5);
        return slots;
    };

    const _Window_StatusEquip_initialize = Window_StatusEquip.prototype.initialize;
    Window_StatusEquip.prototype.initialize = function(rect) {
        _Window_StatusEquip_initialize.apply(this, arguments);
        this.activate();
    };

    // 追加
    const _Game_Actor_initEquips = Game_Actor.prototype.initEquips;
    Game_Actor.prototype.initEquips = function(equips) {
        _Game_Actor_initEquips.apply(this, arguments);
        const slots = this.equipSlots();
        for (let i = 0; i < slots.length; i++) {
            let meta = this.actor().meta['装備' + (i + 1)];
            if (meta) {
                this._equips[i].setEquip(slots[i] === 1, parseInt(meta));
            }
        }
    };
})();
