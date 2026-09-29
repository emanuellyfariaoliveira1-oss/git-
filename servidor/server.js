const express = require ("express");
const item = require("../dados.json");

const mostrarItem = (req,res) =>{
    res.send(item)
}
 
const novoitem = (req,res) => {
    if(req.body){

        item.push(req . body) 
         } else {
            res.send("erro ao receber item")
    }
}


let encontrado = false;
const excluiritem = (req, res) =>{
    const id = req.params.id;

  item.forEach((item) => {
        if (item.id == id) {
            res.send(item);
            encontrado = true;
            
        }
    });

     if(encontrado){
       res.status(404).send("item  nao encontrado");
     }
        
}     


const alterarItem= (req, res ) => {
    const id = req.params.id;
    const dados = req.body;

    item.forEach((item) => {
        if(item.id == id){
            item.nome = dados.nome;
            item.precoUnitario = dados.precoUnitario;
            item.quantidade = dados.quantidade;
            item.unidade = dados.unidade

        }
    })
     res.send("item atualizado com sucesso")

}

const app = express();
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
const porta = 3000


app.get("/", mostrarItem);
app.post("/", novoitem);
app.delete("/:id", excluiritem);
app.put("/:id", alterarItem);

app.listen(porta, () => {
    console.log(`servidor respondendo em: http://localhost:${porta}`) 
})
