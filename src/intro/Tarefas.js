import React, { Component } from 'react';

export default class Tarefas extends Component{

    render() {
        const tarefas = ["Primeira tarefa", "Segunda tarefa", "Terceira tarefa"];
        return <div>
                <h1>Tarefas</h1>
                <ul>{tarefas.map(tarefa => <li>{ tarefa }</li>)}</ul>
               </div>;
    }

}