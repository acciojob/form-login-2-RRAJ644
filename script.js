//your JS code here. If required.
function displayFormInfo() {

	const form = document.getElementById('form')
	
	const firstName = form.elements['First Name'].value
	const lastName = form.elements['Last Name'].value
	const phoneNumber = form.elements['Phone Number'].value
	const emailId = form.elements['Email Id'].value
		
	const message = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`;

	alert(message)
}