"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const symptomsModel_1 = __importDefault(require("./../models/symptomsModel"));
const list_all_symptoms = function (req, res) {
    symptomsModel_1.default.find({}, function (err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
};
exports.list_all_symptoms = list_all_symptoms;
const create_a_symptoms = function (req, res) {
    let new_symptoms = new symptomsModel_1.default(req.body);
    new_symptoms.save(function (err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
};
exports.create_a_symptoms = create_a_symptoms;
const read_a_symptoms = function (req, res) {
    symptomsModel_1.default.findById(req.param.symptomsId, function (err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
};
exports.read_a_symptoms = read_a_symptoms;
const update_a_symptoms = function (req, res) {
    symptomsModel_1.default.findOneAndUpdate({ id: req.param.symptomsId }, req.body, { new: true }, function (err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
};
exports.update_a_symptoms = update_a_symptoms;
const delete_a_symptoms = function (req, res) {
    symptomsModel_1.default.remove({ id: req.param.symptomsId }, function (err) {
        if (err) {
            res.send(err);
        }
        res.json({
            message: 'Symptoms successfully deleted.'
        });
    });
};
exports.delete_a_symptoms = delete_a_symptoms;
//# sourceMappingURL=symptomsController.js.map