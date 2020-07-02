
class Virtue {

    numMax(x, y) {
        this.x = x;
        this.y = y;

        if(this.x > this.y) {
            return this.x + ": First argument";
        }
        else {
            return this.y + ": Second argument";
        }
    }

    numMin(x, y) {
        this.x = x;
        this.y = y;

        if (this.x < this.y) {
            return this.x + ": First argument";
        }
        else {
            return this.y + ": Second argument";
        }
    }

    numSquared(x) {
        this.x = x;
        return x*x;
    }

    sqRoot(x) {
        this.x = x;
        if (x > 0) {
            return x**(1/2);
        }
        else {
            return "Number needs to be greater than zero";
        }
    }

    evenOdd(x) {
        if(x % 2 == 0) {
            return "Even";
        }
        else {
            return "Odd";
        }
    }

    arrSum(x) {
        this.x = x;
        let Init = 0;
        for (let i = 0; i < x.length; i++) {
            Init += x[i];
        }
        return Init;
    }

    vtMean(x) {
        this.x = x;
        let arraySum = this.arrSum(x);
        let arrLen = x.length;
        let answer = arraySum / arrLen;
        return answer;
    }

    vtMedian(x) {
        this.x = x;
        let arrLen;

        if(x.length % 2 == 0) {
            arrLen = x.length / 2;
            return x[arrLen -1] + " & " + x[arrLen];
        }
        else {
            arrLen = x.length / 2 - 0.50;
            return x[arrLen];
        }
    }

    vtBubbleSort(x) {
        for(let j = 0; j < x.length; j++) {
            for (let i = 0; i < x.length; i++) {
                if (x[i] > x[i + 1]) {
                    let swap = x[i];
                    x[i] = x[i + 1];
                    x[i + 1] = swap;
                }
            }
        }
        return x;
    }

    arrMax(x, y) {
        this.x = x;
        this.y = y;
        x = this.arrSum(x);
        y = this.arrSum(y);

        if(x > y) {
            return x + ": First argument is bigger";
        }
        else {
            return y + ": Second argument is bigger";
        }
    }

    arrMin(x, y) {
        this.x = x;
        this.y = y;
        x = this.arrSum(x);
        y = this.arrSum(y);

        if(x < y) {
            return x + ": First argument is smaller";
        }
        else {
            return y + ": Second argument is smaller";
        }
    }

    addArray(x, y) {
        this.x = x;
        this.y = y;
        return this.arrSum(x) + this.arrSum(y);
    }

    containInString(word, string) {
        this.word = word;
        this.string = string;

        word = word.toLowerCase();
        string = string.toLowerCase();

        if (string.toLowerCase().includes(word.toLowerCase())) {
            return true;
        }
        else {
            return false;
        }
    }

    vtPowOf(x, y) {
        return x**y;
    }

    vtUpperCase(x) {
        if (x[0] == x[0].toUpperCase()) {
            return true;
        }
        else {
            return false;
        }
    }

    vtCheckNegative(x) {
        if (x > 0) {
            return false;
        }
        else {
            return true;
        }
    }

    vtMultiplication(x, y) {
        this.x = x;
        return x * y;
    }

    vtDivision(x, y) {
        this.x = x;
        if (x > 0 && y > 0) {
            return x / y;
        }
    }

    vtSubtraction(x, y) {
        this.x = x;
        this.y = y;

        return x - y;
    }

    vtAddition(x, y) {
        this.x = x;
        this.y = y;

        return x + y;
    }

    vtNextWholeNumber(x) {
        this.x = x;
        let a = x % 1;
        let remain = 1 - a;
        if (a > 0.5) {
            return x + remain;
        }
        else {
            return x - a;
        }
    }

    vtGetBiggestNumber(x) {
        this.x = x;
        let Init = 0;
        for (let i = 0; i < x.length; i++) {
            if (x[i] > Init) {
                Init = x[i];
            }
        }
        return Init;
    }

    vtGetLowestNumber(x) {
        this.x = x;
        let Init = 9007199254740991;
        for (let i = 0; i < x.length; i++) {
            if (x[i] < Init) {
                Init = x[i];
            }
        }
        return Init;
    }

    vtGetEvenCount(x) {
        this.x = x;
        let Count = 0;
        for (let i = 0; i < x.length; i++) {
            if (x[i] % 2 == 0) {
                Count++;
            }
        }
        return Count;
    }

    vtGetOddCount(x) {
        this.x = x;
        let Count = 0;
        for (let i = 0; i < x.length; i++) {
            if (x[i] % 2 != 0) {
                Count++;
            }
        }
        return Count;
    }

    vtStringEmpty(x) {
        this.x = x;
        if (x.trim() == "") {
            return true;
        }
        else {
            return false;
        }
    }

    vtPI() {
        return 3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067;
    }

    vtInterval(valInt, funcName) {
        this.valInt = valInt;
        this.funcName = funcName;
        setInterval(function () {
            funcName();
        }, valInt);
    }
}
