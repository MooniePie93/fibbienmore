import React, { Component } from "react";

import "./style.css";


export default function DogApp() {
 let postObject ={};
const rawResponse = fetch('https://dog.ceo/api/breeds/list/all',{
method: 'POST',
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}
},
postObject = {
  "hound": [
    "afghan",
    "basset",
    "blood",
    "english",
    "ibizan",
    "plott",
  "walker"

],
"mastiff": [
  "bull",
  "english",
  "tibetan"
],
body: JSON.stringify(postObject)});

//fetch('https://dog.ceo/api/breeds/list/all')

async function getObject() {
  let response = await fetch('https://dog.ceo/api/breeds/list/all') ;
  let data = await response.json();
  return data;
}
getObject().then(data => console.log(data));
console.log(postObject)
  return <div>DogApp</div>;
}