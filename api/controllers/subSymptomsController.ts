import mongoose from 'mongoose';
import SubSymptoms from './../models/subSymptomsModel';

const list_all_sub_symptoms = function(req: any, res: any) {
    SubSymptoms.find({}, function(err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
};

const create_a_sub_symptoms = function(req: any, res: any) {
    let new_sub_symptoms = new SubSymptoms(req.body);
    
    new_sub_symptoms.save(function(err, item) {
        if (err) {
            res.send(err);
        }

        res.json(item);
    });
};

const read_a_sub_symptoms = function(req: any, res: any) {
    SubSymptoms.findById(req.param.subSymptomsId, function(err, item) {
        if (err) {
            res.send(err);
        }

        res.json(item);
    });
};

const update_a_sub_symptoms = function(req: any, res: any) {
    SubSymptoms.findOneAndUpdate({ id: req.params.subSymptomsId }, req.body, { new: true }, function(err, item) {
        if (err) {
            res.send(err);
        }

        res.json(item);
    });
};

const delete_a_sub_symptoms = function(req: any, res: any) {
    SubSymptoms.remove({ id: req.param.subSymptomsId }, function(err) {
        if (err) {
            res.send(err);
        }

        res.json({
            message: 'Sub Symptoms successfully deleted.'
        });
    });
};

export {
    list_all_sub_symptoms,
    create_a_sub_symptoms,
    read_a_sub_symptoms,
    update_a_sub_symptoms,
    delete_a_sub_symptoms
};