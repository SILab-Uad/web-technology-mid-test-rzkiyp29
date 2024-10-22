const generatePassword = (length, options) => {

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    let characterSet = "";
    if (options.includeUppercase) characterSet += uppercase;
    if (options.includeLowercase) characterSet += lowercase;
    if (options.includeNumbers) characterSet += numbers;
    if (options.includeSpecialChars) characterSet += specialChars;

    if (characterSet === "") {
        return "Pilih Salah Satu Dongg!";
    }

  
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    return password;
};
    


document.getElementById('generateBtn').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSpecialChars = document.getElementById('includeSpecialChars').checked;

const options = {
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSpecialChars,
};


const password = generatePassword(length, options);
document.getElementById('passwordOutput').innerText = password;
});



document.getElementById('copyBtn').addEventListener('click', () => {
    const passwordOutput = document.getElementById('passwordOutput').innerText;

    if (passwordOutput) {
        
        const tempInput = document.createElement('input');
        tempInput.value = passwordOutput;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy'); 
        document.body.removeChild(tempInput); 

        alert('Password copied to clipboard!'); 
    } else {
        alert('Please generate a password first!'); 
    }
});
