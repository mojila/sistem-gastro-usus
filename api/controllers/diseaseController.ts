import mongoose from 'mongoose';
import Disease from './../models/diseaseModel';

const list_all_disease = function(req: any, res: any) {
    Disease.find({}, function(err, item) {
        if (err) {
            res.send(err);
        }
        
        res.json(item);
    });
};

const create_a_disease = function(req: any, res: any) {
    let new_disease = new Disease(req.body);
    
    new_disease.save(function(err, item) {
        if (err) {
            res.send(err);
        }

        res.json(item);
    });
};

const read_a_disease = function(req: any, res: any) {
    Disease.findById(req.param.diseaseId, function(err, item) {
        if (err) {
            res.send(err);
        }

        res.json(item);
    });
};

const update_a_disease = function(req: any, res: any) {
    Disease.findOneAndUpdate({ id: req.params.diseaseId }, req.body, { new: true }, function(err, item) {
        if (err) {
            res.send(err);
        }

        res.json(item);
    });
};

const delete_a_disease = function(req: any, res: any) {
    Disease.remove({ id: req.param.diseaseId }, function(err) {
        if (err) {
            res.send(err);
        }

        res.json({
            message: 'Sub disease successfully deleted.'
        });
    });
};

export {
    list_all_disease,
    create_a_disease,
    read_a_disease,
    update_a_disease,
    delete_a_disease
};