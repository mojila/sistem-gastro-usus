"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subSymptomsModel_1 = __importDefault(require("./../models/subSymptomsModel"));
const list_all_sub_symptoms = function (req, res) {
    subSymptomsModel_1.default.find({}, function (err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
};
exports.list_all_sub_symptoms = list_all_sub_symptoms;
const create_a_sub_symptoms = function (req, res) {
    let new_sub_symptoms = new subSymptomsModel_1.default(req.body);
    new_sub_symptoms.save(function (err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
};
exports.create_a_sub_symptoms = create_a_sub_symptoms;
const read_a_sub_symptoms = function (req, res) {
    subSymptomsModel_1.default.findById(req.param.subSymptomsId, function (err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
};
exports.read_a_sub_symptoms = read_a_sub_symptoms;
const update_a_sub_symptoms = function (req, res) {
    subSymptomsModel_1.default.findOneAndUpdate({ id: req.params.subSymptomsId }, req.body, { new: true }, function (err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
};
exports.update_a_sub_symptoms = update_a_sub_symptoms;
const delete_a_sub_symptoms = function (req, res) {
    subSymptomsModel_1.default.remove({ id: req.param.subSymptomsId }, function (err) {
        if (err) {
            res.send(err);
        }
        res.json({
            message: 'Sub Symptoms successfully deleted.'
        });
    });
};
exports.delete_a_sub_symptoms = delete_a_sub_symptoms;
//# sourceMappingURL=subSymptomsController.js.map