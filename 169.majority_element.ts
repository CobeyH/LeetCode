function majorityElement(nums: number[]): number {
    // We don't explicitly need to track the number of occurances of each number. We need to track the ratio between the majority element and everything else.

    let count = 0;
    let majorityElement: number = 0;
    for(const num of nums) {
        if(count === 0) {
            majorityElement = num;
        }
        if(num === majorityElement!) {
            count ++;
        } else {
            count--;
        }
    }

    return majorityElement;
};
