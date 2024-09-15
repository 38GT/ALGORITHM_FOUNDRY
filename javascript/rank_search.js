function solution(info, query) {
    const candidates = new Array(query.length).fill(0);

    // info를 조건별로 분류
    const data_info = info.map(string => {
        const arr = string.split(" ");
        arr[4] = parseInt(arr[4]); // score를 숫자로 변환
        return arr;
    });

    const data_query = query.map(string => {
        const arr = string.split(" ").filter(string => string !== 'and');
        arr[4] = parseInt(arr[4]); // query의 score도 숫자로 변환
        return arr;
    });

    // info의 점수를 오름차순 정렬하여 이진 탐색 가능하게 만들기
    data_info.sort((a, b) => a[4] - b[4]);

    // 각 쿼리에 대해 처리
    data_query.forEach((q, index) => {
        let [lang_con, pos_con, jors_con, food_con, query_score] = q;

        // 이진 탐색으로 query_score 이상의 첫 번째 인덱스를 찾음
        let start = 0;
        let end = data_info.length;

        while (start < end) {
            let mid = Math.floor((start + end) / 2);
            if (data_info[mid][4] < query_score) {
                start = mid + 1;
            } else {
                end = mid;
            }
        }

        // 해당 범위 내에서 조건을 만족하는지 확인
        for (let i = start; i < data_info.length; i++) {
            const [lang, pos, jors, food, score] = data_info[i];

            if (
                (lang_con === '-' || lang_con === lang) &&
                (pos_con === '-' || pos_con === pos) &&
                (jors_con === '-' || jors_con === jors) &&
                (food_con === '-' || food_con === food)
            ){
                candidates[index]++;
            }
        }
    });

    return candidates;
}
