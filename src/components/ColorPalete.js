import React from "react";
import '../App.css';

export default function ColorPalete(){

    const onchange = (color) =>{
        document.body.style.background = color;
    }

    return(
        <>
        <h1 style={{border:"1px solid #ccc",justifyContent:"center",textAlign:"center",color:"#ccc",fontFamily:"sans-serif",background:"#000"}}>Color Palete</h1>
        <div className="container-fluid colorPalete my-3">
            <div className="row">

                <div className="col-12 my-2">
                    <button className="btn mx-2 text-white" style={{backgroundColor:"red"}} onClick={()=> onchange('red')}>
                        Red
                    </button>

                    <button className="btn mx-2 text-white" style={{backgroundColor:"orange"}} onClick={()=> onchange('orange')}>
                        Orange
                    </button>

                    <button className="btn mx-2 text-white" style={{backgroundColor:"green"}} onClick={()=> onchange('green')}>
                        Green
                    </button>
                </div>

                <div className="col-12 my-2">
                    <button className="btn mx-2 text-white" style={{backgroundColor:"blue"}} onClick={()=> onchange('blue')}>
                        Blue
                    </button>

                    <button className="btn mx-2 text-white" style={{backgroundColor:"purple"}} onClick={()=> onchange('purple')}>
                        Purple
                    </button>

                    <button className="btn mx-2 text-white" style={{backgroundColor:"pink"}} onClick={()=> onchange('pink')}>
                        Pink
                    </button>
                </div>

                <div className="col-12 my-2">
                    <button className="btn mx-2 text-white" style={{backgroundColor:"brown"}} onClick={()=> onchange('brown')}>
                        Brown
                    </button>

                    <button className="btn mx-2 text-white" style={{backgroundColor:"black"}} onClick={()=> onchange('black')}>
                        Black
                    </button>

                    <button className="btn mx-2" style={{backgroundColor:"white", border:"1px solid black"}} onClick={()=> onchange('white')}>
                        White
                    </button>

                    <button className="btn mx-2 text-white" style={{backgroundColor:"gray"}} onClick={()=> onchange('gray')}>
                        Gray
                    </button>
                </div>

            </div>
        </div>
        </>
    );
}