import React from 'react';
// TODO: ADD Bootstrap here

interface Props{
    title: string;
    age: number;
}

export const Home = (props:Props) => {
    return (
        <div>
            <h1>Hello World From React!</h1>
            <h4> { props.title } </h4>
        </div>
    )
}