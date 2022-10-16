import React, {useState} from "react";
import "./Calculadora.css"
import Container from '@mui/material/Container';
import {Box} from '@mui/material';



export default function Calculadora(){

const [numero,setNumero] = useState(0);
const [antigoNumero,setAntigoNumero] = useState(0);
const [operador,setOperador] = useState();


//tira zero do input e subtitui por numero digitado
function inputNumero(e){
    var input = e.target.value
    if(numero===0)
    setNumero(input);
    else{
        setNumero(numero + input);
    }
}

//limpa input
function limpar(){
    setNumero(0)
}

//calculo de porcentagem
function porcento(){
    setNumero(numero/100);
}

//muda sinal
function sinal(){
    if(numero > 0){
        setNumero(-numero);
    } else{
            setNumero(Math.abs(numero));
        }
}

//guarda operação selecionada
function operacaoHandle(e){
    var operadorInput=e.target.value;
    setOperador(operadorInput);
    setAntigoNumero(numero);
    setNumero(0);
}

//calcula os numeros digitados
function calcular(){
   if (operador === "/"){
    setNumero(parseFloat(antigoNumero) / parseFloat(numero))
   }else if (operador === "x"){
        setNumero(parseFloat(antigoNumero) * parseFloat(numero))
   }else  if (operador === "-"){
    setNumero(parseFloat(antigoNumero) - parseFloat(numero))
   }else if (operador === "+"){
        setNumero(parseFloat(antigoNumero) + parseFloat(numero));
   }
}

//deleta ultimo numero digitado
function del(){
setNumero(numero.slice(0,-1));
if (numero.length === 1) {
    setNumero(0);
} 
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
                <button className="yellow" onClick={operacaoHandle} value="/">/</button>
                <button className="blue" onClick={inputNumero} value={7}>7</button>
                <button className="blue" onClick={inputNumero} value={8}>8</button>
                <button className="blue" onClick={inputNumero} value={9}>9</button>
                <button className="yellow"onClick={operacaoHandle} value="x">x</button>
                <button className="blue" onClick={inputNumero} value={4}>4</button>
                <button className="blue" onClick={inputNumero} value={5}>5</button>
                <button className="blue" onClick={inputNumero} value={6}>6</button>
                <button className="yellow" onClick={operacaoHandle} value="+">+</button>
                <button className="blue" onClick={inputNumero} value={1}>1</button>
                <button className="blue" onClick={inputNumero} value={2}>2</button>
                <button className="blue" onClick={inputNumero} value={3}>3</button>
                <button className="yellow" onClick={operacaoHandle} value="-">-</button>
                <button className="green" onClick={sinal}>+/-</button>
                <button className="blue" onClick={inputNumero} value={0}>0</button>
                <button className="green" onClick={inputNumero} value=".">,</button>
                <button className="green" onClick={calcular} >=</button>
                </div>
            </Container>
        </div>
    )
}