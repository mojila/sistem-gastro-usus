"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const diseaseModel_1 = __importDefault(require("./../models/diseaseModel"));
const list_all_disease = function (req, res) {
    diseaseModel_1.default.find({}, function (err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
};
exports.list_all_disease = list_all_disease;
const create_a_disease = function (req, res) {
    let new_disease = new diseaseModel_1.default(req.body);
    new_disease.save(function (err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
};
exports.create_a_disease = create_a_disease;
const read_a_disease = function (req, res) {
    diseaseModel_1.default.findById(req.param.diseaseId, function (err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
};
exports.read_a_disease = read_a_disease;
const update_a_disease = function (req, res) {
    diseaseModel_1.default.findOneAndUpdate({ id: req.params.diseaseId }, req.body, { new: true }, function (err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
};
exports.update_a_disease = update_a_disease;
const delete_a_disease = function (req, res) {
    diseaseModel_1.default.remove({ id: req.param.diseaseId }, function (err) {
        if (err) {
            res.send(err);
        }
        res.json({
            message: 'Sub disease successfully deleted.'
        });
    });
};
exports.delete_a_disease = delete_a_disease;
//# sourceMappingURL=diseaseController.js.map