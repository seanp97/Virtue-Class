
class Virtue {
    constructor() {}

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

    addArray(x, y) {
        this.x = x;
        this.y = y;
        return this.arrSum(x) + this.arrSum(y);
    }

    vtPowOf(x, y) {
        return x**y;
    }
}
