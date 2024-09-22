function getPatientData(patientId){
    const url = "/patient_details";
    const dataToSend = {
        "patientId": patientId
    }
    return fetchApi(ulr,"POST",dataToSend);

}