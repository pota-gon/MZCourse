/*:
 * @target MZ
 * @plugindesc 装飾品を増やすプラグイン
 * @author 自分のアカウント名
 * @help 装飾品を増やすプラグインです。
 * @url https://raw.githubusercontent.com/pota-gon/MZCourse/main/1/2-1-2/AddAccessory.js
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
        return slots;
    };
})();
