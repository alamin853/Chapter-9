// What is Pure Function?

    // `* It Returns the same result if given the same arguments`
    // `* It does not couse any observable side effects`


    // A Pure Function

            function sqr(num){
                return num * num
            }
            console.log(sqr(3))
            console.log(sqr(3))
            console.log(sqr(3))




    // Not Pure Function
            
            var n = 10

            function change(){
                n = 100
            }
            change()
            console.log(n)



            var point = {x: 10, y: 20}

            function printPoint(point){
                point.x = 100
                point.y = 200
                
                console.log(point)
            }
            printPoint(point)

            console.log(point)