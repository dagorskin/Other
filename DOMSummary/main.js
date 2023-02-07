const h1 = document.createElement('h1') // Создание DOM элемента (заголовка 'h1') в HTML.
h1.textContent = 'Конспект DOM' // Добавление текста в тег 'h1' (<h1>Конспект DOM</h1>). Текст игнорирует внутри себя HTML теги.
document.body.prepend(h1) // Добавление DOM элемента 'h1' в начало тега HTML 'body' (или DOM элемента 'body').
h1.id = 'h1-id' // Изменение 'id' элемента (тега) 'h1'.
h1.classList.add('h1-class') // Добавление класса элементу (тегу) 'h1'.
h1.className = 'h1-class-changed' // Изменение класса элемента (тега) 'h1'. Если нет класса, то создаст.

const list = [ // Создание массива с DOM элементами (строки списка 'li').
  document.createElement('li'),
  document.createElement('li'),
  document.createElement('li'),
  document.createElement('li'),
  document.createElement('li')
]
list[0].textContent = 'Первая строка списка, которая будет зачеркнута.'
list[1].textContent = 'Вторая строка списка.'
list[2].textContent = 'Третья строка списка.'
list[3].textContent = 'Четвертая строка списка, которая будет удалена'
list[4].innerHTML = '<strike>Зачеркнутая строка.</strike>' // Добавление текста в тег 'li' через нулевой индекс массива. Текст НЕ игнорирует внутри себя HTML теги.
const ol = document.getElementById('ol') // Поиск элемента HTML по id и присваивание в переменную.
ol.append(list[0], list[1]) // Добавление двух первых строк списка в список 'ol'.
list[1].after(list[2]) // Добавление третьей строки списка ПОСЛЕ второй в список 'ol'.
list[1].before(list[3]) // Добавление четвертой строки списка ДО третьей в список 'ol'.
list[3].remove() // Удаление элемента 'li' из DOM.
ol.children[0].replaceWith(list[4]) // Замена первого дочернего элемента списка 'ol'.
ol.reversed = true // Добавление атрибута 'reversed' списку. Атрибут нужен для обратного отчета пунктов списка.
ol.start = '5' // Добавление атрибута 'start' списку. Атрибут заставляет список начинаться с 5 пункта.
ol.removeAttribute('start') // Удаление атрибута 'start' из списка 'ol'.
