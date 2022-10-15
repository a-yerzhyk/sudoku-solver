import Square from './square'

const MAP_SIZE = 9
const BIG_SQUARE_SIZE = 3

export interface ISudokuMap {
  map: Array<Square>
  columnMap: Array<Array<Square>>
  rowMap: Array<Array<Square>>
  bigSquareMap: Array<Array<Square>>
  getSquare: (xPos: number, yPos: number) => Square
  getColumn: (xPos: number) => Array<Square>
  getRow: (yPos: number) => Array<Square>
  getBigSquare: (xPos: number, yPos: number) => Array<Square>
}

export default class SudokuMap implements ISudokuMap {
  private _map: Array<Square>
  private _columnMap: Array<Array<Square>>
  private _rowMap: Array<Array<Square>>
  private _bigSquareMap: Array<Array<Square>>

  constructor () {
    this._map = new Array()
    this._columnMap = new Array(MAP_SIZE).fill(null).map(() => new Array(MAP_SIZE))
    this._rowMap = new Array(MAP_SIZE).fill(null).map(() => new Array(MAP_SIZE))
    this._bigSquareMap = new Array(MAP_SIZE).fill(null).map(() => new Array())
    for (let x = 0; x < MAP_SIZE; x++) {
      for (let y = 0; y < MAP_SIZE; y++) {
        this.map.push(new Square(x, y))
      }
    }
    for (let i = 0; i < this.map.length; i++) {
      const square = this.map[i]
      const x = square.x
      const y = square.y
      this.setSquareInColumnMap(square)
      this.setSquareInRowMap(square)
      this.setSquareInBigSquareMap(square)
    }
  }

  get map () {
    return this._map
  }

  get columnMap () {
    return this._columnMap
  }

  get rowMap () {
    return this._columnMap
  }

  get bigSquareMap () {
    return this._columnMap
  }

  getSquare (xPos: number, yPos: number) {
    return this._columnMap[xPos][yPos]
  }

  getColumn (xPos) {
    return this._columnMap[xPos]
  }

  getRow (yPos) {
    return this._rowMap[yPos]
  }

  getBigSquare (xPos: number, yPos: number) {
    const position = this.getBigSquarePosition(xPos, yPos)
    return this._bigSquareMap[position]
  }

  private setSquareInColumnMap (square: Square) {
    this._columnMap[square.x][square.y] = square
  }
  
  private setSquareInRowMap (square: Square) {
    this._rowMap[square.y][square.x] = square
  }
  
  private setSquareInBigSquareMap (square: Square) {
    const position = this.getBigSquarePosition(square.x, square.y)
    this._bigSquareMap[position].push(square)
  }

  private getBigSquarePosition (x: number, y: number): number {
    const xPos = Math.floor(x / BIG_SQUARE_SIZE)
    const yPos = Math.floor(y / BIG_SQUARE_SIZE) * 3
    return xPos + yPos
  }
}
