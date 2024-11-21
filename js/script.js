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
    'Arreglos': [
      {
        question: '¿Qué método usaríamos para devolver el valor 4?',
        code: `let arr = [2,4,6,8,10]`,
        answers: ['arr[4]', 'arr[2]', 'arr[3]', 'arr[1]'],
        correctAnswer: 'arr[1]',
      },
      {
        question: '¿Cómo agregaríamos un valor al final de la matriz?',
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
          '¿Qué usaríamos para eliminar y devolver el último valor de la matriz?',
        code: `let arr = 
[3,1,4,1,5,9]`,
        answers: ['arr.remove(9)', "arr.grep('9')", 'arr.shift()', 'arr.pop()'],
        correctAnswer: 'arr.pop()',
      },
      {
        question: 'How would we find the length of the following array?',
        code: `let arr = 
[23,1,943,81,-52,3.14159]`,
        answers: ['arr.depth()', 'arr.index', 'arr.shift()', 'arr.length'],
        correctAnswer: 'arr.length',
      },
      {
        question: '¿En qué índice se encuentra el valor 9 en la siguiente matriz?',
        code: `let arr = 
[23,1,943,81,9,3.14159]`,
        answers: ['2', '3', '5', '4'],
        correctAnswer: '4',
      },
    ],
    'HTML5': [
      {
        question: '¿Cuáles son los 3 elementos básicos necesarios para una página HTML?',
        code: ``,
        answers: [
          '&lt;header&gt;, &lt;main&gt;, &lt;footer&gt;',
          '&lt;start&gt;, &lt;middle&gt;, &lt;end&gt;',
          '&lt;html&gt;, &lt;body&gt;, &lt;script&gt;',
          '&lt;html&gt;, &lt;head&gt;, &lt;body&gt;',
        ],
        correctAnswer: '&lt;html&gt;, &lt;head&gt;, &lt;body&gt;',
      },
      {
        question:
          '¿Qué elemento HTML es el encabezado más grande y, por lo general, solo debe usarse una vez?',
        code: ``,
        answers: [
          '&lt;heading&gt;',
          '&lt;title&gt;',
          '&lt;h6&gt;',
          '&lt;h1&gt;',
        ],
        correctAnswer: '&lt;h1&gt;',
      },
      {
        question: '¿Qué elemento HTML crea un salto de línea?',
        code: `
&lt;p&gt;The quick brown fox... 
&lt;tag&gt;jumped over the lazy dogs&lt;/p&gt;`,
        answers: ['&lt;break&gt;', '&lt;hr&gt;', '&lt;lb&gt;', '&lt;br&gt;'],
        correctAnswer: '&lt;br&gt;',
      },
      {
        question: '¿Cómo creamos un enlace HTML?',
        code: ``,
        answers: [
          "&lt;link href='test.com'&gt;Test.com&lt;/link&gt;",
          "&lt;a src='test.com'&gt;Test.com&lt;/a&gt;",
          "&lt;href url='test.com'&gt;Test.com&lt;/href&gt;",
          "&lt;a href='test.com'&gt;Test.com&lt;/a&gt;",
        ],
        correctAnswer: "&lt;a href='test.com'&gt;Test.com&lt;/a&gt;",
      },
      {
        question: '¿Cuáles de estos elementos son todos elementos &lt;table&gt; ?',
        code: `&lt;table&gt;
 ... 
&lt;/table&gt;`,
        answers: [
          '&lt;thead&gt;, &lt;th&gt;, &lt;cell&gt;',
          '&lt;thead&gt;, &lt;tbody&gt;, &lt;row&gt;',
          '&lt;tbody&gt;, &lt;tr&gt;, &lt;cell&gt;',
          '&lt;thead&gt;, &lt;tr&gt;, &lt;td&gt;',
        ],
        correctAnswer: '&lt;thead&gt;, &lt;tr&gt;, &lt;td&gt;',
      },
    ],
    'CSS': [
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
        correctAnswer: 'Especificar en qué orden aparecen los elementos flexibles',
      },
    ],
    'APIs y fetch': [
      {
        question:
          '¿Cuáles se consideran los dos atributos más importantes para un formulario?',
        code: `
&lt;form ...&gt;
&lt;/form&gt;`,
answers: [
  'lang, process',
  'before, after',
  'id, class',
  'method, action',
],
correctAnswer: 'method, action',
},
{
  question: '¿Cuál es la diferencia entre los métodos GET y POST?',
  code: `
  &lt;form method='get'&gt;
  &lt;form method='post'&gt;`,
  answers: [
    'El método GET simplemente recupera datos, mientras que POST puede enviar y recibir',
    'El método POST simplemente envía datos, mientras que GET puede enviar y recibir',
    'El método POST se utiliza para diferentes tipos de bases de datos',
    'El método GET envía toda la información en la URL',
  ],
  correctAnswer: 'El método GET envía toda la información en la URL',
},
{
  question: '¿Cuáles son los dos tipos de bucles en JavaScript?',
  code: ``,
  answers: [
    'loop, cycle',
    'inclusive, exclusive',
    'anonymous, declared',
    'for, while',
  ],
  correctAnswer: 'for, while',
},
{
  question: '¿En qué orden consisten las 3 condiciones de un bucle for?',
  code: `for(...;...;...){`,
  answers: [
    'variables; condición inicial; expresión final',
    'variables; contador; función',
    'iteración; inicialización; condición',
    'inicialización; condición; expresión final',
  ],
  correctAnswer: 'inicialización; condición; expresión final',
},
{
  question: '¿Qué condicional usaríamos para ejecutar este bucle 5 veces?',
  code: `for(let i=0;...; i++){`,
  answers: ['i===5', '5', 'i&lt;=5', 'i&lt;5'],
  correctAnswer: 'i&lt;5',
},
	    {
  question: '¿Qué ocurre cuando la condición de un bucle while siempre es verdadera?',
  code: `while(5===5){ ... }`,
  answers: [
    'El código de ejecución nunca se ejecutará',
    'El código de ejecución se ejecutará una vez',
    'Un error de sintaxis detendrá la página en tiempo de ejecución',
    'El código de ejecución se ejecutará indefinidamente',
  ],
  correctAnswer: 'El código de ejecución se ejecutará indefinidamente',
},
{
  question: '¿A qué será igual la variable count al final de este bucle?',
  code: `
let count = 0;
for(let i=0; i&lt;3; i++){
 count+=1;
}
return count;`,
  answers: ['1', '2', '0', '3'],
  correctAnswer: '3',
},
{
  question: '¿Cómo convertimos esta cadena de palabras en un arreglo de palabras completas?',
  code: `let str = 
"The quick brown fox 
jumped over the lazy dogs"`,
  answers: [
    'str.split()',
    "str.words('')",
    "str.convert('')",
    "str.split(' ')",
  ],
  correctAnswer: "str.split(' ')",
},
{
  question: '¿Cómo reemplazaríamos la segunda palabra en esta cadena por la palabra "will"?',
  code: `let str = "I cannot code well"`,
  answers: [
    "str.replace('will', 'cannot')",
    "str.convert('cannot', 'will')",
    "str.mask('will', 'cannot')",
    "str.replace('cannot', 'will')",
  ],
  correctAnswer: "str.replace('cannot', 'will')",
},
{
  question: '¿Cómo llamamos al método de este objeto?',
  code: `
let obj = {
 car: 'Car',
 sayCar: function(){
  console.log(this.car);
 }
}`,
  answers: [
    'function sayCar(obj)',
    'obj.function(sayCar)',
    'sayCar()',
    'obj.sayCar()',
  ],
  correctAnswer: 'obj.sayCar()',
},
{
  question: '¿Qué es un método JavaScript?',
  code: ``,
  answers: [
    'Un estilo de escribir código de una manera legible',
    'La etiqueta HTML que le permite escribir JavaScript en línea',
    'Un tipo de variable que permite que sea mutable',
    'Una propiedad de un objeto que ejecuta una función',
  ],
  correctAnswer: 'Una propiedad de un objeto que ejecuta una función',
},
{
  question: '¿Por qué no deberíamos usar funciones flecha de ES6 en declaraciones de métodos de objetos?',
  code: `
let obj = {
 car: "Audi",
 callCar: () =&gt; {
  return this.car 
 }
}`,
  answers: [
    'Las funciones flecha proporcionan propiedades adicionales que no son relevantes para el objeto',
    'Las funciones flecha requieren parámetros',
    'Las funciones flecha siempre son anónimas',
    'Las funciones flecha tienen un alcance diferente de this que el objeto',
  ],
  correctAnswer: 'Las funciones flecha tienen un alcance diferente de this que el objeto',
},
    ],
    'Programación backend': [
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
        question: '¿Cuáles son los dos tipos de declaraciones condicionales en JavaScript?',
        code: ``,
        answers: [
          'if, when',
          'choice, determined',
          'switch, then',
          'if, switch',
        ],
        correctAnswer: 'if, switch',
      },
      {
        question: 'Este bloque de codigo, ¿Que retornará?',
        code: `if(5&lt;=2){ return true; } 
else { return false; }`,
        answers: ['5 &gt; 2', 'true', '5 &lt;= 2', 'false'],
        correctAnswer: 'false',
      },
      {
        Pregunta: '¿Cuándo utilizarías una sentencia switch?',
Código: ``,
Respuestas: [
'Cuando quieres producir un resultado aleatorio',
'Si hay una variable involucrada que puede cambiar',
'Cuando necesitas cambiar un booleano a verdadero o falso',
'Cuando necesitas muchas acciones diferentes para muchas evaluaciones específicas',
        ],
        correctAnswer:
          'Cuando necesitas muchas acciones diferentes para muchas evaluaciones específicas',
      },
      {
        question: 'Este bloque de codigo, ¿Que retornará?',
        code: `let foo = 1;
if(foo){ return true; }
else { return false; }`,
        answers: ['1', 'false', 'foo', 'true'],
        correctAnswer: 'true',
      },
      {
        question: 'Este bloque de codigo, ¿Que retornará?',
        code: `let foo = 0;
if(foo && foo &lt; 5){
 return 1; }
else if(foo &lt; 5){ 
 return 2; }
else { 
 return 3; }`,
        answers: ['1', '3', 'false', '2'],
        correctAnswer: '2',
      },
    ],
    'Clases y objetos': [
      {
        question: '¿Cómo podemos registrar en console.log el valor de la marca de este coche?',
        code: `let car = {
 year: 2018,
 make: "Audi",
 model: "S4"
}`,
        answers: [
          'console.log(obj.car(make))',
          'console.log(car(make))',
          'console.log(make)',
          'console.log(car.make)',
        ],
        correctAnswer: 'console.log(car.make)',
      },
      {
        question:
          "¿Cómo insertamos todas las claves de un objeto en una nueva matriz llamada carProps?",
        code: `let car = {
 year: 2018,
 make: "Audi",
 model: "S4"
}`,
        answers: [
          'let carProps = car.keys(all)',
          'let carProps = [Object(car).keys()]',
          'let carProps = car.Object.keys()',
          'let carProps = Object.keys(car)',
        ],
        correctAnswer: 'let carProps = Object.keys(car)',
      },
      {
        question:
          '¿Cómo se llama una propiedad de un objeto que es una función?',
        code: `let car = {
 year: 2018,
 make: "Audi",
 model: "S4",
 displayName: function(){
  return this.year +
      + " "
      + this.make 
      + " "
      + this.model
 }
}`,
        answers: [
          'Object function',
          'Return function',
          'Function property',
          'Object method',
        ],
        correctAnswer: 'Object method',
      },
      {
        pregunta: '¿Qué hace que un objeto sea diferente de una matriz?',
código: ``,
respuestas: [
'Los objetos pueden contener cualquier estructura de datos, mientras que las matrices no',
'Las matrices solo son útiles como medio de almacenamiento, mientras que los objetos pueden contener funciones',
'Las matrices están limitadas a una sola dimensión, mientras que los objetos pueden estar anidados',
'Los objetos asocian claves y valores, mientras que las matrices son simplemente una lista de datos',
],
respuestacorrecta:
'Los objetos asocian claves y valores, mientras que las matrices son simplemente una lista de datos',
},
      {
        question: '¿Qué retornará console.log?',
        code: `let obj = {
 total: 5,
 multiplier: 4,
 multiply: function(){
  return 
   this.total *
   this.multiplier;
 }
}
console.log(obj.multiply()*2);`,
        answers: ['10', '8', '80', '40'],
        correctAnswer: '40',
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
      // Display results of the quiz
      $showResults(appState)
      $('.results-wrapper').hide().removeClass('hide')
      $('.question-answer-wrapper, .results-wrapper').fadeIn(500)
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
  if (appState.correctAnswers === 10) {
    let endMsg = `Obtuviste ${appState.percCorrect}% correcto!
No tengo nada más que enseñarte. ¡Sigue adelante y prospera!
`
  } else {
    $('.answer-btn').remove()
    let endMsg = `Obtuviste ${appState.percCorrect}% correcto!`
    let endFeedback = ``
    if (appState.progress.incorrectCategories.length === 0) {
      endFeedback = `Lo hiciste! Buen trabajo job!`
    } else {
      endFeedback = `Es posible que desee estudiar las siguientes categorías:`
    }

    $('.quiz-end-score').html(endMsg)
    let $failList = $('<ul class="failures"></ul>')
    appState.progress.incorrectCategories.map(cat => {
      $failList.append("<li class='category'>" + cat + '</li>')
    })
    $('.quiz-end-feedback-p').html(endFeedback)
    $('.quiz-end-categories').append($failList)
    $('.results-wrapper').removeClass('hide').css('display', 'flex')
    $(
      '.question-answer-wrapper, .results-wrapper, .quiz-end-feedback, .quiz-end-score, .retry-btn'
    )
      .css('display', 'flex')
      .fadeIn(500)
  }
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
