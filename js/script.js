// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateTheCel() {

  // input
  const fahrenheit = parseFloat(document.getElementById('fahrenheit').value)


  // process
  const celcius = (fahrenheit - 32 ) * 5.0/9.0


  // output
  document.getElementById('celcius').innerHTML = 'celcius is : ' + celcius.toFixed(3) +"°C"
}