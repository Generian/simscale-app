import React from 'react'
import './styles/App.scss';
import Scene from "./Scene";

export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const App = (props: HelloWorldProps) => (
    <div className="container container__app">
        <Scene />
    </div>
);