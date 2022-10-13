import React from "react";
import "./Calculadora.css"
import Container from '@mui/material/Container';
import {Box} from '@mui/material';


export default function Calculadora(){
    return(
        <div>
            <Box m={5}/>
            <Container maxWidth="xs">
                <div className="fundo">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
                <button>,</button>
                <button>=</button>
                <button>+</button>
                <button>-</button>
                <button>x</button>
                <button>/</button>
                <button>+/-</button>
                <button>%</button>
                <button>CE</button>
                <button>Del</button>
                </div>
            </Container>
        </div>
    )
}