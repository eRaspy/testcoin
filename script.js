export function saveProgress(data) {
  console.log(data)
}

// Пример объекта с данными прогресса
const progressData = {
 items: ['energy', 'progressMax', 'count', 'progress', 'level'],
};

// Вызов функции для сохранения прогресса
saveProgress(progressData);


var globalVariable = 'const';

function TestFunction() {
  console.log(globalVariable); // 'const'
}

TestFunction();