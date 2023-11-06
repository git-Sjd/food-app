import React from 'react'

function Calculator() {
    return (
        <div>
            <div className='bg-white'></div>
            <div>
                <div className='flex space-x-5'>
                    <div onClick={{}}>AC</div>
                    <div>+/-</div>
                    <div>%</div>
                    <div>÷</div>
                </div>
                <div className='flex space-x-5'>
                    <div onClick={{}}>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>*</div>
                </div>
                <div className='flex space-x-5'>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>-</div>
                </div>
                <div className='flex space-x-5'>
                    <div>3</div>
                    <div>2</div>
                    <div>1</div>
                    <div>+</div>
                </div>
                <div className='flex space-x-5'>
                    <div></div>
                    <div>0</div>
                    <div>.</div>
                    <div>=</div>
                </div>

            </div>

        </div>
    )
}

export default Calculator
