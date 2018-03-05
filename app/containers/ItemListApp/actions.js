/*
 *
 * ItemListApp actions
 *
 */

 import {
   ADD_ITEM,
   DELETE_ITEM,
   TOGGLE_ITEM,
   CHANGE_ITEMNAME,
 } from './constants';

 export function addItem(payload) {
   return {
     type: ADD_ITEM,
     payload,
   };
 }
 export function deleteItem(payload) {
   return {
     type: DELETE_ITEM,
     payload,
   };
 }
 export function toggleItem(payload) {
   return {
     type: TOGGLE_ITEM,
     payload,
   };
 }
 export function changeItemname(name) {
   return {
     type: CHANGE_ITEMNAME,
     name,
   };
 }
