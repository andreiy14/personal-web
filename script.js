function SubmitData(){
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let number = document.getElementById("input-number").value
    let subject  = document.getElementById("subject").value
    let message = document.getElementById("input-message").value
    
if(name== '' || email == '' || number == '' || subject== '' || message == ''){
    alert("Please fill in all the data")
}else{
    let receiver = 'andreiy@gmail.com'
    let a = document.createElement('a')

    a.href = `mailto:${receiver}?subject=${subject}&body= hello my name ${name}, ${message}`
    a.click()
    console.log(name)
    console.log(email)
    console.log(number)
    console.log(subject)
    console.log(message)
}

let dataObject ={
    name : name,
    email : email,
    number : number,
    subject : subject,
    message : message
}
document.getElementById("message-bottom").innerHTML = `We will contact you ${dataObject.name}`
    
console.log(dataObject.name + dataObject.message)
document.getElementById("form").reset()

}