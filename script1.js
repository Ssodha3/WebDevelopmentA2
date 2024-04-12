 //when html is loaded
document.addEventListener("DOMContentLoaded", () => {
    function generateSong(num){
        var nnum = Number(num);
        var song ="";

        //print the song while no is more than 1
        while(nnum > 1){
            var part1 = `${nnum} bottles of mango juice in the fridge, ${nnum} bottles of mango juice.`;
            //decrease no value by 1
            nnum -= 1;
            var part2 = `Take one down, pass it around, ${nnum} bottles of mango juice in the fridge.`
            //add song in song var and return it in last
            song = song + " " + part1 + " " + part2 + " ";
        }
        //when only 1 bottle left
        if(nnum == 1){
            var part3 = `${nnum} bottle of mango juice in the fridge, ${nnum} bottle of mango juice. Take one down, pass it around, no more bottles of mango juice in the fridge!`;
            song = song + part3;
        }
        return song;
    }   
    const btn = document.getElementById('start');
    //btn click event
    btn.addEventListener('click', function(e){
            e.preventDefault();
            //convert input in no 
            const Snumber = Number(document.getElementById('snum').value);       
            //if no is 1 or more than one call function
            if(Snumber >= 1){
                const psong = generateSong(Snumber);
                //display song on page
                document.getElementById("printSong").textContent = psong;
                //color of song text
                document.getElementById('printSong').style.color = "darkmagenta";
                //alignment of song text
                document.getElementById('printSong').style.textAlign = "justify"; 
            }
            else{
                //error msg if no entered is 0 or in negative
                document.getElementById('printSong').textContent = "Enter number greater than or equal to 1.";  
                //color of error msg
                document.getElementById('printSong').style.color = "red";
                //alignment of error msg
                document.getElementById('printSong').style.textAlign = "center";
            }                 
    }) 
})

  