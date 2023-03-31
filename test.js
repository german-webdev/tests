
function getStringCount(object) {
    if (typeof object == 'string') return 1;
    if (!object) return 0;
    return Object.values(object).reduce((acc, cur) => acc + getStringCount(cur), 0);
}

console.log(getStringCount
({
  first: '1',
  second: '2',
  third: false,
  fourth: ['anytime', 2, 3, 4 ],
  fifth:  null,
})); // 3

console.log(getStringCount(['1', '2', ['3']])); // 3
