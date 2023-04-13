import React from 'react'

// props = {pic: "http..., texto: "Oi"}
//Operador de desetruturação
const Imagem = ({pic, imgStyle}) => {
  return (
    <div className={`${imgStyle} flex justify-content-center`}>
        <img className='border-round' src={pic} />
    </div>
  )
}

const pessoa = {nome: "Ana", idade: 20}

// const nome = pessoa.nome
//const {nome, idade} = pessoa

// console.log(nome)
//console.log(idade)

export default Imagem