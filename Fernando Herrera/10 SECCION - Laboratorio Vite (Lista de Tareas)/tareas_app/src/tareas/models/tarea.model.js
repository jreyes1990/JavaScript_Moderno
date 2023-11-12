import {v4 as uuid} from 'uuid';

export class Tarea{
  /**
   * 
   * @param {String} descripcion 
   */
  constructor(descripcion){
    this.id = uuid();
    this.descripcion = descripcion;
    this.done = false;
    this.createdAt = new Date();
  }
}