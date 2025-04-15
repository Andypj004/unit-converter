import { useState } from 'react'

function Length() {
  const [length, setLength] = useState('');
  const [unitFrom, setUnitFrom] = useState('millimeter');
  const [unitTo, setUnitTo] = useState('millimeter');
  const [result, setResult] = useState('');


  const conversionFactors = {
    millimeter: 0.001,
    centimeter: 0.01,
    meter: 1,
    kilometer: 1000,
    inch: 0.0254,
    foot: 0.3048,
    yard: 0.9144,
    mile: 1609.34
  }

  function calculateLength(e) {
    e.preventDefault()


    if (isNaN(length) || length === '') {
      setResult('Please enter a valid number');
      return;
    }

    const lengthInMeters = length * conversionFactors[unitFrom];
    const convertedLength = lengthInMeters / conversionFactors[unitTo];

    setResult(`${length} ${unitFrom} = ${convertedLength.toFixed(4)} ${unitTo}`);
  }

  return (
    <div>
      <form>
        <p>Enter the length to convert</p>
        <input
          type="number"
          step="any"
          min="0"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />

        <p>Unit to convert from</p>
        <select
          name="unitFrom"
          value={unitFrom}
          onChange={(e) => setUnitFrom(e.target.value)}
        >
          <option value="millimeter">millimeter</option>
          <option value="centimeter">centimeter</option>
          <option value="meter">meter</option>
          <option value="kilometer">kilometer</option>
          <option value="inch">inch</option>
          <option value="foot">foot</option>
          <option value="yard">yard</option>
          <option value="mile">mile</option>
        </select>

        <p>Unit to convert to</p>
        <select
          name="unitTo"
          value={unitTo}
          onChange={(e) => setUnitTo(e.target.value)}
        >
          <option value="millimeter">millimeter</option>
          <option value="centimeter">centimeter</option>
          <option value="meter">meter</option>
          <option value="kilometer">kilometer</option>
          <option value="inch">inch</option>
          <option value="foot">foot</option>
          <option value="yard">yard</option>
          <option value="mile">mile</option>
        </select>

        <br />
        <button type="button" onClick={calculateLength}>
          Convert
        </button>
      </form>

      {result && <h3>{result}</h3>}
    </div>
  )
}

export default Length
