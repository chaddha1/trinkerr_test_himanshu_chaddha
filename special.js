let num1 = 13;
let num2 = 131;
let num3 = 2;

function checkSpecial(num){
    let numArr = breakNumber(num);
    let p1 = 0, p2 = numArr.length;
    let newNum = 0; let count = 0;
    console.log(numArr);
    
    while(p1 < p2){
        newNum = (numArr[p1]*numArr[p1]) + (numArr[p1+1]*numArr[p1+1]);
        count ++;
        if(newNum < 9 && newNum !==1){
            return -1;
        }else if(newNum > 9){
            numArr = breakNumber(newNum);
            p1 = 0;
            p2 = numArr.length;    
        }else if(newNum === 1){
            return count;
        }else{
            p1 +=2;
        }
        
    }
    
};

function breakNumber(num){
    const strNum = num.toString();
    let result = strNum.split('').map(n => Number(n));
    return result;
}

checkSpecial(num3);