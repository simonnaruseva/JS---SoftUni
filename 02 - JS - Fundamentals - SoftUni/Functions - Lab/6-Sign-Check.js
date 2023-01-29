function signCheck(firstNum, secondNum, thirdNum) {

    let sign = (a, b, c) =>  {
        let result = a * b * c;

        if(result > 0 ) {
            console.log('Positive'); 
        } else {
                console.log('Negative');
            }
            return result;
        }

      sign(firstNum, secondNum, thirdNum);
    }


signCheck( 5,
    12,
   -15
   );