export default class Component extends React.Component {} 
console.log('si');

document.querySelector('#json').addEventListener('click',informacion());

function informacion(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','components/informacio.json',true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#res');
            res.innerHTML= '';
            for(let item of datos){
                res.innerHTML += `
                <tr>
                    <td>${item.Fuentes}</td>
                    <td>${item.Porcentaje}</td>
                    <td>${item.Duracion}</td>
                </tr>
                `
            }
        }
    }
}