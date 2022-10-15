export type SquareValue = '1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'
export type EmptyValue = ''
export type PossibleValues = Set<SquareValue>
export enum SquareStatus {
  ACTIVE,
  DEFAULT,
  ERROR
}

export interface ISquare {
  x: number
  y: number
  value: SquareValue | EmptyValue
  status: SquareStatus
  possibleValues: PossibleValues
  getPosition (): { x: number, y: number }
  getStatus (): SquareStatus
  getPossible (): PossibleValues
  isEmpty (): boolean
  setValue: (v: SquareValue) => void
  clearValue: () => void
  setStatus: (s: SquareStatus) => void
  addPossible: (v: SquareValue) => void
  removePossible: (v: SquareValue) => void
  cleanPossible: () => void
}

export default class Square implements ISquare {
  _x: number;
  _y: number;
  _value: SquareValue | EmptyValue;

  status: SquareStatus = SquareStatus.DEFAULT
  possibleValues: PossibleValues = new Set<SquareValue>();

  constructor (x: number, y: number, value?: SquareValue) {
    this._x = x
    this._y = y
    this._value = value ? value : ''
  }

  get x (): number {
    return this._x
  }

  get y (): number {
    return this._y
  }

  get value (): SquareValue | EmptyValue {
    return this._value
  }

  getPosition (): { x: number, y: number } {
    return { x: this.x, y: this.y }
  }

  getStatus (): SquareStatus {
    return this.status
  }

  getPossible (): PossibleValues {
    return this.possibleValues
  }

  isEmpty (): boolean {
    return !!this._value
  }

  setValue (value: SquareValue) {
    this._value = value
  }

  clearValue () {
    this._value = ''
    this.status = SquareStatus.DEFAULT
  }

  setStatus (status: SquareStatus) {
    this.status = status
  }

  addPossible (value: SquareValue) {
    this.possibleValues.add(value)
  }

  removePossible (value: SquareValue) {
    this.possibleValues.delete(value)
  }
  
  cleanPossible () {
    this.possibleValues.clear()
  }
}
