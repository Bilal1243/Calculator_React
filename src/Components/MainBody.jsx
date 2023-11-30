import React, { useState , useEffect } from 'react'
import useSound from 'use-sound';
import './MainBody.css'
import sound from '../sound-8.mp3'
import sound2 from '../sound-6.mp3'

function MainBody() {

    const [data, setData] = useState('')
    const [output, setOutput] = useState()
    const [play] = useSound(sound);
    const [play2] = useSound(sound2)

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, []);

      const handleKeyPress = (event) => {
        const key = event.key;
        if (/[0-9+\-*/.]/.test(key)) {
          handleClick(key);
        } else if (key === 'Enter') {
          handleOutput();
        } else if (key === 'Escape') {
          handleClear();
        }
      };

    const handleClick = (value) => {
        play()
        setData((prevInput) => prevInput + value);
    }

    const handleClear = () => {
        setData('')
        setOutput('')
    }

    const handleOutput = () => {
        let out = eval(data)
        play2()
        setOutput(out)
        setData(out)
    }


    return (
        <>
            <div className='container'>
                <div className='calculator-container'>
                    <div className='output-container'>
                        <input type="text" value={data} className='inputData' readOnly />
                        <input type="text" value={output} className='outputData' readOnly />
                    </div>
                    <div className='btn-container'>
                        <div className="row1">
                            <button className='btn' onClick={() => { handleClick('0') }}>0</button>
                            <button className='btn' onClick={() => { handleClick('%') }}>%</button>
                            <button className='btn' onClick={() => { handleClear() }}>c</button>
                            <button className='btn' onClick={() => { handleOutput() }}>=</button>
                        </div>
                        <div className="row2">
                            <button className='btn' onClick={() => { handleClick('1') }}>1</button>
                            <button className='btn' onClick={() => { handleClick('2') }}>2</button>
                            <button className='btn' onClick={() => { handleClick('3') }}>3</button>
                            <button className='btn' onClick={() => { handleClick('+') }}>+</button>
                        </div>
                        <div className="row3">
                            <button className='btn' onClick={() => { handleClick('4') }}>4</button>
                            <button className='btn' onClick={() => { handleClick('5') }}>5</button>
                            <button className='btn' onClick={() => { handleClick('6') }}>6</button>
                            <button className='btn' onClick={() => { handleClick('-') }}>-</button>
                        </div>
                        <div className="row4">
                            <button className='btn' onClick={() => { handleClick('7') }}>7</button>
                            <button className='btn' onClick={() => { handleClick('8') }}>8</button>
                            <button className='btn' onClick={() => { handleClick('9') }}>9</button>
                            <button className='btn' onClick={() => { handleClick('/') }}>/</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainBody
