console.log("======= ESCOPE =======");

console.dir(this);

/*

      ----------------------------------
      |                                |
      |               WINDOW           |~=> ESCOPO GLOBAL (this)
      |                                |
      ----------------------------------
*/

function meuCurso() {
  return curso;
}

const curso = "HTML";

console.LOG(curso, window.meuCurso());
