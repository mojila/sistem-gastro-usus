import { 
    list_all_symptoms,
    create_a_symptoms,
    read_a_symptoms,
    update_a_symptoms,
    delete_a_symptoms
} from './../controllers/symptomsController';

export default function(app: any) {
    app.get('/symptoms', list_all_symptoms)
        .post('/symptoms', create_a_symptoms);

    app.get('/symptoms/:symptomsId', read_a_symptoms)
        .put('/symptoms/:symptomsId', update_a_symptoms)
        .delete('/symptoms/:symptomsId', delete_a_symptoms);
};