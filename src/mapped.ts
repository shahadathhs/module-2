{
    const arrOfNum: number[] = [1,2,3]

    // const arrOfS:string[] = ['1','2','3'];
    const arrOfS:string[] = arrOfNum.map(num => num.toString())

    type AreaNum = {
        height: number;
        width: number;
    }

    type Height = AreaNum["height"];

    // type AreaStr = {
    //     height: string;
    //     width: string;
    // }

    type AreaStr = {
        [key in keyof AreaNum]: string
    }

    type AreaDynamic<T> = {
        [key in keyof T]: T[key]
    }

    const area: AreaDynamic<{ height: string, width: number}> = {
        height: "0",
        width: 0,
    }
}