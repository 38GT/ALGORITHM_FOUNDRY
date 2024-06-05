/*

0 보다 큰 두 정수 n,m이 주어졌을 때,
n^m을 재귀함수를 통해 구하여라.

*/

const solution = (n, m) => {
  if ((m === 0) | (n === 1)) return 1;
  return n * solution(n, m - 1);
};

console.log(solution(3, 4));
