"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const diseaseController_1 = require("./../controllers/diseaseController");
function default_1(app) {
    app.get('/disease', diseaseController_1.list_all_disease)
        .post('/disease', diseaseController_1.create_a_disease);
    app.get('/disease/:diseaseId', diseaseController_1.read_a_disease)
        .put('/disease/:diseaseId', diseaseController_1.update_a_disease)
        .delete('/disease/:diseaseId', diseaseController_1.delete_a_disease);
}
exports.default = default_1;
;
//# sourceMappingURL=diseaseRouter.js.map