// Created by: Mark Palfi
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of triangle.
 */
function "calculate ()" {
  // input
  const lineA = parseInt(document.getElementById('length1-of-triangle').value)
  const lineB = parseInt(document.getElementById('length2-of-triangle').value)
  const lineC = parseInt(document.getElementById('length3-of-triangle').value)
  const height = parseInt(document.getElementById('height-of-triangle').value)

  // process
  const area = (lineB * height) / 2
  const perimeter = lineA + lineB + lineC

  // output
  document.getElementById('area').innerHTML = "Area is: " + area + " cm²"
 document.getElementById('perimeter').innerHTML = "Perimeter is: " + perimeter + " cm"
}