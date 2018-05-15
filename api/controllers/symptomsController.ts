import mongoose from 'mongoose';
import Symptoms from './../models/symptomsModel';

const list_all_symptoms = function(req: any, res: any) {
    Symptoms.find({}, function(err, item) {
        if (err) {
            res.send(err);
        }
        res.json(item);
    });
};

const create_a_symptoms = function(req: any, res: any) {
    let new_symptoms = new Symptoms(req.body);
    
    new_symptoms.save(function(err, item) {
        if (err) {
            res.send(err);
        }

        res.json(item);
    });
};

const read_a_symptoms = function(req: any, res: any) {
    Symptoms.findById(req.param.symptomsId, function(err, item) {
        if (err) {
            res.send(err);
        }

        res.json(item);
    });
};

const update_a_symptoms = function(req: any, res: any) {
    Symptoms.findOneAndUpdate({ id: req.param.symptomsId }, req.body, { new: true }, function(err, item) {
        if (err) {
            res.send(err);
        }

        res.json(item);
    });
};

const delete_a_symptoms = function(req: any, res: any) {
    Symptoms.remove({ id: req.param.symptomsId }, function(err) {
        if (err) {
            res.send(err);
        }

        res.json({
            message: 'Symptoms successfully deleted.'
        });
    });
};

export {
    list_all_symptoms,
    create_a_symptoms,
    read_a_symptoms,
    update_a_symptoms,
    delete_a_symptoms
};