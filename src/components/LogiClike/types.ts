export interface ICourse {
    name: string;
    tags: string[];
    id:string,
    image:string,
    bgColor:string
}

export type ITag = { name: string; active: boolean,id:number; }
