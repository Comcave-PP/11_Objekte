
/***** Erinnerung: Arrays *******/

// let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");

// // nested arrays [[[]]]
// // hier [[],[]]
// arr =   [
//                 ["Ich","bin","Max"],
//                 ["Ich","bin","Moritz"]
//         ];

// // output(arr);
// // output(arr[0]);
// // output(arr[0][2]);
// // output(arr[1][0]);

// // nested loop
// for (let i = 0; i < arr.length; i++)
// {
//         for(let j = 0; j < arr[i].length; j++)
//         {
//                 output(arr[i][j]);
//         }
        
// }


/***** Objekte 1 Daten/Funktionen *******/

let person =    {

                        firstName: "Marinus",
                        familyName: "Feeling",
                        salary: [120000, 160000],
                        permission: true,
                        sayHello:
                                function()
                                {
                                    return "Hallo ich bin " + this.firstName;    
                                }

                };


output(person);
output(person.familyName);
output(person.permission);
output(person.salary);

person.familyName = "Fehling";
output(person.sayHello());

const txt =     "Ich bin " + person.firstName + " " +
                person.familyName +
                " und verdiene " +
                person.salary[1] + " p.a";


output(txt);



/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}