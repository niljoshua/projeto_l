import { useEffect, useState } from "react";
import { api } from "./services/api";
import { v4 as uuid } from 'uuid';
import "./styles/style.css"

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const addProducts = async () => {
        try {
            const {data} = await api.get("/");
            setProducts(data);
        } catch (erro) {
            console.log(erro)
        }
    }
    addProducts();
}, []);

console.log(products)

  return (
    <div className="controller">
      
      {products.map(element => {
        return <li key={uuid()} className="Li">
          <span>{element.abrangencia}</span>
          <span>{element.localidade}</span>
          <span>{element.janeiro}</span>
          <span>{element.fevereiro}</span>
          <span>{element.março}</span>
          <span>{element.abril}</span>
          <span>{element.maio}</span>
          <span>{element.junho}</span>
          <span>{element.julho}</span>
          <span>{element.agosto}</span>
          <span>{element.setembro}</span>
          <span>{element.outubro}</span>
          <span>{element.novembro}</span>
          <span>{element.dezembro}</span>
          <span>{element.ano}</span>         
        </li>
      })}
  
    </div>
  )
}

export default App
