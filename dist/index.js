import { exercicio1 } from "./exercicios/repeticao/exercicio1.js";
import { exercicio2 } from "./exercicios/repeticao/exercicio2.js";
import { exercicio3 } from "./exercicios/repeticao/exercicio3.js";
import { exercicio4 } from "./exercicios/repeticao/exercicio4.js";
import { exercicio5 } from "./exercicios/repeticao/exercicio5.js";
let btn_exercicio1 = document.querySelector('.btn-exercicio1');
btn_exercicio1?.addEventListener("click", function (event) {
    event.preventDefault();
    exercicio1();
});
let btn_exercicio2 = document.querySelector('.btn-exercicio2');
btn_exercicio2?.addEventListener("click", function (event) {
    event.preventDefault();
    exercicio2();
});
let btn_exercicio3 = document.querySelector('.btn-exercicio3');
btn_exercicio3?.addEventListener("click", function (event) {
    event.preventDefault();
    exercicio3();
});
let btn_exercicio4 = document.querySelector('.btn-exercicio4');
btn_exercicio4?.addEventListener("click", function (event) {
    event.preventDefault();
    exercicio4();
});
let btn_exercicio5 = document.querySelector('.btn-exercicio5');
btn_exercicio5?.addEventListener("click", function (event) {
    event.preventDefault();
    exercicio5();
});
//# sourceMappingURL=index.js.map