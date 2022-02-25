import React, { Component } from 'react'
import Band from './Band'

const Bands = ({ bands, deleteFn }) => (
  <ul className="band-list">
    {bands.map((band) => (
     <li> <Band name={band.name} id={band.id} delete={deleteFn} key={band.id}/> </li>
    ))}
  </ul>
);

export default Bands;
