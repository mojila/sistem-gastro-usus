"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subSymptomsController_1 = require("./../controllers/subSymptomsController");
function default_1(app) {
    app.get('/sub_symptoms', subSymptomsController_1.list_all_sub_symptoms)
        .post('/sub_symptoms', subSymptomsController_1.create_a_sub_symptoms);
    app.get('/sub_symptoms/:subSymptomsId', subSymptomsController_1.read_a_sub_symptoms)
        .put('/sub_symptoms/:subSymptomsId', subSymptomsController_1.update_a_sub_symptoms)
        .delete('/sub_symptoms/:subSymptomsId', subSymptomsController_1.delete_a_sub_symptoms);
}
exports.default = default_1;
;
//# sourceMappingURL=subSymptomsRouter.js.map