import { 
    list_all_disease,
    create_a_disease,
    read_a_disease,
    update_a_disease,
    delete_a_disease
} from './../controllers/diseaseController';

export default function(app: any) {
    app.get('/disease', list_all_disease)
        .post('/disease', create_a_disease);

    app.get('/disease/:diseaseId', read_a_disease)
        .put('/disease/:diseaseId', update_a_disease)
        .delete('/disease/:diseaseId', delete_a_disease);
};