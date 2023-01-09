import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Note } from './models/note.interface';
import Header from './Components/Header';
import List from './Components/List';
import Addnotes from './Components/Addnotes';
import * as Sentry from "@sentry/react";

function App() {
  
  const [notes,setNotes]=useState<Note[]>([{
      id: (new Date).toString(),
    title: "Meeting 1",
    text: "Discussion with design team",
    color: "#f88379",
    date: (new Date).toString()
    }]);
  
  
  return (
    <>
    <Header/>
    <Addnotes notes={notes} setNotes={setNotes}/>
    <List notes={notes} setNotes={setNotes}/>
    </>
  );
}

export default Sentry.withProfiler(App);
