import { useState } from 'react'
function Temperature (){

    const [temperature, setTemperature] = useState('');
    const [unitFrom, setUnitFrom] = useState('Celsius');
    const [unitTo, setUnitTo] = useState('Celsius');
    const [result, setResult] = useState('');

    function calculateTemperature(e) {
        e.preventDefault()
    
        if (isNaN(temperature) || temperature === '') {
          setResult('Please enter a valid number');
          return;
        }
    
        const temp = parseFloat(temperature);
        let tempInCelsius;
    

        if (unitFrom === 'Celsius') {
          tempInCelsius = temp;
        } else if (unitFrom === 'Fahrenheit') {
          tempInCelsius = (temp - 32) * 5 / 9;
        } else if (unitFrom === 'Kelvin') {
          tempInCelsius = temp - 273.15;
        }
    

        let finalTemp;
        if (unitTo === 'Celsius') {
          finalTemp = tempInCelsius;
        } else if (unitTo === 'Fahrenheit') {
          finalTemp = (tempInCelsius * 9 / 5) + 32;
        } else if (unitTo === 'Kelvin') {
          finalTemp = tempInCelsius + 273.15;
        }
    
        setResult(`${temperature} ${unitFrom} = ${finalTemp.toFixed(2)} ${unitTo}`);
      }

    return(
        <div>
            <form action="">
                <p>Enter the temperature to convert</p>
                <input
                type="number"
                step="any"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                />
                <p>Unit to convert from</p>
                <select
                name="unitFrom"
                value={unitFrom}
                onChange={(e) => setUnitFrom(e.target.value)}
                >
                    <option value="Celsius">Celsius</option>
                    <option value="Fahrenheit">Fahrenheit</option>
                    <option value="Kelvin">Kelvin</option>       
                </select>
                <p>Unit to convert to</p>
                <select
                name="unitTo"
                value={unitTo}
                onChange={(e) => setUnitTo(e.target.value)}
                >
                    <option value="Celsius">Celsius</option>
                    <option value="Fahrenheit">Fahrenheit</option>
                    <option value="Kelvin">Kelvin</option> 
                </select>
                <br />
                <button type="button" onClick={calculateTemperature}>
                Convert
                </button>
            </form>

            {result && <h3>{result}</h3>}
        </div>
    )


}

export default Temperature;