

//function
//get values
//calculate
//output

//bmi formula   weight / height squared  * 703
//BMI = (weight) / (height * height) 


function calculateBmi() {
 
    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let height = parseInt(document
            .querySelector("#height").value);
 
    /* Getting input from user into weight variable. 
    Input is string so typecasting is necessary.*/
    let weight = parseInt(document
            .querySelector("#weight").value);
 
    let result = document.querySelector("#result");
 
    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height)) 
        result.innerHTML = `<p id="output">Provide a valid Height! </p>`;
 
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = `<p id="output"> Provide a valid Weight!</p>`;
 
    // If both input is valid, calculate the bmi
    else {
 
        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
 
        // Dividing as per the bmi conditions
        if (bmi < 18.6) result.innerHTML =
            `<p id="output"> Under Weight : <span id="output">${bmi}</span> </p>`;
 
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `<p id="output"> Normal : <span id="output">${bmi}</span> </p>`;
 
        else result.innerHTML =
            `<p id="output"> Over Weight : <span id="output">${bmi}</span> </p>`;
    }
}







