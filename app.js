const abjadValues = {
  'ا': 1, 'آ': 1, 'أ': 1, 'إ': 1, 'ٱ': 1, 'ء': 1,
  'ب': 2, 'پ': 2,
  'ج': 3, 'چ': 3,
  'د': 4,
  'ه': 5, 'ة': 5, 'ۀ': 5,
  'و': 6, 'ؤ': 6,
  'ز': 7, 'ژ': 7,
  'ح': 8,
  'ط': 9,
  'ي': 10, 'ی': 10, 'ى': 10, 'ئ': 10,
  'ك': 20, 'گ': 20, 'ک': 20,
  'ل': 30,
  'م': 40,
  'ن': 50,
  'س': 60,
  'ع': 70,
  'ف': 80,
  'ص': 90,
  'ق': 100,
  'ر': 200,
  'ش': 300,
  'ت': 400,
  'ث': 500,
  'خ': 600,
  'ذ': 700,
  'ض': 800,
  'ظ': 900,
  'غ': 1000
};

document.getElementById('calculateBtn').addEventListener('click', function() {
  const inputAyat = document.getElementById('inputAyat').value;
  const totalValue = calculateTotalValue(inputAyat);
  const letterCount = calculateLetterCount(inputAyat);
  const repeatedLetters = calculateRepeatedLetters(inputAyat);

  document.getElementById('totalValue').textContent = totalValue;
  document.getElementById('letterCount').textContent = letterCount;
  document.getElementById('repeatedLetters').textContent = repeatedLetters;
});

function calculateTotalValue(text) {
  let total = 0;
  for (const char of text) {
      total += abjadValues[char] || 0;
  }
  return total;
}

function calculateLetterCount(text) {
  const filteredText = text.replace(/[^ا-ي]/g, '');  
  return filteredText.length;
}

function calculateRepeatedLetters(text) {
  const filteredText = text.replace(/[^ا-ي]/g, '');
  const letterCounts = {};
  for (const char of filteredText) {
      letterCounts[char] = (letterCounts[char] || 0) + 1;
  }
  return Object.entries(letterCounts)
      .map(([letter, count]) => `${letter}: ${count}`)
      .join(', ');
}
