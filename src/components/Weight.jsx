import { useState } from 'react'

function Weight() {

  const [weight, setWeight] = useState('');
  const [unitFrom, setUnitFrom] = useState('milligram');
  const [unitTo, setUnitTo] = useState('milligram');
  const [result, setResult] = useState('');

  const conversionFactors = {
    milligram: 0.000001,
    gram: 0.001,
    kilogram: 1,
    ounce: 0.02835,
    pound: 0.45359
  }

  function calculateWeight(e) {
    e.preventDefault();

    if (isNaN(weight) || weight === '') {
      setResult('Please enter a valid number');
      return;
    }

    const weightNum = parseFloat(weight);

    const weightInKilos = weightNum * conversionFactors[unitFrom];
    const convertedWeight = weightInKilos / conversionFactors[unitTo];

    setResult(`${weight} ${unitFrom} = ${convertedWeight.toFixed(4)} ${unitTo}`);
  }

  return (
    <div>
      <form action="">
        <p>Enter the weight to convert</p>
        <input
          type="number"
          step="any"
          min="0"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <p>Unit to convert from</p>
        <select
          name="unitFrom"
          value={unitFrom}
          onChange={(e) => setUnitFrom(e.target.value)}
        >
          <option value="milligram">milligram</option>
          <option value="gram">gram</option>
          <option value="kilogram">kilogram</option>
          <option value="ounce">ounce</option>
          <option value="pound">pound</option>
        </select>

        <p>Unit to convert to</p>
        <select
          name="unitTo"
          value={unitTo}
          onChange={(e) => setUnitTo(e.target.value)}
        >
          <option value="milligram">milligram</option>
          <option value="gram">gram</option>
          <option value="kilogram">kilogram</option>
          <option value="ounce">ounce</option>
          <option value="pound">pound</option>
        </select>
        <br />
        <button type="button" onClick={calculateWeight}>
          Convert
        </button>
      </form>

      {result && <h3>{result}</h3>}
    </div>
  )
}

export default Weight
