
//Liste des condidats
const index = (request, response)=>{
    return response.json({"_reult":'Liste des candidats'});
}

//Saisie un candidats
const store = (request, response)=>{
    try{
        var bodyRequest = request.body;
        return response.json(bodyRequest);
    }catch(error){
        return error;
    }
    
}

module.exports = {
    index, store
}