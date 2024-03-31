import { MouseEventHandler } from "react";

export interface ITagParam{
    name:string,
    active:boolean,
    id:number,
    onClick: MouseEventHandler<HTMLDivElement>
}