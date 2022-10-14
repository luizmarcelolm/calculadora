import React, {useState} from "react";
import "./Calculadora.css"
import Container from '@mui/material/Container';
import {Box} from '@mui/material';



export default function Calculadora(){

const [numero,setNumero] = useState(0);

function inputNumero(e){
    var input = e.target.value
    if(numero===0)
    setNumero(input);
    else{
        setNumero(numero + input);
    }
}

function limpar(){
    setNumero(0)
}

function porcento(){
    setNumero(numero/100);
}

function sinal(){
    if(numero > 0){
        setNumero(-numero);
    } else{
            setNumero(Math.abs(numero));
        }
}
function del(e){
var input = e.target.value
setNumero = input.substring(0,input.length-1);
}

    return(
        <div>
            <Box m={5}/>
            <Container maxWidth="xs">
                <div className="fundo">
                  <div className="fundoResult">
                    <h1 className="result">{numero}</h1>  
                  </div>
                <button className="red" onClick={limpar}>AC</button>
                <button className="red" onClick={del}>Del</button>
                <button className="yellow" onClick={porcento}>%</button>
                <button className="yellow">/</button>
                <button className="blue" onClick={inputNumero} value={7}>7</button>
                <button className="blue" onClick={inputNumero} value={8}>8</button>
                <button className="blue" onClick={inputNumero} value={9}>9</button>
                <button className="yellow">x</button>
                <button className="blue" onClick={inputNumero} value={4}>4</button>
                <button className="blue" onClick={inputNumero} value={5}>5</button>
                <button className="blue" onClick={inputNumero} value={6}>6</button>
                <button className="yellow">+</button>
                <button className="blue" onClick={inputNumero} value={1}>1</button>
                <button className="blue" onClick={inputNumero} value={2}>2</button>
                <button className="blue" onClick={inputNumero} value={3}>3</button>
                <button className="yellow">-</button>
                <button className="green" onClick={sinal}>+/-</button>
                <button className="blue" onClick={inputNumero} value={0}>0</button>
                <button className="green" onClick={inputNumero} value=",">,</button>
                <button className="green">=</button>
                </div>
            </Container>
        </div>
    )
}