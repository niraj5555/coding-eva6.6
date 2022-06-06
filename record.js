// fill in javascript code here
document.querySelector("form").addEventListener("submit",myFunction);

function myFunction(event){
    event.preventDefault();
    let name=document.querySelector("#name").value;
    let employeeID=document.querySelector("#employeeID").value;
    let depart=document.querySelector("#department").value;
    let experience=document.querySelector("#exp").value;
    let email=document.querySelector("#email").value;
    let mobile=document.querySelector("#mbl").value;
     
    let tr=document.createElement("tr");

    let td1=document.createElement("td");
    td1.innerText=name;
    let td2=document.createElement("td");
    td2.innerText=employeeID;
    let td3=document.createElement("td");
    td3.innerText=depart;
    let td4=document.createElement("td");
    td4.innerText=experience;
    let td5=document.createElement("td");
    td5.innerText=email;
    let td6=document.createElement("td");
    td6.innerText=mobile;
    let td7=document.createElement("td");

    if(experience>5){
        td7.innerText="Senior";
    }else if(experience<5 && experience>2){
        td7.innerText="Junior";
    }else{
        td1.innerText="Fresher";
    }
    let td8=document.createElement("td");
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(tr);


}