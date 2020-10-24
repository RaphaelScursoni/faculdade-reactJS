// cSpell:Ignore starwars, listastarwars
import React, { useState, useEffect } from 'react'
  import './App.css'

  export default function App(){
    useEffect (() => {
      obterStarwars()
      }, [])
      
      const [ starwars , setStarwars  ] = useState([])

      async function obterStarwars(){
      let url = 'http://api.tvmaze.com/search/shows?q=star%20wars'
      await fetch(url)
      .then(response => response.json())
      .then(data  => {
      console.log(data)
      setStarwars(data)
      })
      .catch(function (error){
        console.error(`Houve um erro: ${error}`)
      })
    }
    
    const listastarwars = starwars.map((starwars) => 
    <tr key={starwars.show.id}>
      <td>{starwars.show.name}</td>
      <p><a href={starwars.show.url}>{starwars.show.url}</a></p>
      <td>{starwars.show.language}</td>
      <td>{starwars.show.rating.average}</td>
      <td>{starwars.show.premiered}</td>
      <td>{starwars.show.type}</td>
      <td><img src={starwars.show.image} alt={starwars.show.name} title={starwars.show.name}/></td>
    </tr> 
  )

  return(
  <div className="principal"> 
    <h1>
      Trilogia do Star Wars
    </h1>
    <table border="8">
      <thead>
          <tr>
          <th>Nome</th>
          <th>Link para acesso</th>
          <th>Idioma do filme</th>
          <th>Nota de Avaliação</th>
          <th>Data de Estreia</th>
          <th>Tipo dos filmes</th>
          <th>Foto da capa</th>
        </tr>
      </thead>
      <tbody>
        {listastarwars}
      </tbody>
    </table>
    
  </div>
  )
  }