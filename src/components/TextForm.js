import React, { useS, useState } from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const [text, SetText] = useState('Enter Text here');

    const handleOnChange = (event) => {
        SetText(event.target.value);
    }
    const handleUpperClick = () => {
        let newText = text.toUpperCase();
        SetText(newText);
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        SetText(newText);
    }
    const handleCamelClick = () => {
        let textarray = text.split(' ');

        let newArray = textarray.map((word, index) => {
            if (word.trim() === "") return "";
            return word.charAt(0).toUpperCase() + word.slice(1);
        });

        let newText = newArray.join(' ');
        console.log(newText);
        SetText(newText);
    };
    const countVowels = () => {
        const vowels = text.match(/[aeiouAEIOU]/g);
        const count = vowels ? vowels.length : 0;
        alert(`Number of vowels: ${count}`);
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    };
    const handleClearClick = () => {
        SetText('');
    }

    function FindWordCount(text) {
        if (!text || text.trim().length === 0) {
            return 0;
        }

        return text
            .trim()                 // removes leading & trailing spaces
            .split(/\s+/)           // handles multiple spaces
            .length;
    }


    return (
        <>
            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3 ">
                    <textarea className="form-control" value={text} onChange={handleOnChange}
                    style={{backgroundColor : props.mode === 'light' ? 'white': '#212529' ,
                        color : props.mode === 'light' ? 'black' : 'white'
                    }} 
                    id="textBox" rows="8"></textarea>
                </div>
            </div>
            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'secondary'}`} onClick={handleUpperClick}>UPPER CASE</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'secondary'} mx-2`} onClick={handleLowerClick}>lower case</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'secondary'} mx-2`} onClick={handleCamelClick}>Title Case</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'secondary'} mx-2`} onClick={countVowels}>Count Vowels</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'secondary'} mx-2`} onClick={handleCopy}>Copy Text</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'secondary'} mx-2`} onClick={handleClearClick}>Clear</button>
            </div>
            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h2> Text Summary</h2>
                <div>
                    <b><label > Words: </label></b>
                    <label className='mx-2'>{FindWordCount(text)}</label>
                </div>
                <div>
                    <b><label> Characters: </label></b>
                    <label className='mx-2'> {text.length}</label>
                </div>
                <div>
                    <b><label> Took Minutes to Read: </label></b>
                    <label className='mx-2'> {0.008 * FindWordCount(text)}</label>
                </div>


            </div>
            <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>


        </>
    )
}


TextForm.propTypes = {
    heading: PropTypes.string,
    mode: PropTypes.string
}