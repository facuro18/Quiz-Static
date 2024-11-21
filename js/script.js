const STORE = {
  questions: {
    'HTML y semántica': [
      {
        question:
          '¿Qué etiqueta HTML se utiliza para incluir un archivo CSS externo?',
        code: `&lt;etiqueta&gt;&lt;/etiqueta&gt;`,
        answers: [
          '&lt;style&gt;',
          '&lt;css&gt;',
          '&lt;link&gt;',
          '&lt;stylesheet&gt;',
        ],
        correctAnswer: '<link>',
      },
      {
        question:
          '¿Qué propiedad CSS se usa para cambiar el color de fondo de un elemento?',
        code: `&lt;div role="progressbar"&gt;&lt;/div&gt;`,
        answers: ['color', 'background', 'background-color', 'fill'],
        correctAnswer: 'background-color',
      },
      {
        question: "¿Qué significa la 'R' en el modelo de diseño RWD?",
        code: ``,
        answers: ['Responsive', 'Resizable', 'Rapid', 'Render'],
        correctAnswer: 'Responsive',
      },
      {
        question:
          '¿Qué protocolo se utiliza comúnmente para la comunicación entre cliente y servidor en aplicaciones web?',
        code: ``,
        answers: ['FTP', 'HTTP', 'SMTP', 'IMAP'],
        correctAnswer: 'HTTP',
      },
      {
        question:
          '¿Cuál es un método accesible para crear íconos de imágenes navegables mediante el teclado?',
        code: ``,
        answers: [
          "&lt;img src='test.jpg' access='keyboard' ...&gt;",
          "&lt;nav keyboard='tab'&gt;&lt;img ...&gt;&lt;/nav&gt;",
          "&lt;img src='test.jpg' nav='true' ...&gt;",
          "&lt;input type='image' src='test.jpg' ...&gt;",
        ],
        correctAnswer: "&lt;input type='image' src='test.jpg' ...&gt;",
      },
    ],
    Arreglos: [
      {
        question: '¿Qué método usaríamos para devolver el valor 4?',
        code: `let arr = [2,4,6,8,10]`,
        answers: ['arr[4]', 'arr[2]', 'arr[3]', 'arr[1]'],
        correctAnswer: 'arr[1]',
      },
      {
        question: '¿Cómo agregaríamos un valor al final del array?',
        code: `let arr = 
['a','b','c','d','e']`,
        answers: [
          "arr.pop('f')",
          "arr.append('f')",
          "arr.add('f')",
          "arr.push('f')",
        ],
        correctAnswer: "arr.push('f')",
      },
      {
        question:
          '¿Qué usaríamos para eliminar y devolver el último valor del array?',
        code: `let arr = 
[3,1,4,1,5,9]`,
        answers: ['arr.remove(9)', "arr.grep('9')", 'arr.shift()', 'arr.pop()'],
        correctAnswer: 'arr.pop()',
      },
      {
        question: 'Cómo encontraríamos la longitud del siguiente array?',
        code: `let arr = 
[23,1,943,81,-52,3.14159]`,
        answers: ['arr.depth()', 'arr.index', 'arr.shift()', 'arr.length'],
        correctAnswer: 'arr.length',
      },
      {
        question:
          '¿En qué índice se encuentra el valor 9 en el siguiente array?',
        code: `let arr = 
[23,1,943,81,9,3.14159]`,
        answers: ['2', '3', '5', '4'],
        correctAnswer: '4',
      },
    ],
    'Bases de datos': [
      {
        question:
          '¿Qué comando SQL se utiliza para recuperar datos de una base de datos?',
        code: ``,
        answers: ['INSERT', 'DELETE', 'UPDATE', 'SELECT'],
        correctAnswer: 'SELECT',
      },
      {
        question:
          '¿Qué significa la sigla ACID en el contexto de las bases de datos?',
        code: ``,
        answers: [
          'Atomicidad, Consistencia, Independencia, Durabilidad',
          'Automatización, Consistencia, Integridad, Durabilidad',
          'Atomicidad, Consistencia, Aislamiento, Durabilidad',
          'Autenticidad, Consistencia, Independencia, Duplicación',
        ],
        correctAnswer: 'Atomicidad, Consistencia, Aislamiento, Durabilidad',
      },
      {
        question:
          '¿Qué tipo de base de datos organiza los datos en tablas relacionadas?',
        code: ``,
        answers: ['Relacional', 'NoSQL', 'Jerárquica', 'Grafos'],
        correctAnswer: 'Relacional',
      },
      {
        question:
          '¿Qué comando SQL se utiliza para modificar la estructura de una tabla existente?',
        code: ``,
        answers: [
          'ALTER TABLE',
          'CREATE TABLE',
          'UPDATE TABLE',
          'MODIFY TABLE',
        ],
        correctAnswer: 'ALTER TABLE',
      },
      {
        question:
          '¿Qué propiedad de las bases de datos relacionales permite que una tabla haga referencia a una clave primaria en otra tabla?',
        code: ``,
        answers: [
          'Llave secundaria',
          'Llave foránea',
          'Llave de unión',
          'Llave relacional',
        ],
        correctAnswer: 'Llave foránea',
      },
    ],
    CSS: [
      {
        question: '¿Qué es Flexbox?',
        code: ``,
        answers: [
          'Una biblioteca de JavaScript para diseño responsivo',
          'Un marcado HTML que permite contenido flexible',
          'Un enfoque de desarrollo para crear HTML semántico',
          'Una colección de propiedades CSS para facilitar el diseño de páginas',
        ],
        correctAnswer:
          'Una colección de propiedades CSS para facilitar el diseño de páginas',
      },
      {
        question:
          'Para utilizar flexbox definimos un contenedor como flexbox. ¿Cuál es el CSS para hacer esto?',
        code: `.flex-container {
 ...
}`,
        answers: [
          'position: flex',
          'display: flexbox',
          'float: flexbox',
          'display: flex',
        ],
        correctAnswer: 'display: flex',
      },
      {
        question: '¿Que define flex-basis?',
        code: `.flex-item {
 flex-basis: 20px;
}`,
        answers: [
          'La base del elemento flexible',
          'El margen del elemento flexible',
          'La negrita del elemento flexible',
          'El tamaño inicial del elemento flexible',
        ],
        correctAnswer: 'El tamaño inicial del elemento flexible',
      },
      {
        question: '¿Qué valores podemos utilizar para flex-direction?',
        code: `.flex-container {
 flex-direction: ...
}`,
        answers: [
          'flex-start, flex-end, space-between, space-around',
          'start, center, end, space-evenly',
          'horizontal, vertical, reverse-horizontal, reverse-vertical',
          'row, row-reverse, column, column-reverse',
        ],
        correctAnswer: 'row, row-reverse, column, column-reverse',
      },
      {
        question:
          '¿Qué te permite hacer el orden de propiedades CSS para elementos flexibles?',
        code: `.flex-item {
 order: ...
}`,
        answers: [
          'Especificar la dirección en la que aparecen los elementos flexibles',
          'Definir cuándo se carga cada elemento flexible',
          'Ordenar los elementos flexibles por diferentes valores (alfabético, numérico)',
          'Especificar en qué orden aparecen los elementos flexibles',
        ],
        correctAnswer:
          'Especificar en qué orden aparecen los elementos flexibles',
      },
    ],
    'APIs, fetch': [
      {
        question:
          '¿Qué método de JavaScript se utiliza para realizar solicitudes HTTP?',
        code: ``,
        answers: ['fetch()', 'get()', 'post()', 'request()'],
        correctAnswer: 'fetch()',
      },
      {
        question:
          '¿Qué propiedad del objeto Response se utiliza para obtener los datos en formato JSON?',
        code: ``,
        answers: [
          'response.text()',
          'response.json()',
          'response.data()',
          'response.body()',
        ],
        correctAnswer: 'response.json()',
      },
      {
        question:
          '¿Cuál es el propósito de las cabeceras en una solicitud fetch?',
        code: ``,
        answers: [
          'Definir los parámetros de búsqueda',
          'Especificar la URL de la solicitud',
          'Proporcionar metadatos adicionales sobre la solicitud o respuesta',
          'Indicar el tiempo de espera de la solicitud',
        ],
        correctAnswer:
          'Proporcionar metadatos adicionales sobre la solicitud o respuesta',
      },
      {
        question: '¿Cómo capturamos errores al usar fetch?',
        code: `
fetch('https://api.example.com/data')
  .then(response => response.json())
  ... // ¿Qué sigue aquí?`,
        answers: [
          '.finally(callback)',
          '.catch(callback)',
          '.thenError(callback)',
          '.onError(callback)',
        ],
        correctAnswer: '.catch(callback)',
      },
      {
        question: '¿Qué significa que fetch es una API basada en promesas?',
        code: ``,
        answers: [
          'Que siempre devuelve un objeto JSON',
          'Que se ejecuta de manera sincrónica',
          'Que permite manejar resultados de manera asíncrona con .then() y .catch()',
          'Que requiere una biblioteca externa para funcionar',
        ],
        correctAnswer:
          'Que permite manejar resultados de manera asíncrona con .then() y .catch()',
      },
    ],

    'Concepto, definiciones y logica de programación': [
      {
        question: '¿Qué significa CSS?',
        code: ``,
        answers: [
          'Creative Standard Solution',
          'Color, Style, Scale',
          'Compressed Specific Structure',
          'Cascading Style Sheets',
        ],
        correctAnswer: 'Cascading Style Sheets',
      },
      {
        question: '¿Cómo establecerías un color de fondo rojo?',
        code: ``,
        answers: [
          'backgroundcolor: red',
          'color: red',
          'bg-color: red',
          'background-color: red',
        ],
        correctAnswer: 'background-color: red',
      },
      {
        question: '¿Qué hace box-sizing: border box?',
        code: `box-sizing: border-box;`,
        answers: [
          'Agrega un borde al elemento',
          'Obliga al elemento a mantener la forma rectangular',
          'Elimina cualquier propiedad de un borde existente',
          'Obliga a que las dimensiones del margen, el relleno y el borde incluyan su ancho',
        ],
        correctAnswer:
          'Obliga a que las dimensiones del margen, el relleno y el borde incluyan su ancho',
      },
      {
        question:
          '¿Cuál es la diferencia entre position: inline y position: inline-block?',
        code: `
	  position: inline;
	  position: inline-block;`,
        answers: [
          'inline solo se usa para definir márgenes y relleno exclusivos',
          'inline-block solo se usa para definir márgenes adicionales',
          'inline se usa para evitar que los elementos se ajusten a filas diferentes en pantallas grandes',
          'inline-block permite que un usuario defina un ancho y una altura',
        ],
        correctAnswer:
          'inline-block permite que un usuario defina un ancho y una altura',
      },
      {
        question:
          "¿De qué color sería el párrafo: &lt;p id='foo' class='para'&gt; ?",
        code: `* { color: cyan; }
#foo { color: yellow; }
.para { color: red; }
p.para { color: blue; }`,
        answers: ['cyan', 'red', 'blue', 'yellow'],
        correctAnswer: 'yellow',
      },
    ],
    'Estructuras condicionales': [
      {
        question:
          '¿Qué operador se utiliza para combinar múltiples condiciones en una declaración if?',
        code: ``,
        answers: ['&&', '||', '!', '&'],
        correctAnswer: '&&',
      },
      {
        question: '¿Cuál es el resultado de este bloque de código?',
        code: `if(10 > 5 || 3 > 7) { return "A"; } 
else { return "B"; }`,
        answers: ['A', 'B', 'true', 'false'],
        correctAnswer: 'A',
      },
      {
        question:
          '¿Qué operador se usa para evaluar la negación de una condición?',
        code: ``,
        answers: ['!=', '!==', '&&', '!'],
        correctAnswer: '!',
      },
      {
        question: '¿Qué retornará este bloque de código?',
        code: `let age = 18;
if(age >= 18) { return "Adulto"; }
else { return "Menor"; }`,
        answers: ['Adulto', 'Menor', 'undefined', '18'],
        correctAnswer: 'Adulto',
      },
      {
        question:
          '¿Cómo podemos escribir este bloque en una línea usando el operador ternario?',
        code: `if(score &gt;= 50) { return "Aprobado"; } else { return "Reprobado"; }`,
        answers: [
          'score ? "Aprobado" : "Reprobado"',
          'score &gt;= 50 ? "Aprobado" : "Reprobado"',
          'score : "Aprobado" || "Reprobado"',
          'score &gt;= 50 ? "Reprobado" : "Aprobado"',
        ],
        correctAnswer: 'score &gt;= 50 ? "Aprobado" : "Reprobado"',
      },
    ],

    'Clases y objetos': [
      {
        question: '¿Cómo definimos una clase en JavaScript?',
        code: ``,
        answers: [
          'function ClassName(){}',
          'class ClassName {}',
          'create class ClassName',
          'ClassName {}',
        ],
        correctAnswer: 'class ClassName {}',
      },
      {
        question:
          '¿Qué palabra clave usamos para crear una instancia de una clase?',
        code: `class Car {
 constructor(make, model) {
   this.make = make;
   this.model = model;
 }
}
let car = ...`,
        answers: ['new', 'create', 'class', 'instance'],
        correctAnswer: 'new',
      },
      {
        question: '¿Qué retornará el siguiente código?',
        code: `class Person {
 constructor(name) {
   this.name = name;
 }
 greet() {
   return 'Hello, ' + this.name;
 }
}
const john = new Person('John');
john.greet();`,
        answers: ['Hello,', 'John', 'Hello, John', 'undefined'],
        correctAnswer: 'Hello, John',
      },
      {
        question: '¿Cómo accedemos a una propiedad estática de una clase?',
        code: `class MathUtils {
 static pi = 3.1416;
}
const value = ...`,
        answers: [
          'MathUtils.pi',
          'new MathUtils().pi',
          'MathUtils.prototype.pi',
          'MathUtils::pi',
        ],
        correctAnswer: 'MathUtils.pi',
      },
      {
        question:
          '¿Qué palabra clave usamos para heredar propiedades y métodos de otra clase?',
        code: `class Animal {
 speak() {
   return 'I am an animal';
 }
}
class Dog extends Animal {
 speak() {
   return super.speak() + ' and a dog';
 }
}`,
        answers: ['inherit', 'extend', 'super', 'extends'],
        correctAnswer: 'extends',
      },
    ],
    'Versionado y despliegue': [
      {
        question: '¿Qué significa el término "version control"?',
        code: ``,
        answers: [
          'Un proceso para escribir código más rápido',
          'Un sistema para gestionar cambios en el código fuente a lo largo del tiempo',
          'Una herramienta para automatizar el despliegue de aplicaciones',
          'Una práctica para crear copias de seguridad de bases de datos',
        ],
        correctAnswer:
          'Un sistema para gestionar cambios en el código fuente a lo largo del tiempo',
      },
      {
        question: '¿Cuál es la función principal del comando "git clone"?',
        code: ``,
        answers: [
          'Subir cambios locales a un repositorio remoto',
          'Descargar una copia completa de un repositorio remoto',
          'Unir diferentes ramas en un repositorio',
          'Eliminar un repositorio de manera remota',
        ],
        correctAnswer: 'Descargar una copia completa de un repositorio remoto',
      },
      {
        question:
          '¿Qué comando usamos para combinar cambios de una rama en otra en Git?',
        code: ``,
        answers: ['git merge', 'git pull', 'git push', 'git branch'],
        correctAnswer: 'git merge',
      },
      {
        question:
          '¿Qué archivo comúnmente se usa para ignorar ciertos archivos o carpetas en un repositorio de Git?',
        code: ``,
        answers: ['ignore.conf', '.gitconfig', '.gitignore', '.gitkeep'],
        correctAnswer: '.gitignore',
      },
      {
        question:
          '¿Qué es un "pipeline" en un sistema de integración y despliegue continuo (CI/CD)?',
        code: ``,
        answers: [
          'Un repositorio donde se almacenan las versiones de una aplicación',
          'Una secuencia automatizada de pasos para compilar, probar y desplegar una aplicación',
          'Un conjunto de comandos para crear un servidor de pruebas',
          'Un sistema para gestionar múltiples ramas en Git',
        ],
        correctAnswer:
          'Una secuencia automatizada de pasos para compilar, probar y desplegar una aplicación',
      },
    ],
    'Frameworks y librerías frontend': [
      {
        question: '¿Qué es una librería frontend?',
        code: ``,
        answers: [
          'Un conjunto de herramientas para escribir código en el backend',
          'Una colección de funciones y componentes reutilizables para construir interfaces de usuario',
          'Un entorno para gestionar bases de datos en aplicaciones web',
          'Un editor de código especializado en desarrollo web',
        ],
        correctAnswer:
          'Una colección de funciones y componentes reutilizables para construir interfaces de usuario',
      },
      {
        question: '¿Cuál es una diferencia clave entre React y Angular?',
        code: ``,
        answers: [
          'React es una librería, mientras que Angular es un framework',
          'React usa TypeScript por defecto, mientras que Angular no',
          'Angular es más ligero que React',
          'React tiene un ciclo de vida más complejo que Angular',
        ],
        correctAnswer:
          'React es una librería, mientras que Angular es un framework',
      },
      {
        question: '¿Qué significa el término "virtual DOM" en React?',
        code: ``,
        answers: [
          'Un modelo que representa cómo se estructuran los datos en el backend',
          'Una copia ligera del DOM real que React utiliza para optimizar actualizaciones',
          'Un entorno donde se ejecutan las aplicaciones de React',
          'Un motor que compila aplicaciones frontend para ejecutarse más rápido',
        ],
        correctAnswer:
          'Una copia ligera del DOM real que React utiliza para optimizar actualizaciones',
      },
      {
        question:
          '¿Qué comando se utiliza para crear un nuevo proyecto con Vue CLI?',
        code: ``,
        answers: [
          'vue init <nombre-del-proyecto>',
          'vue create <nombre-del-proyecto>',
          'npm install vue <nombre-del-proyecto>',
          'create vue-app <nombre-del-proyecto>',
        ],
        correctAnswer: 'vue create <nombre-del-proyecto>',
      },
      {
        question:
          '¿Cuál es el propósito de un "component" en frameworks como React o Angular?',
        code: ``,
        answers: [
          'Un archivo donde se guardan todas las rutas de la aplicación',
          'Una unidad reutilizable que encapsula estructura, estilo y comportamiento de UI',
          'Una función que conecta el frontend con el backend',
          'Un método que mejora el rendimiento del DOM',
        ],
        correctAnswer:
          'Una unidad reutilizable que encapsula estructura, estilo y comportamiento de UI',
      },
    ],
  },
}

// Make the quiz. Create a model for our app's state
function makeQuiz() {
  // Creating an object to store the app's state when beginning the quiz
  return {
    // Gathering a random question out of the available questions for each category
    questions: helpers.getRandomQuestions(STORE),
    // Boolean for if the quiz is in progress or not
    midQuiz: false,
    // Array of correct/incorrect answers to use for our progress bar
    progress: {
      progressBar: [],
      incorrectCategories: [],
    },
    // Boolean to determine if the end state should display
    completed: false,
    // Monitoring which question we are currently on
    currentQuestion: 0,
    // Keeps track of total correct answers
    correctAnswers: 0,
    // Keeps current selected answer
    currentAnswer: '',
    // Keeps track of % completed
    percCorrect: 0,
  }
}

// Apply fadeOut animations and set the stage for DOM text/element changes
function $fade(appState) {
  // This is the completed state of of a quiz
  if (appState.completed) {
    // Fade out elements with a promise to avoid choppy behavior
    $.when(
      $('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(
        500
      )
    ).done(function () {
      // Mostrar resultados después de la animación de salida
      $showResults(appState)
      $('.results-wrapper').hide().removeClass('hide') // Ocultar antes de mostrar
      $('.question-answer-wrapper, .results-wrapper').fadeIn(500) // Fade in de los resultados
    })

    // This is if the app is just starting
  } else if (appState.midQuiz === false) {
    // Set a flag that the app has begun
    appState.midQuiz = true
    // Fade out elements with a promise to avoid choppy behavior
    $.when(
      $(
        '.question-answer-wrapper, .question-wrapper, .code, .answer-wrapper, .start-quiz, .quit-quiz, .results-wrapper, .progress, .progress-bar'
      ).fadeOut(500)
    ).done(function () {
      // Remove any progress from a previous quiz (if any);
      helpers.updateProgressBar(appState)
      $('.progress-count').html('1 / 10')
      $('.progress-perc').html('')
      // Kill previous results
      $('.failures').remove()
      // Lots to do... mostly just setting up a new environment for a new quiz
      $updateQuestion(appState)
      $('progress-bar').empty()
      $('progress-fill').html(
        'Progress: <span class="progress-count">1 / 10</span><span class="progress-perc"></span>'
      )
      $('.question-answer-wrapper, .answer-wrapper').removeClass('begin')
      $('.submit-btn, .progress, .progress-bar').removeClass('hide')
      $('.progress, .progress-bar').hide()
      $(
        '.question-answer-wrapper, .question-wrapper, .answer-wrapper, .progress, .progress-bar'
      ).fadeIn(500)
      if (!$('.code').hasClass('hide')) {
        $('.code').fadeIn(500)
      }
    })

    // This is if the app is in the middle of execution
  } else if (appState.midQuiz) {
    $.when(
      $('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(
        500
      )
    ).done(function () {
      $updateQuestion(appState)
      $('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeIn(
        500
      )
    })
  }
}

// Work in progress...
function $showResults(appState) {
  // Inicialización del mensaje final y feedback
  let endMsg = ''
  let endFeedback = ''
  let $failList = $('<ul class="failures"></ul>')

  // Verificar si el usuario obtuvo el puntaje perfecto
  if (appState.correctAnswers === 10) {
    endMsg = `¡Obtuviste ${appState.percCorrect}% correcto! No tengo nada más que enseñarte. ¡Sigue adelante y prospera!`
    endFeedback = '' // No hace falta feedback extra si todo está perfecto
  } else {
    endMsg = `Obtuviste ${appState.percCorrect}% correcto!`

    // Verifica si hay categorías incorrectas en el progreso
    if (appState.progress.incorrectCategories.length === 0) {
      endFeedback = `¡Lo hiciste! Buen trabajo.`
    } else {
      endFeedback = `Es posible que desees estudiar las siguientes categorías:`

      // Agrega las categorías incorrectas a la lista de fallos
      appState.progress.incorrectCategories.map(cat => {
        $failList.append("<li class='category'>" + cat + '</li>')
      })
    }
  }

  // Actualizar la interfaz de usuario
  $('.quiz-end-score').html(endMsg)
  $('.quiz-end-feedback-p').html(endFeedback)
  $('.quiz-end-categories').empty().append($failList) // Limpiar y agregar categorías fallidas
  $('.results-wrapper').removeClass('hide').css('display', 'flex')

  // Mostrar los resultados con una animación fadeIn
  $(
    '.question-answer-wrapper, .results-wrapper, .quiz-end-feedback, .quiz-end-score, .retry-btn'
  )
    .css('display', 'flex')
    .fadeIn(500)
}

// Update the question, code, answers, buttons in the DOM while we're in a faded out state
function $updateQuestion(appState) {
  $('.answer-btn').remove()

  // Update the question and code text with the current question
  $('.question').html(appState.questions[appState.currentQuestion].question)

  // This is a hack to hide/show the code portion
  // Only 1/3 of the questions contain code so we hide it if they aren't present
  if (appState.questions[appState.currentQuestion].code == ``) {
    $('.code').addClass('hide')
  } else {
    $('.code').removeClass('hide')
    $('.code').html(
      `<pre>${appState.questions[appState.currentQuestion].code}</pre>`
    )
  }

  // Change continue back to submit
  $('.continue-btn')
    .val('Contestar')
    .removeClass('continue-btn')
    .addClass('submit-btn')
    .prop('disabled', true)

  // Add in available answers for the question
  let $answers = []

  // Adding the answers to a temporary array
  for (
    let i = 0;
    i < appState.questions[appState.currentQuestion].answers.length;
    i++
  ) {
    // Add current question answers to an array
    let $answer = $('<button class="answer-btn" type="button"></button>')
    $answer.html(appState.questions[appState.currentQuestion].answers[i])
    $answers.push($answer)
  }

  // Shuffle the answers
  helpers.shuffleAnswers($answers)

  // Push answers to the DOM
  $answers.forEach(answer => {
    $('.answer-wrapper').prepend(answer)
  })
}

