export interface IPost {
    text: string;
    imagePath: string;
    title:string;
    author:string;
}

export interface IPost2 extends IPost {
    id:number;
}
