/*:
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

    Window_Status.prototype.maxEquipmentLines = function() {
        return 7;
    };
    Window_Status.prototype.drawBlock3 = function(y) {
        this.drawParameters(48, y);
        this.drawEquipments(432, y - 18);
    };
})();