// Simple class and enable/disable DOM selection when answer is selected
function selectAnswer(answer) {
  $('.answer-btn').removeClass('selected')
  answer.addClass('selected')
  $('.submit-btn').prop('disabled', false)
}

// Answer is selected and submitted
// Push a feedback state
function submitAnswer(appState) {
  // This will be returned true or false based on their answer
  let correct

  // Add styles to the answers to show if their answer was correct or not
  $('.answer-btn').each(function () {
    if (
      $(this).html() ===
      appState.questions[appState.currentQuestion].correctAnswer
    ) {
      $(this).addClass('pass')
      // If answer is correct and selected...
      if ($(this).hasClass('selected')) {
        correct = 'pass'
        appState.correctAnswers++
        appState.questions[appState.currentQuestion]
      }

      // Handle correct answer if selected answer is incorrect
    } else if ($(this).hasClass('selected')) {
      $(this).addClass('fail dim-answer')
      correct = 'fail'
      appState.progress.incorrectCategories.push(
        appState.questions[appState.currentQuestion].category
      )

      // Dim the other answers to make the correct one more prevalent
    } else {
      $(this).addClass('dim-answer')
    }
  })

  // Add a progress bar indicator to our appState object
  appState.progress.progressBar.push(
    `<div class="progress-indicator ${correct}"></div>`
  )

  // Update our percent correct (parse a float and set it to a fixed percentage)
  appState.percCorrect = parseFloat(
    (appState.correctAnswers / (appState.currentQuestion + 1)) * 100
  ).toFixed()

  // Update our current question VS total quiz length
  $('.progress-count').html(`
		${appState.currentQuestion + 1} / ${appState.questions.length}
	`)

  // Update our current correct percentage
  $('.progress-perc').html(`
		 // ${appState.percCorrect}% Correcto
	`)

  // Change submit back to continue
  $('.submit-btn')
    .val('Continuar')
    .removeClass('submit-btn')
    .addClass('continue-btn')

  // Disable selecting answers
  $('.answer-btn').prop('disabled', true)

  // Update our progress-bar DOM
  helpers.updateProgressBar(appState)

  // Continue to next question
  appState.currentQuestion++

  // Verify if we're done or not
  if (appState.currentQuestion === appState.questions.length) {
    appState.completed = true
  }
}

