window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';
const functionApiUrl = 'https://getresumecountersanel.azurewebsites.net/api/GetResumeCounter?code=-3cOAu-7Nc_vYjZ4DTg_MbdSSktF849P6SFzQYn6jh9vAzFueJMclQ=='

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}