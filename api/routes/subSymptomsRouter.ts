import { 
    list_all_sub_symptoms,
    create_a_sub_symptoms,
    read_a_sub_symptoms,
    update_a_sub_symptoms,
    delete_a_sub_symptoms
} from './../controllers/subSymptomsController';

export default function(app: any) {
    app.get('/sub_symptoms', list_all_sub_symptoms)
        .post('/sub_symptoms', create_a_sub_symptoms);

    app.get('/sub_symptoms/:subSymptomsId', read_a_sub_symptoms)
        .put('/sub_symptoms/:subSymptomsId', update_a_sub_symptoms)
        .delete('/sub_symptoms/:subSymptomsId', delete_a_sub_symptoms);
};