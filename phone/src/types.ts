export enum RetroMessageTypes {
  GOOD = "good",
  BETTER = "better",
  BAD = "bad"
}

export interface RetroMessage {
  type: RetroMessageTypes;
  content: string;
  timestamp: number;
  userNickname: string;
}
