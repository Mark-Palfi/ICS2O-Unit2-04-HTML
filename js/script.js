// Created by: Mark Palfi
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate () {
  // input
  const A = parseInt(document.getElementById('length1-of-triangle').value)
  const B = parseInt(document.getElementById('length2-of-triangle').value)
  const C = parseInt(document.getElementById('length3-of-triangle').value)
  const height = parseInt(document.getElementById('height-of-triangle').value)

  // process
  const area = (B * height) / 2
  const perimeter = A + B + C

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + ("length2-of-triangle" * "height-of-triangle") / 2" + ' cm²'
