"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const symptomsController_1 = require("./../controllers/symptomsController");
function default_1(app) {
    app.get('/symptoms', symptomsController_1.list_all_symptoms)
        .post('/symptoms', symptomsController_1.create_a_symptoms);
    app.get('/symptoms/:symptomsId', symptomsController_1.read_a_symptoms)
        .put('/symptoms/:symptomsId', symptomsController_1.update_a_symptoms)
        .delete('/symptoms/:symptomsId', symptomsController_1.delete_a_symptoms);
}
exports.default = default_1;
;
//# sourceMappingURL=symptomsRouter.js.map