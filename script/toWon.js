function toWon(value) {
    if (value === null || value === undefined || value === '') return '';
    const n = Number(String(value).replace(/[^0-9.-]/g, ''));
    if (Number.isNaN(n)) return '';
    return n.toLocaleString('ko-KR') + '\uC6D0';
}

function fromWon(value) {
    if (value === null || value === undefined || value === '') return 0;
    return Number(String(value).replace(/[^0-9.-]/g, '')) || 0;
}

// 테스트 예시
// console.log(toWon(3000)); // "3,000원"
// console.log(toWon('1200000')); // "1,200,000원"
// console.log(fromWon('3,000원')); // 3000

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { toWon, fromWon };
}


// 여기 쌤꺼 복사해오기