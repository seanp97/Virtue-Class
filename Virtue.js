
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

    vtDate(format, date) {

        //UK or USA/US format only as arguments
        //Can be either Hyphens or Slashes -- 09-12-2020 OR 09/12/2020
        //vtDate("USA","09-12-2020") - USA || vtDate("USA,"09-12-2020") - USA
        //vtDate("USA","12-09-2020") - UK

        this.format = format;
        this.date = date;
        let year;
        let day;
        let month;
        format = format.toLowerCase();

        if (format == "UK".toLowerCase()) {
            year = date.substring(6, 10);
            day = date.substring(0, 2);
            month = date.substring(3, 5);
            if (day.includes("-") || day.includes("/")) {
                day = date.substring(0, 1);
            }
        }

        if (format == "USA".toLowerCase() || format == "US".toLowerCase()) {
            year = date.substring(6, 10);
            day = date.substring(3, 5);
            month = date.substring(0, 2);
            if (day.includes("-") || day.includes("/")) {
                day = date.substring(0, 1);
            }
        }

        let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let newDate = new Date(parseInt(year), parseInt(month -1), parseInt(day));
        let dayName = daysOfWeek[newDate.getDay()];

        if (month == "01") {
            month = "January";
        }
        if (month == "02") {
            month = "February";
        }
        if (month == "03") {
            month = "March";
        }
        if (month == "04") {
            month = "April";
        }
        if (month == "05") {
            month = "May";
        }
        if (month == "06") {
            month = "June";
        }
        if (month == "07") {
            month = "July";
        }
        if (month == "08") {
            month = "August";
        }
        if (month == "09") {
            month = "September";
        }
        if (month == "10") {
            month = "October";
        }
        if (month == "11") {
            month = "November";
        }
        if (month == "12") {
            month = "December";
        }

        if (day == 1 || day == 21 || day == 31) {
            return dayName + " " + day + "st " + month + " " + year;
        }
        if (day == 2 || day == 22) {
            return dayName + " " + day + "nd " + month + " " + year;
        }
        if (day == 3 || day == 23) {
            return dayName + " " + day + "rd " + month + " " + year;
        }
        if (day == 4 || day == 5 || day == 6 || day == 7 || day == 8 || day == 9 || day == 10 || day == 12 || day == 13 || day || 14 || day == 15 || day == 16 || day == 17 || day == 18 || day == 19 || day == 20 || day == 24 || day == 25 || day == 26 || day == 27 || day == 28 || day == 29 || day == 30) {
            return dayName + " " + day + "th " + month + " " + year;
        }
    }
}
