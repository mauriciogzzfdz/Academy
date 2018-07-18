// "use strict";

// (function () {
//     const Luis = {
//         name: "Luis",
//         lastName: "Perez",
//         address: {
//             street: "1st Avenue",
//             city: "NY",
//         }
//     }
//     console.log(Luis);
//     const Mario = { ...Luis };
//     Mario.name = "Mario";
//     Mario.address.street = "2nd Avenue";

//     console.log(Mario);
//     console.log(Luis);
// })();

"use strict";

(function (global) {
    const stateGenerator = (initialState)=>{
        const state = initialState;
        return {
            getState: ()=>({...state}),
            agregaAlumno: (alumno)=> {state.alumnos.push(alumno)}
        }
    }
    window.stateGenerator = stateGenerator;
})(window);