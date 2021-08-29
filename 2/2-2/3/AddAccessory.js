/*:
 * @target MZ
 * @plugindesc 装飾品を増やすプラグイン
 * @author 自分のアカウント名
 * @help 装飾品を増やすプラグインです。
 * @url 
 */
(() => {
    'use strict';

    Game_Actor.prototype.equipSlots = function() {
        const slots = [];
        for (let i = 1; i < $dataSystem.equipTypes.length; i++) {
            slots.push(i);
        }
        if (slots.length >= 2 && this.isDualWield()) {
            slots[1] = 1;
        }
        slots.push(5);
        slots.push(5);
        return slots;
    };

    // 追加
    const _Window_StatusEquip_initialize = Window_StatusEquip.prototype.initialize;
    Window_StatusEquip.prototype.initialize = function(rect) {
        _Window_StatusEquip_initialize.apply(this, arguments);
        this.activate();
    };
})();
