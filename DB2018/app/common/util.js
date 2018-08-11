import React,{Componetnt} from 'react';

export default class Util{
    static getJSON(url,callBack){
        fetch(url)
        .then((response) => response.json())
        .then((ResponseDate)=>callBack(ResponseDate))
        .catch((error)=>console.log(error))
    }
}
