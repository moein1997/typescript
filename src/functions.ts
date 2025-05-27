export const test = (value : unknown) : void => {
    if (typeof value === "string"){
        console.log(value);
    }else {
        console.log("value must be string");
    }
};

export const add = (num1 : number,num2 : number) : number => {
    return num1 + num2;
};

export const calculateArea = (width : number,height : number) : number =>{
    if(width > height){
        return width*height;
    }else {
        return width*height/2;
    }
};


export const function_with_optional_input = (width : number,height : number = 6) : number =>{
    if(width > height){
        return width*height;
    }else {
        return width*height/2;
    }
};

export const convertMileToKilometer = (value : number | string) : number =>{
    if(typeof value === "string"){
        return parseFloat(value)*1.6;
    }else{
        return value * 1.6;
    }
};

export const putInArray = <T>(value : T) : [T] =>{
    return [value]
};