// Silly easter egg for saying you don't want to do the quiz
function killQuiz() {
  $('.start-quiz, .quit-quiz').hide()
  let failureMsg =
    'No creciste. No mejoraste. Tomaste un atajo y no ganaste nada. Experimentaste una victoria hueca. Nada se arriesgó y nada se ganó.'
  let msgSplit = failureMsg.split(' ')
  let counter = 0
  $('.question').empty()
  let startTroll = setInterval(function () {
    $('.question').append(msgSplit[counter] + ' ')
    counter++
    if (counter > msgSplit.length - 1) {
      clearInterval(startTroll)
      $('.start-quiz').text('Puedes hacerlo! Empezar Quiz').fadeIn(500)
    }
  }, 250)
}

// These are simple algorithms to modify data that don't need an individual function
let helpers = {
  // Pick a random question from the available ones
  pickRandomQ: function (obj, section) {
    return Math.floor(Math.random() * obj.questions[section].length)
  },
  // Gather a random question from every category
  getRandomQuestions: function (obj) {
    let questions = []
    let categories = Object.keys(obj.questions)
    console.log(categories)
    categories.forEach(cat => {
      let randomQ = this.pickRandomQ(obj, cat)
      let question = obj.questions[cat][randomQ]
      question.category = cat
      questions.push(question)
    })
    return questions
  },
  // Shuffle the answers so they don't appear in the same order
  shuffleAnswers: function (arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  },
  // Update progress bar DOM element
  updateProgressBar: function (appState) {
    $('.progress-bar').empty()
    appState.progress.progressBar.forEach(progInd => {
      $('.progress-bar').append(progInd)
    })
  },
}

// Lets start the show
$(function () {
  // Kill any form refresh
  $('.answer-wrapper').on('submit', function (e) {
    e.preventDefault()
  })

  // Storage for quiz app state
  let quizData

  // Start quiz
  $('.start-quiz, .retry-btn').on('click', function () {
    quizData = makeQuiz()
    $fade(quizData)
  })

  // Select an answer
  $('.question-answer-wrapper').on('click', '.answer-btn', function () {
    selectAnswer($(this))
  })

  // Submit your answer to display feedback and advance question counter
  $('.question-answer-wrapper').on('click', '.submit-btn', function (e) {
    submitAnswer(quizData)
  })

  // Submit your answer to display feedback and advance question counter
  $('.question-answer-wrapper').on('click', '.continue-btn', function () {
    $fade(quizData)
  })

  // Easter egg to chastize the user
  $('.quit-quiz').on('click', function () {
    killQuiz()
  })
})
