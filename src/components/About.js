import React from 'react'


export default function About(props) {

    return (
        <div className="container"style ={{color: props.mode==='dark'? 'white': 'black'}}>
            <h1 className="my-3" >About us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style = {{ backgroundColor: props.mode==='dark'? 'black': 'white' , color: props.mode==='dark'? 'white': 'black'}}>
                        <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body"style = {{ backgroundColor: props.mode==='dark'? 'black': 'white' , color: props.mode==='dark'? 'white': 'black' ,  border: '1px solid white'}}>
                            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                        </div>
                    </div>
                </div>
                <div className="accordion-item"style ={{color: props.mode==='dark'? 'white': 'black'}}>
              
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style = {{ backgroundColor: props.mode==='dark'? 'black': 'white' , color: props.mode==='dark'? 'white': 'black'}}>
                        <strong> Free To Use </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body"style = {{ backgroundColor: props.mode==='dark'? 'black': 'white' , color: props.mode==='dark'? 'white': 'black' , border: '1px solid white'}}>
                            TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing  text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item"style ={{color: props.mode==='dark'? 'white': 'black'}}>
                
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style = {{ backgroundColor: props.mode==='dark'? 'black': 'white' , color: props.mode==='dark'? 'white': 'black'}}>
                        <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body"style = {{ backgroundColor: props.mode==='dark'? 'black': 'white' , color: props.mode==='dark'? 'white': 'black' , border: '1px solid white'}}>
                        This word ciunter software works in many browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books ,excel document ,pdf document, essays, etc. 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}