import { Shape } from "@/utils/enum";

export interface IFigureData {
  shape: Shape | undefined;
  color: string;
  symbol: string;
  measurement: number;
}
