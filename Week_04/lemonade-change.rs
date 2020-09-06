// 860. 柠檬水找零
impl Solution {
    pub fn lemonade_change(bills: Vec<i32>) -> bool {
        let mut five:i32 = 0;
        let mut ten:i32 = 0;
        let mut isDone: bool = true;
        for value in bills{
            if value == 5i32 {
                five += 1;
            }else if value == 10i32{
                if five == 0i32 {
                    isDone = false;
                }
                five -= 1;
                ten += 1;
            }else{
                if(five > 0 && ten > 0){
                    five -= 1;
                    ten -= 1;
                }else if(five >= 3){
                     five -= 3;
                }else{
                    isDone = false;
                }
            }
        }
        isDone
    }
}