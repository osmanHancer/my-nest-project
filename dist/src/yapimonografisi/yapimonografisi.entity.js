"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YapiMonografisiEntity = void 0;
const typeorm_1 = require("typeorm");
let YapiMonografisiEntity = class YapiMonografisiEntity {
};
exports.YapiMonografisiEntity = YapiMonografisiEntity;
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], YapiMonografisiEntity.prototype, "yapi_html_1", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], YapiMonografisiEntity.prototype, "yapi_html_2", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], YapiMonografisiEntity.prototype, "yapi_html_3", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], YapiMonografisiEntity.prototype, "yapi_html_4", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], YapiMonografisiEntity.prototype, "yapi_html_5", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], YapiMonografisiEntity.prototype, "yapi_html_6", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], YapiMonografisiEntity.prototype, "lokasyonId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapiMonografisiEntity.prototype, "baslik", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapiMonografisiEntity.prototype, "alt_baslik", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapiMonografisiEntity.prototype, "enlem", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapiMonografisiEntity.prototype, "boylam", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapiMonografisiEntity.prototype, "yuzyil", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], YapiMonografisiEntity.prototype, "yapi_ismi", void 0);
exports.YapiMonografisiEntity = YapiMonografisiEntity = __decorate([
    (0, typeorm_1.Entity)('yapimonografisi')
], YapiMonografisiEntity);
//# sourceMappingURL=yapimonografisi.entity.js.map