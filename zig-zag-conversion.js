const zigZagConversion = (s, numRows) => {
    // check if the "s" is not going to change
    if(numRows === 1 || s.length <= numRows){
        return s;
        }
        // create rows and fill them with " " based on the rows given
        const rows = new Array(numRows).fill("")
        let index = 0
        let step = 1

        for(const char of s) {
            rows[index] += char
            if(index == 0 ){
                step = 1
            }else if(index == numRows - 1) {
                step = -1
            }
            index += step
        }
        return rows.join('')
}

const str = "Hudson "
console.log(str.length)
