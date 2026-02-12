class StringContainString{


    getAnotherString(Str, word){


        if(Str.indexOf(word) !== -1){

            return "String is found"
        }
else{
    return "Not found"
}






    }




}


const object = new StringContainString();
const result = object.getAnotherString('Javascript','script');
console.log(result);