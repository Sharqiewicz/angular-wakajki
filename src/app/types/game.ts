export type Turn = {
  player: Player
  shot?: Shot
  getShot: () => void
}

// @todo implement turn and rounds history
// actions: TurnActions[]

export type Round = {
  currentPlayerIndex: number
  turns: Turn[]
  playTurn: () => void
  currentTurn: () => Turn
}

export interface Game {
  players: Player[]
  drinks: Drink[]
  rounds: Round[]
  shotScale: number
}

export type Drink = {
  color: string
  name: string
  percentage: number
  hasBonus: boolean
}

export type Proportions = 1 | 2 | 3
export const PROPORTIONS: Proportions[] = [1, 2, 3]

export type Shot = {
  mix: Drink[]
  proportions: Proportions[]
  points: number
  ids?: string[]
}

export type Player = {
  id: string
  points: number
  name: string
}
