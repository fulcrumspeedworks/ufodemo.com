import { React } from '../../';
import styled from 'styled-components';

export const StyledDiv = styled.div `

  @import url('https://fonts.googleapis.com/css?family=Roboto:100');
  @import url('https://fonts.googleapis.com/css?family=Roboto:500');

  & {
    --grid-size-x:7;
    --grid-size-y:10;
    --grid-factor:100;
    --grid-unit:1px;
  }

  &>*[hidden] {
    visibility: hidden;
  }
  &>*.gray {
    filter: grayscale(100%);
  }

  & {
    display:grid;
    grid-template-columns: repeat(var(--grid-size-x), 1fr);
    grid-auto-rows: calc(var(--grid-factor)*var(--grid-unit));;
    /*grid-auto-flow: dense;*/
    grid-column-start: 2;
    grid-gap: 0;

    width: calc(var(--grid-size-x)*var(--grid-factor)*var(--grid-unit));
    /*height: */
    margin: 0 auto;
    color: white;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: calc(var(--grid-factor)*0.35*var(--grid-unit));
  }

  .badge {
    background-color: rgba(255,255,255,0.2);
    display: inline-block;
    width: 2em;
    height: 2em;
    line-height: 2em;
    border-radius: 1em;
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
  }
  .badge:hover {
    background-color: rgba(255,255,255,0.35);
  }

  a:link {color: inherit;}
  a:visited {color: inherit;}
  a:hover {color: inherit;}
  a:active {color: inherit;}

  &>* {
    background-image: linear-gradient(135deg, #FBEC6B, #F4BC6B, #EB8B6B, #E0536B, #D6306D, #A32C68, #722A65, #422662, #12255D, #275B75, #3C918B, #52C6A2, #66F8B6);
    background-size: 10000%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
  }
  &.header>* {
    background-image: linear-gradient(-90deg, #176B85, #3C91AB);
    background-position-y:calc(100%/var(--grid-size-y)*1);
    font-size: calc(var(--grid-factor)*0.15*var(--grid-unit));
    font-weight: normal;
    font-family: 'Roboto', sans-serif;
  }

  &>*:nth-child(7n+2) {background-position-x:calc(100%/var(--grid-size-x)*1)}
  &>*:nth-child(7n+3) {background-position-x:calc(100%/var(--grid-size-x)*2)}
  &>*:nth-child(7n+4) {background-position-x:calc(100%/var(--grid-size-x)*3)}
  &>*:nth-child(7n+5) {background-position-x:calc(100%/var(--grid-size-x)*4)}
  &>*:nth-child(7n+6) {background-position-x:calc(100%/var(--grid-size-x)*5)}
  &>*:nth-child(7n+0) {background-position-x:calc(100%/var(--grid-size-x)*6)}

  &>*:nth-child(n+08):nth-child(-n+14) {background-position-y:calc(1/var(--grid-size-y)*100%)}
  &>*:nth-child(n+15):nth-child(-n+21) {background-position-y:calc(2/var(--grid-size-y)*100%)}
  &>*:nth-child(n+22):nth-child(-n+28) {background-position-y:calc(3/var(--grid-size-y)*100%)}
  &>*:nth-child(n+29):nth-child(-n+35) {background-position-y:calc(4/var(--grid-size-y)*100%)}
  &>*:nth-child(n+36):nth-child(-n+42) {background-position-y:calc(5/var(--grid-size-y)*100%)}
  &>*:nth-child(n+43):nth-child(-n+49) {background-position-y:calc(6/var(--grid-size-y)*100%)}
`
