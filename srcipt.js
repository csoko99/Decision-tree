function evaluateHealth() {
    let index = parseFloat(document.getElementById("index").value);
    let temperature = parseFloat(document.getElementById("temp").value);
    let pulse = parseInt(document.getElementById("pulse").value);
    let bloodPressure = parseInt(document.getElementById("bloodpres").value);

    let result = true;
    
    if(index >= 18.5 && index <= 24.9)
    {
        if(bloodPressure >= 90 && bloodPressure <= 120) 
        {
            if(pulse >= 60 && pulse <= 100)
            {
                if(temperature >= 36.1 && temperature <= 37.2)
                {
                    result = true
                }
                else
                {
                    result = false;
                }
            }
            else
            {
                if(temperature >= 36.1 && temperature <= 37.2)
                {
                    result = true
                }
                else
                {
                    result = false;
                }
            }
        }
        else
            if(pulse >= 60 && pulse <= 100)
            {
                if(temperature >= 36.1 && temperature <= 37.2)
                {
                    result = true
                }
                else
                {
                    result = false;
                }
            }
            else
            {
                result = false;
            }
    }
    else
    {
        if(bloodPressure >= 90 && bloodPressure <= 120)
        {
            if(pulse >= 60 && pulse <= 100)
            {
                if(temperature >= 36.1 && temperature <= 37.2)
                {
                    result = true
                    
                }
                else
                {
                    result = false;
                }
            }
            else
            {
                if(temperature >= 36.1 && temperature <= 37.2)
                {
                    result = true
                    
                }
                else
                {
                    result = false;
                }
            }
        }
        else
        {
            result = false;
            
        }
    }
    if(result)
    {
        document.getElementById("result").innerHTML = "Ön egészséges";
    }
    else
    {
        document.getElementById("result").innerHTML = "Ön beteg";
    }
  }
