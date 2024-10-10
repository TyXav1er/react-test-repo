
import React, {useState} from 'react'

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF") // It is best to use hexedecimal colors over HSL (Hue, Saturation, Lightness) because you would have to pass in a JS object with those values

    function handleColorChange(event) {
        setColor(event.target.value)
    }

    return(
        <div className='color-picker-container'>
            <h1>Color Picker</h1>
            <div className='color-display' style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a color:</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    )
}

export default ColorPicker