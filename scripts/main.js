



pullDropdowns  = () =>{

    fetch("https://run.mocky.io/v3/f3f3ecf0-9c85-45ed-a1c7-e72deac3204d")
    .then((response) =>response.json())
    .then((name) =>{
        companyDropDownAdd(name);
    })

    fetch("https://run.mocky.io/v3/8b1960e6-218b-49ad-810c-9a25b65ec916")
    .then((response) => response.json())
    .then((subject)=>{
        subjectDropDownAdd(subject);

    })

    
    fetch("https://run.mocky.io/v3/b87c3ea5-9412-49e0-822c-8925b5c23815")
    .then((response) => response.json())
    .then((phoneCity)=>{
        phoneCityDropDownAdd(phoneCity);

    })


    fetch("https://run.mocky.io/v3/575624f8-6b4e-433f-bfe0-b419ddd62bbe")
    .then((response) => response.json())
    .then((phoneOperator)=>{
        phoneOperatorDropDownAdd(phoneOperator);

    })



}

companyDropDownAdd= (arr) =>{
    let companyDropDown = document.getElementsByClassName("companydropdown")[0];
    arr.forEach(name=>{
        const option = document.createElement('option');
        option.textContent = name.name;
        companyDropDown.appendChild(option);

    })
}

subjectDropDownAdd= (arr) =>{
    let subjectDropDown = document.getElementsByClassName("subject")[0];
    arr.forEach(subject=>{

        const option = document.createElement('option');
        option.textContent = subject.subject;
        subjectDropDown.appendChild(option);

    })
}

phoneCityDropDownAdd= (arr) =>{
    let phoneDropDown = document.getElementsByClassName("optionarea")[0];
    arr.forEach(phoneNo=>{
        const option = document.createElement('option');
        option.textContent = "+"+phoneNo.alan_kodu +" ("+ phoneNo.sehir +")";
        phoneDropDown.appendChild(option);

    })
}



phoneOperatorDropDownAdd= (arr) =>{
    let phoneDropDown = document.getElementsByClassName("optionarea")[0];

    arr.forEach(phoneNo=>{

        let operatorName = phoneNo.operatör;
        phoneNo.kodlar.forEach(operator =>{
            const option = document.createElement('option');
            option.textContent = operator +" ("+ operatorName +")";
            phoneDropDown.appendChild(option);

        })

    })
}




checkEmail = (email) =>{

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}

checkPhone =(phone) =>{
    const phoneNumberRegex = /^\d{7}$/;
    return phoneNumberRegex.test(phone);
}

checkFirstName =(firstname) =>{
    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)?$/;
    if(firstname != "" &&  nameRegex.test(firstname)){
        return true;
    }
    else return false;
}

checkLastName =(lastname) =>{
    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)?$/;
    if(lastname != "" && nameRegex.test(lastname)){
        return true;
    }
    else return false;
}

checkCompany =(company) =>{
    if (company == "") {
        return false;
    }
    else return true;
    
}


checkSubject=(subject) =>{
    if (subject == "" || subject =="--Choose Option--") {
        return false;
    }
    else return true;

}

checkPhoneDrop=(phoneDropDown) =>{
    if (phoneDropDown == "") {
        return false;
    }
    else return true;

}

function handleRadioButtonChange() {
    if (yesRadioButton.checked && noRadioButton.checked) {
        yesRadioButton.checked = false;
        noRadioButton.checked = false;
    }
}

checkBeginner=() =>{
    if (yesRadioButton.checked || noRadioButton.checked) {
        return true;
    }
    else return false;

}


submitForm = () =>{


    var phone = document.getElementById('phoneID').value;
    var firstname = document.getElementById("firstNameID").value;
    var email = document.getElementById("emailInput").value;
    var lastname = document.getElementById("lastNameID").value;
    var company = document.getElementById("companydropdown").value;
    var phoneDropDown = document.getElementById("phoneDropDownID").value;
    var subject = document.getElementById("subjectID").value;




    let isEmail = checkEmail(email);
    let isPhone = checkPhone(phone);
    let isFirstName = checkFirstName(firstname);
    let isLastName = checkLastName(lastname);
    let isCompany = checkCompany(company);
    let isSubject = checkSubject(subject);
    let isPhoneDropDown = checkPhoneDrop(phoneDropDown);
    let isBeginner = checkBeginner();


    if(!isEmail){
        alert("Please enter a valid email!")
        return;
    }
    if(!isPhone){
        alert("Please enter a valid number!")
        return;
    }
    if(!isFirstName){
        alert("First name cannot be empty!");
        return;

    }
    if(!isLastName){
        alert("Last name cannot be empty!");
        return;

    }
    if(!isCompany){
        alert("Please select a company!");
        return;

    }
    if(!isSubject){
        alert("Please select a subject!");
        return;

    }
    if(!isPhoneDropDown){
        alert("Please select an area code");
        return;

    }
    if(!isBeginner){
        alert("Please select wheter you are beginner or not!");
        return;

    }

    window.open('posted.html', '_blank');

    


}

const yesRadioButton = document.getElementById('yes');
const noRadioButton = document.getElementById('no');

yesRadioButton.addEventListener('change', handleRadioButtonChange);
noRadioButton.addEventListener('change', handleRadioButtonChange);

document.addEventListener("load", pullDropdowns());
document.getElementById("registerbutton").addEventListener("click", function(event) {
    event.preventDefault();
    var isFormValid = submitForm();
});