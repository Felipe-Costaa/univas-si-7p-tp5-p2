import { Box, Grid, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import botao from "../components/botaoFrufru"
import axios from "axios";


export const Home = () => {

    let endpoint = "http://3.137.177.147:3000/produtos"

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        getProdutos();
      }, []);


    const getProdutos = () => {
        var vetProdutos = [];
        axios.all(vetProdutos.map((endpoint) => axios.get(endpoint))).then((res) => setProdutos(res));
      };

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Gerenciamento de produtos</h1>
            <Box style={{textAlign:"center", margin:"2em"}}>
            <TextField label="Nome"></TextField>
            <TextField label="Preço"></TextField>
            <TextField label="Estoque"></TextField>
            </Box>
            <Box style={{textAlign: "center"}}>
            <label>Descrição</label>
            <br></br>
            <textarea rows={20} style={{width: "664px", height: "241px;"}}></textarea>
            <botaoFrufru label="SAVE" />

            </Box>

            
        </div>
    )
}